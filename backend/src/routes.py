from flask import Blueprint, request, jsonify
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
import requests
from bson.objectid import ObjectId
from models import Employee, Log
from retell import Retell
import os
import dotenv
import asyncio

main_routes = Blueprint("main_routes", __name__)

# --- Helper Functions ---

@main_routes.route("/sendCall", methods=["GET"])
async def send_call():
    retell_client = Retell(
        api_key = os.getenv("RETELL_API_KEY")
    )

    try:
        data = request.json
        employee = Employee.fetch(data["emp_id"])
        if not employee:
            return jsonify({"error": "Employee not found"}), 404

        # Run the synchronous create_phone_call in a thread
        response = await asyncio.to_thread(
            retell_client.call.create_phone_call,
            from_number="+18559482251",
            to_number=employee["phone"]
        )

        transcript = response.transcript
        sentiment = response.call_analysis.call_successful
        summary = response.call_analysis.call_summary
        
        return jsonify({"Employee": employee["emp_id"], "Pass/Fail": sentiment})

    except Exception as e:
        print(f"Error making call: {e}")

def parse_report(report):
    """
    Parse the AI-generated report and extract key details.
    Expected report format:
    
    Summary: 
      - Caller: IT Helpdesk Staff 
      - Agent: CEO (Deepfake) 
      - Key Points: 
          - CEO claimed an urgent security breach.
          - Requested admin credentials.
          - Employee initially refused but later provided access credentials.
          - Urgency and authority were used to persuade the caller.
      - Outcome: Sensitive credentials were shared.
    
    Returns a dict with parsed data and a numeric result (0 for Fail, 1 for Pass).
    """
    try:
        summary = report.split("Summary:")[1].strip()
        caller = summary.split("- Caller:")[1].split("- Agent:")[0].strip()
        agent = summary.split("- Agent:")[1].split("- Key Points:")[0].strip()
        key_points_start = summary.find("- Key Points:") + len("- Key Points:")
        key_points_end = summary.find("- Outcome:")
        key_points_section = summary[key_points_start:key_points_end].strip()
        key_points = key_points_section.split("\n  - ")
        if key_points[0] == "":
            key_points = key_points[1:]
        outcome = summary.split("- Outcome:")[1].strip()
        # Use 0 for fail if outcome indicates sharing/providing; 1 for pass otherwise.
        result = 0 if ("shared" in outcome.lower() or "provided" in outcome.lower()) else 1
        return {
            "caller": caller,
            "agent": agent,
            "key_points": key_points,
            "outcome": outcome,
            "result": result,
        }
    except Exception as e:
        raise ValueError(f"Failed to parse report: {e}")

def send_email(to, subject, body):
    """
    Send an email using SMTP.
    Replace SMTP details with your actual configuration.
    """
    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = "security@example.com"
    msg["To"] = to

    try:
        with smtplib.SMTP("smtp.example.com", 587) as server:
            server.starttls()
            server.login("your_email@example.com", "your_password")
            server.sendmail(msg["From"], [msg["To"]], msg.as_string())
    except Exception as e:
        print("Error sending email:", e)
        raise ValueError(f"Failed to send email: {e}")

def notify_manager(employee_id, parsed_report):
    """
    Notify the employee's manager about a failed security test.
    """
    try:
        employee = Employee.fetch(employee_id)
        if not employee:
            raise ValueError("Employee not found")
        manager_email = employee.get("manager_email")
        if not manager_email:
            raise ValueError("Manager email not found for the employee")
        send_email(
            to=manager_email,
            subject=f"Security Test Failed: {employee['name']}",
            body=f"""
Dear Manager,

The employee {employee['name']} has failed a security awareness test.

Details:
- Caller: {parsed_report['caller']}
- Agent: {parsed_report['agent']}
- Key Points: {', '.join(parsed_report['key_points'])}
- Outcome: {parsed_report['outcome']}

Please take appropriate action.
"""
        )
    except Exception as e:
        raise ValueError(f"Failed to notify manager: {e}")

def call_webhook(data):
    """
    Send data to the provided webhook.
    """
    webhook_url = "https://hook.us2.make.com/rdnl33adw2uwjrxjp2usyngipsvk5b6f"
    try:
        response = requests.post(webhook_url, json=data)
        response.raise_for_status()
    except Exception as e:
        print("Error calling webhook:", e)
        # Optionally log or handle the error further.

# region --- Employee Routes ---

@main_routes.route("/employee", methods=["GET"])
def get_employee():
    """Get a specific employee by their employee_id."""
    try:
        data = request.json
        employee = Employee.fetch(data["emp_id"])
        if not employee:
            return jsonify({"error": "Employee not found"}), 404
        return jsonify({"message": "Selected employee", "row": employee})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@main_routes.route("/employees", methods=["GET"])
