#Making HTTP request to Jikan
from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Route to search for anime using Jikan API
@app.route('/search', methods=['GET'])
def search_anime():
    query = request.args.get('q')
    if not query:
        return jsonify({"error": "Please provide an anime name using ?q=anime_name", "status":400})
    # Call Jikan API to search for anime
    jikan_url = f"https://api.jikan.moe/v4/anime"
    params = {'q': query, 'limit': 5}
    response = requests.get(jikan_url, params=params)
    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch data from Jikan API"}), 500
    data = response.json()
    return jsonify(data)
if __name__ == '__main__':
    app.run(debug=True)









