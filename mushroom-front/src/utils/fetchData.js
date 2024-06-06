export async function getTest() {
    const response = await fetch("http://127.0.0.1:5000/test", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const mushrooms = await response.json();

    return mushrooms;
}

export async function getMushrooms() {
    const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'cap-diameter': 1337,
            'cap-shape': 6,
            'gill-attachment': 2,
            'gill-color': 10,
            'stem-height': 3.7756348426601622,
            'stem-width': 1520,
            'stem-color': 11,
            'season': 0.9431945538974952
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const mushrooms = await response.json();

    return mushrooms;
}

