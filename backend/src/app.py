from flask import Flask
from routes import main_routes  # Import routes
from models import *

app = Flask(__name__)

# Register routes
app.register_blueprint(main_routes)

if __name__ == "__main__":
    app.run(debug=True)  # Start the Flask server

