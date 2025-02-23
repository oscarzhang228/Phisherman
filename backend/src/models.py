import os
from datetime import datetime
from pymongo import MongoClient
from bson.objectid import ObjectId
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get the MongoDB connection URI from your environment.
MONGO_URI = os.getenv("MONGO_URI")
if not MONGO_URI:
    raise Exception("MONGO_URI not set in environment variables")

# Initialize MongoDB client and use two separate databases.
client = MongoClient(MONGO_URI)

# Health check for MongoDB connection
try:
    client.admin.command('ping')
    print("Connected to MongoDB!")
except Exception as e:
    print("Failed to connect to MongoDB:", e)
    raise ConnectionError("Failed to connect to MongoDB. Check your credentials or network.")

employee_db = client["Employee_database"]
logs_db = client["Logs_database"]

class Employee:
    """
    Handles operations for the employees collection in Employee_database.
    """
    collection = employee_db["employees"]

    @staticmethod
    def add(name, employee_id, phone, email, position, manager_email=None):
        try:
            existing_employee = Employee.collection.find_one({"employee_id": employee_id})
            if existing_employee:
                raise ValueError(f"Employee ID {employee_id} already exists in database.")
            
            row = {
                "name": name,
                "employee_id": employee_id,
                "phone": phone,
                "email": email,
                "position": position,
                "manager_email": manager_email
            }
            result = Employee.collection.insert_one(row)
            print("Added employee with _id:", result.inserted_id)
            return employee_id  # Return the provided employee_id
        
        except Exception as e:
            raise ValueError(f"Failed to add employee: {e}")

    @staticmethod
    def fetch(employee_id):
        try:
            row = Employee.collection.find_one({"employee_id": employee_id})
            if row:
                print("Fetched employee:", row)
                return row
            else:
                raise ValueError(f"No employee found with employee_id: {employee_id}")
        except Exception as e:
            raise ValueError(f"Error fetching employee: {e}")

    @staticmethod
    def delete(employee_id):
        try:
            result = Employee.collection.delete_one({"employee_id": employee_id})
            if result.deleted_count:
                print("Deleted employee with employee_id:", employee_id)
            else:
                raise ValueError(f"No employee found with employee_id: {employee_id}")
            return result.deleted_count
        except Exception as e:
            raise ValueError(f"Error deleting employee: {e}")


class Log:
    """
    Handles operations for the logs collection in Logs_database.
    Outcome is stored as numeric: 0 for Fail, 1 for Pass.
    """
    collection = logs_db["logs"]

    @staticmethod
    def add(employee_id, scenario_type, message, response="Pending", outcome="Pending"):
        try:
            row = {
                "employee_id": employee_id,
                "scenario_type": scenario_type,
                "message": message,
                "response": response,
                "outcome": outcome,
                "report": {},
                "timestamp": datetime.utcnow().isoformat() + "Z"
            }
            result = Log.collection.insert_one(row)
            print("Added log with _id:", result.inserted_id)
            return result.inserted_id
        except Exception as e:
            raise ValueError(f"Failed to add log: {e}")

    @staticmethod
    def fetch(employee_id, response=None):
        try:
            query = {"employee_id": employee_id}
            if response:
                query["response"] = response
            row = Log.collection.find_one(query)
            if row:
                print("Fetched log:", row)
                return row
            else:
                raise ValueError(f"No log found with query: {query}")
        except Exception as e:
            raise ValueError(f"Error fetching log: {e}")

    @staticmethod
    def delete(log_id):
        try:
            result = Log.collection.delete_one({"_id": ObjectId(log_id)})
            if result.deleted_count:
                print("Deleted log with _id:", log_id)
            else:
                raise ValueError(f"No log found with _id: {log_id}")
            return result.deleted_count
        except Exception as e:
            raise ValueError(f"Error deleting log: {e}")