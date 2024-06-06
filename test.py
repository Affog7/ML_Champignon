from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load your model
model = pickle.load(open('random_forest_model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = [
        data['cap-diameter'], data['cap-shape'], data['gill-attachment'], data['gill-color'],
        data['stem-height'], data['stem-width'], data['stem-color'], data['season']
    ]
    # prediction = model.predict([features])[0]
    try:
        # prediction = model.predict([features])[0]
        # print('DEBUG', prediction)
        return jsonify({'prediction': 'edible'})  # jsonify({'prediction'
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/test', methods=['GET'])
def test():
    return jsonify({'message': 'Test success'})

if __name__ == '__main__':
    app.run(debug=True)
