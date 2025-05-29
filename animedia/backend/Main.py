from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from jikanpy import Jikan
import os

app = Flask(__name__)
CORS(app)

# MongoDB setup
app.config["MONGO_URI"] = "mongodb://localhost:27017/animedia"
mongo = PyMongo(app)

# Jikanpy setup
jikan = Jikan()

# Route to search for anime using Jikanpy
@app.route('/search', methods=['GET'])
def search_anime():
    query = request.args.get('q')
    if not query:
        return jsonify({"error": "Please provide an anime name using ?q=anime_name"}), 400
    try:
        results = jikan.search('anime', query)
        return jsonify(results)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to save anime to MongoDB
@app.route('/save', methods=['POST'])
def save_anime():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400
    mongo.db.animes.insert_one(data)
    return jsonify({"message": "Anime saved to your toy box!"}), 201

# Route to get all saved anime from MongoDB
@app.route('/saved', methods=['GET'])
def get_saved_anime():
    animes = list(mongo.db.animes.find({}, {'_id': 0}))
    return jsonify(animes)

if __name__ == '__main__':
    app.run(debug=True)
