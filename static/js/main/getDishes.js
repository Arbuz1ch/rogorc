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

    console.log(rows);
    dataGetter(rows);
}

function dataGetter(rows) {

    for (let i = 0; i < rows.length; i++) {

        const dish = {
            id: rows[i].id,
            name: rows[i].name,
            picture: rows[i].picture,
            description: rows[i].description,
            price: rows[i].price,
            categoryId: rows[i].categoryId,
        };

        renderDishCard(dish);
    
    }

    const catButton = document.querySelectorAll('.categoryButton');
    const cardBox = document.querySelectorAll('.cardBox');

    catButton.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            dataFilter(button.dataset.c, cardBox);
        });

    })
}

function dataFilter(category, items) {
    items.forEach((item) => {
        const isDataFiltered = !item.classList.contains(category);
        if (isDataFiltered) {
            item.classList.add('hide');
        } else {
            item.classList.remove('hide');
        }
    });
}

function renderDishCard(dish) {
    const dishList = document.querySelector('.catalog');

    const dishCard = document.createElement('div');
    dishCard.classList.add('cardBox');
    dishCard.classList.add(dish.categoryId);

    const dishName = document.createElement('p');
    dishName.classList.add('nameTovar');
    dishName.classList.add(dish.id);
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

    const cartButton = document.createElement('button');
    cartButton.classList.add('buyButton');
    cartButton.innerHTML = 'В корзину';

    dishCard.appendChild(dishName);
    dishCard.appendChild(dishPicture);
    dishCard.appendChild(dishDescription);

    dishPrice.appendChild(dishPriceSpan);
    dishCard.appendChild(dishPrice);

    dishCard.appendChild(cartButton);

    dishList.appendChild(dishCard);

}

getDishesFromDatabase();
