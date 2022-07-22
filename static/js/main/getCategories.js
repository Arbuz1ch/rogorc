async function getDataFromDatabase() {
    options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    await fetch('/categories', options)
    .then(response => response.json())
    .then(json => jsonHandler(json));
}   
    



function jsonHandler(json) {

    let rows = json.data.rows

    const ArrayofCategories = [];

    for (let i = 0; i < rows.length; i++) {
        ArrayofCategories.push(rows[i].name);
    }
    
    console.log(ArrayofCategories);
}

getDataFromDatabase();