def get_all_employees():
    """Fetch all employees and return them as JSON."""
    try:
        employees = list(Employee.collection.find({}))
        for emp in employees:
            emp["_id"] = str(emp["_id"])
        return jsonify(employees)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@main_routes.route("/employees", methods=["POST"])
def add_employee_route():
    """Add a new employee to the database."""
    try:
        data = request.json
        emp_id = Employee.add(
            data["name"],
            data["emp_id"],
            data["phone"],
            data["email"],
            data["position"],
            data.get("manager_email")
        )
        return jsonify({"message": "Employee added", "id": emp_id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@main_routes.route("/employees/<emp_id>", methods=["DELETE"])
def delete_employee_route(emp_id):
    """Delete an employee by employee_id."""
    try:
        deleted_count = Employee.delete(emp_id)
        return jsonify({"message": "Employee deleted", "deleted_count": deleted_count})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
# endregion

# region --- Logs Routes ---

@main_routes.route("/logs", methods=["GET"])
def get_all_logs():
    """Fetch all logs and return them as JSON."""
    try:
        logs = list(Log.collection.find({}))
        for log in logs:
            log["_id"] = str(log["_id"])
        return jsonify(logs)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@main_routes.route("/logs", methods=["POST"])
def add_log_route():
    """Add a new log to the database."""
    try:
        data = request.json
        log_id = Log.add(
            data["emp_id"],
            data["scenario_type"],
            data["message"],
            data.get("response", "Pending"),
            data.get("outcome", "Pending")
        )
        return jsonify({"message": "Log added", "id": str(log_id)}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@main_routes.route("/logs/<log_id>", methods=["DELETE"])
def delete_log_route(log_id):
    """
    Delete a log by its _id.
    (Here we first fetch the log to retrieve its employee_id.)
    """
    try:
        log = Log.collection.find_one({"_id": ObjectId(log_id)})
        if not log:
            return jsonify({"error": "Log not found"}), 404
        deleted_count = Log.delete(log["employee_id"])
        return jsonify({"message": "Log deleted", "deleted_count": deleted_count})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@main_routes.route("/track-response", methods=["POST"])
def track_response():
    """
    Process the AI-generated report and update the log.
    Expects a JSON payload:
    {
        "emp_id": "...",
        "report": "..."
    }
    """
    try:
        data = request.json
        emp_id = data["emp_id"]
        report = data["report"]

        parsed_report = parse_report(report)

        # Determine response and outcome (numeric outcome: 0 for fail, 1 for pass)
        response_text = "Provided Credentials" if parsed_report["result"] == 0 else "Ignored"
        outcome_value = parsed_report["result"]

        # Update the log where employee_id matches and response is "Pending"
        update_result = Log.collection.update_one(
            {"employee_id": emp_id, "response": "Pending"},
            {
                "$set": {
                    "response": response_text,
                    "outcome": outcome_value,
                    "report": parsed_report,
                    "timestamp": datetime.utcnow().isoformat() + "Z"
                }
            },
        )
        if update_result.matched_count == 0:
            return jsonify({"error": "No pending log found for the employee"}), 404

        # Optionally, call the webhook with the updated log data
        updated_log = Log.collection.find_one({"employee_id": emp_id, "response": response_text})
        call_webhook(updated_log)

        # Notify the manager if the employee failed (outcome_value 0)
        if outcome_value == 0:
            notify_manager(emp_id, parsed_report)

        return jsonify({"message": "Report processed successfully"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
# endregion

# region --- Analytics Endpoints ---

@main_routes.route("/analytics/passRate", methods=["GET"])
def get_pass_rate():
    """Calculate the pass rate for phishing simulations."""
    try:
        logs = list(Log.collection.find({}))
        total = len(logs)
        passed = sum(1 for log in logs if log.get("outcome") == 1)
        pass_rate = (passed / total) * 100 if total > 0 else 0
        return jsonify({"total": total, "pass_rate": pass_rate})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@main_routes.route("/analytics/topScenarios", methods=["GET"])
def get_top_scenarios():
    """Identify the most common phishing scenarios."""
    try:
        pipeline = [
            {"$group": {"_id": "$scenario_type", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
        ]
        top_scenarios = list(Log.collection.aggregate(pipeline))
        return jsonify(top_scenarios)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@main_routes.route("/analytics/weaknesses", methods=["GET"])
def get_weaknesses():
    """Identify positions with the highest failure rates."""
    try:
        pipeline = [
            {
                "$lookup": {
                    "from": "employees",
                    "localField": "employee_id",
                    "foreignField": "employee_id",
                    "as": "employee_details",
                }
            },
            {"$unwind": "$employee_details"},
            {
                "$group": {
                    "_id": "$employee_details.position",
                    "failures": {"$sum": {"$cond": [{"$eq": ["$outcome", 0]}, 1, 0]}},
                }
            },
            {"$sort": {"failures": -1}},
        ]
        weaknesses = list(Log.collection.aggregate(pipeline))
        return jsonify(weaknesses)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
#endregion
