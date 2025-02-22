from flask import Flask
from routes import main_routes  # Import routes
from models import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Register routes
app.register_blueprint(main_routes)

if __name__ == "__main__":
    app.run(debug=True)  # Start the Flask server

# do ai stuff
