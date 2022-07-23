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

    const rows = json.data.rows

    console.log(rows);

    const categoryButton = document.querySelectorAll('.categoryButton');

    let i = 0;
    categoryButton.forEach((button) => {
        button.innerHTML = `${rows[i].name}`;
        button.setAttribute("data-c", rows[i].id);
        console.log(button.dataset.c);   
        i++;    
    });
};

getDataFromDatabase();
