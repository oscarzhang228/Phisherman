from pymongo import MongoClient

# Replace <db_password> with your actual password
MONGO_URI = "mongodb+srv://jamesywang88:<db_password>@cluster0.q7a3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Initialize the MongoDB client
client = MongoClient(MONGO_URI)

class Employee:
    """
    Handles operations for the Employee_database using Employee ID as the key.
    """
    db = client["Employee_database"]
    collection = db["Phisherman Collection"]

    @staticmethod
    def add(name, emp_id, phone, email, position):
        """
        Insert a new employee document.
        """
        row = {
            "Name": name,
            "Employee ID": emp_id,
            "Phone": phone,
            "Email": email,
            "Position": position
        }
        result = Employee.collection.insert_one(row)
        print("Added employee row with _id:", result.inserted_id)
        # Return the provided Employee ID for further operations
        return emp_id

    @staticmethod
    def fetch(emp_id):
        """
        Retrieve an employee document by its Employee ID.
        """
        try:
            row = Employee.collection.find_one({"Employee ID": emp_id})
            if row:
                print("Fetched employee row:", row)
            else:
                print("No employee row found with Employee ID:", emp_id)
            return row
        except Exception as e:
            print("Error fetching employee row:", e)
            return None

    @staticmethod
    def delete(emp_id):
        """
        Delete an employee document by its Employee ID.
        """
        try:
            result = Employee.collection.delete_one({"Employee ID": emp_id})
            if result.deleted_count:
                print("Deleted employee row with Employee ID:", emp_id)
            else:
                print("No employee row found with Employee ID:", emp_id)
            return result.deleted_count
        except Exception as e:
            print("Error deleting employee row:", e)
            return 0

class Log:
    """
    Handles operations for the Logs_database using Employee ID as the key.
    The document structure is the same as in the Employee_database.
    """
    db = client["Logs_database"]
    collection = db["Phisherman Collection"]

    @staticmethod
    def add(name, emp_id, phone, email, position):
        """
        Insert a new log document.
        """
        row = {
            "Name": name,
            "Employee ID": emp_id,
            "Phone": phone,
            "Email": email,
            "Position": position
        }
        result = Log.collection.insert_one(row)
        print("Added log row with _id:", result.inserted_id)
        # Return the provided Employee ID for further operations
        return emp_id

    @staticmethod
    def fetch(emp_id):
        """
        Retrieve a log document by its Employee ID.
        """
        try:
            row = Log.collection.find_one({"Employee ID": emp_id})
            if row:
                print("Fetched log row:", row)
            else:
                print("No log row found with Employee ID:", emp_id)
            return row
        except Exception as e:
            print("Error fetching log row:", e)
            return None

    @staticmethod
    def delete(emp_id):
        """
        Delete a log document by its Employee ID.
        """
        try:
            result = Log.collection.delete_one({"Employee ID": emp_id})
            if result.deleted_count:
                print("Deleted log row with Employee ID:", emp_id)
            else:
                print("No log row found with Employee ID:", emp_id)
            return result.deleted_count
        except Exception as e:
            print("Error deleting log row:", e)
            return 0