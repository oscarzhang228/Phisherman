from flask import Blueprint, request, jsonify
from models import Employee, Log  # Import models

# Create a Blueprint for routing
main_routes = Blueprint("main_routes", __name__)

# --- Employee Routes ---

@main_routes.route("/employees", methods=["GET"])
def get_all_employees():
    """Fetch all employees and return them as JSON."""
    employees = Employee.collection.find({})
    employee_list = []
    for emp in employees:
        emp["emp_id"] = str(emp["emp_id"])  # Convert ObjectId to string
        employee_list.append(emp)
    return jsonify(employee_list)

@main_routes.route("/employees", methods=["POST"])
def add_employee():
    """Add a new employee to the database."""
    try:
        data = request.json  # Get data from request body
        emp_id = Employee.add(data["name"], data["emp_id"], data["phone"], data["email"], data["position"])
        return jsonify({"message": "Employee added", "id": str(emp_id)}), 201
    except Exception as e:
        return jsonify({"message": e}), 501

@main_routes.route("/employees/<row_id>", methods=["DELETE"])
def delete_employee(row_id):
    """Delete an employee by _id."""
    deleted_count = Employee.delete(row_id)
    if deleted_count:
        return jsonify({"message": "Employee deleted"})
    else:
        return jsonify({"error": "Employee not found"}), 404

# --- Logs Routes ---

@main_routes.route("/logs", methods=["GET"])
def get_all_logs():
    """Fetch all logs and return them as JSON."""
    logs = Log.collection.find({})
    log_list = []
    for log in logs:
        log["_id"] = str(log["_id"])  # Convert ObjectId to string
        log_list.append(log)
    return jsonify(log_list)

@main_routes.route("/logs", methods=["POST"])
def add_log():
    """Add a new log to the database."""
    data = request.json
    log_id = Log.add(data["name"], data["emp_id"], data["phone"], data["email"], data["position"])
    return jsonify({"message": "Log added", "id": str(log_id)}), 201

@main_routes.route("/logs/<row_id>", methods=["DELETE"])
def delete_log(row_id):
    """Delete a log by _id."""
    deleted_count = Log.delete(row_id)
    if deleted_count:
        return jsonify({"message": "Log deleted"})
    else:
        return jsonify({"error": "Log not found"}), 404
