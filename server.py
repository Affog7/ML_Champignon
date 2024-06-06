from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load your model
model = pickle.load(open('model-RFC.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # transform data into a pandas DataFrame
    data = pd.DataFrame(data, index=[0])
    #
    # features = [
    #     data['cap-diameter'], data['cap-shape'], data['gill-attachment'], data['gill-color'],
    #     data['stem-height'], data['stem-width'], data['stem-color'], data['season']
    # ]

    try:
        print(f"[debug] data, {data}")
        prediction = model.predict(data)[0]
        print('DEBUG predicition :', prediction, type(prediction))
        return jsonify({'prediction': int(prediction)})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/test', methods=['GET'])
def test():
    return jsonify({'message': 'Test success'})

if __name__ == '__main__':
    app.run(debug=True)
