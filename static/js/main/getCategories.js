async function getDataFromDatabase() {
    options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    await fetch('/categories', options)
    .then(response => response.json())
    .then(json => jsonHandler(json));
}   
    
const ArrayofCategories = []


function jsonHandler(json) {

    const rows = json.data.rows

    for (let i = 0; i < rows.length; i++) {
        ArrayofCategories.push(rows[i].name);
    }

    const categoryButton = document.querySelectorAll('.categoryButton');

    let i = 0;
    categoryButton.forEach((button) => {
        button.innerHTML = `${ArrayofCategories[i]}`;
        i++;    
    });
};



getDataFromDatabase();