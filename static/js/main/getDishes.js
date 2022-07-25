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
                    const dish = {
                        name: rows[i].name,
                        picture: rows[i].picture,
                        description: rows[i].description,
                        price: rows[i].price,
                    };

                    console.log(dish);
                    removeDishCard();
                    renderDishCard(dish);
                }     
            }
        });

    })
    console.log(rows);
}

function renderDishCard(dish) {
    const dishList = document.querySelector('.catalog');

    const dishCard = document.createElement('div');
    dishCard.classList.add('cardBox');

    const dishName = document.createElement('p');
    dishName.classList.add('nameTovar');
    dishName.innerHTML = `${dish.name}`;

    const dishPicture = document.createElement('img');
    dishPicture.classList.add('tovarImg');
    dishPicture.src = dish.picture;

    const dishDescription = document.createElement('p');
    dishDescription.classList.add('descrition');
    dishDescription.innerHTML = `${dish.description}`;

    const dishPrice = document.createElement('div');
    dishPrice.classList.add('tovarPrice');
    dishPrice.innerHTML = ' ₾';
    const dishPriceSpan = document.createElement('span');
    dishPriceSpan.classList.add('tovarPriceNumber');
    dishPriceSpan.innerHTML = dish.price;


    dishCard.appendChild(dishName);
    dishCard.appendChild(dishPicture);
    dishCard.appendChild(dishDescription);

    dishPrice.appendChild(dishPriceSpan);
    dishCard.appendChild(dishPrice);


    dishList.appendChild(dishCard);

}

function removeDishCard() {
    const dishList = document.querySelector('.catalog');
    const dishCard = document.querySelector('.cardBox');

    if (dishCard != null) {
        dishList.removeChild(dishCard);
    }
}

getDishesFromDatabase();
