import pickle


app = Flask(__name__)

# Chargement du modèle 
model = pickle.load(open('random_forest_model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = [data['cap-diameter'], data['cap-shape'], data['gill-attachment'], data['gill-color'], data['stem-height'], data['stem-width'], data['stem-color'],data['season']]
    prediction = model.predict([features])[0]
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)
