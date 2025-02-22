from pymongo import MongoClient
from bson.objectid import ObjectId

# Replace with your MongoDB cluster connection string
MONGO_URI = "mongodb+srv://jamesywang88:<db_password>@cluster0.q7a3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Connect to your MongoDB cluster and select the database and collection
client = MongoClient(MONGO_URI)
db = client["Employee_database"]         # Change 'my_database' to your database name
collection = db["Phisherman Collection"]     # Change 'my_collection' to your collection name

def add_row(col1_text, col2_text, col3_text, col4_text, col5_text):
    """
    Add a new row (document) with 4 columns (fields) to the collection.
    """
    row = {
        "Name": col1_text,
        "Employee ID": col2_text,
        "Phone": col3_text,
        "Email": col4_text,
        "Position": col5_text
    }
    result = collection.insert_one(row)
    print("Added row with _id:", result.inserted_id)
    return result.inserted_id

def fetch_row(row_id):
    """
    Fetch a row (document) from the collection by its _id.
    """
    try:
        row = collection.find_one({"_id": ObjectId(row_id)})
        if row:
            print("Fetched row:", row)
        else:
            print("No row found with _id:", row_id)
        return row
    except Exception as e:
        print("Error fetching row:", e)

def delete_row(row_id):
    """
    Delete a row (document) from the collection by its _id.
    """
    try:
        result = collection.delete_one({"_id": ObjectId(row_id)})
        if result.deleted_count:
            print("Deleted row with _id:", row_id)
        else:
            print("No row found with _id:", row_id)
        return result.deleted_count
    except Exception as e:
        print("Error deleting row:", e)

# Example usage
if __name__ == "__main__":
    # Add a new row
    new_row_id = add_row("Text for col1", "Text for col2", "Text for col3", "Text for col4")
    
    # Fetch the newly added row
    fetched_row = fetch_row(new_row_id)
    
    # Delete the row
    delete_row(new_row_id)