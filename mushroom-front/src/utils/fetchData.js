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

export async function getMushrooms(data) {
    const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const mushrooms = await response.json();

    return mushrooms;
}

