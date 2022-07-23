async function getDishesFromDatabase() {
    options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    };

    await fetch('/dishes', options)
        .then(response => response.json())
        .then(json => jsonDishesHandler(json));
}


function jsonDishesHandler(json) {
    const rows = json.data.rows;

    dataVisualizer(rows);
}

function dataVisualizer(rows) {
    console.log(rows);
}

getDishesFromDatabase();
