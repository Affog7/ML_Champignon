import pickle

from flask import Flask, jsonify, request
import numpy as np

app = Flask(__name__)

# Chargement du modèle 
model = pickle.load(open('C:/Users/Affognon/Documents/Machine learning/champignon/model.pkl', 'rb'))
@app.route('/', methods=['GET'])
def home():
    return jsonify({'home': 'Champignon'})

@app.route('/predict', methods=['POST'])
def predict():
    # Récupération des données du formulaire
    cap_diameter = request.values["cap-diameter"]
    cap_shape = request.values['cap-shape']
    gill_attachment = request.values['gill-attachment']
    gill_color = request.values['gill-color']
    stem_height = request.values['stem-height']
    stem_width = request.values['stem-width']
    stem_color = request.values['stem-color']
    season = request.values['season']

    # Création du vecteur de caractéristiques
    features = [cap_diameter, cap_shape, gill_attachment, gill_color, stem_height, stem_width, stem_color, season]

    print(features)
    # Prédiction avec le modèle chargé
    y = np.array(features).reshape(1, -1)
    prediction = model.predict(y)[0]

    return jsonify({'prediction': str(prediction) })


if __name__ == '__main__':
    app.run(debug=True)
