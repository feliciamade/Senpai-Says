from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
import os

app = Flask(__name__)

app.config["MONGO_URI"] = os.getenv("MONGO_URI", "your_mongodb_atlas_connection_string_here")

mongo = PyMongo(app)

@app.route('/anime', methods=['POST'])
def add_anime():
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    
    result = mongo.db.anime_collection.insert_one(data)
    
    return jsonify({"message": "Anime added", "id": str(result.inserted_id)}), 201

@app.route('/anime', methods=['GET'])
def get_all_anime():
    animes = list(mongo.db.anime_collection.find({}, {'_id': 0}))  # omit _id or convert if needed
    return jsonify(animes)

if __name__ == '__main__':
    app.run(debug=True)
