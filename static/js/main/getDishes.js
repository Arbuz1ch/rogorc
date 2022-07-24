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

    dataFilter(rows);
}

function dataFilter(rows) {

    const catButton = document.querySelectorAll('.categoryButton');
    catButton.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const dataAttr = button.getAttribute('data-c');
            for (let i = 0; i < rows.length; i++) {
                if (dataAttr === rows[i].categoryId) {
                    console.log({
                        name: rows[i].name,
                        desciption: rows[i].description,
                        price: rows[i].price,
                    });
                }
            }
        });

    })
    console.log(rows);
}

getDishesFromDatabase();
