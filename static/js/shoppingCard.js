let shoppingCard = document.getElementById("shoppingCard");

let modalCloseArea = document.getElementById("modalCloseArea")

let basket = document.getElementById("basket");

let continueShopping = document.getElementById("continueShopping");

let modalTile = document.getElementById("modalTile");

let body1 = document.getElementById("body");

const cartList = document.querySelector('.cartList');

basket.onclick = function() {
  shoppingCard.style.display = "flex";
  modalTile.classList.remove("activeModalTile");
  body1.style.overflow = 'hidden';

  const cartDish = JSON.parse(localStorage.getItem('cartDish'));

  for (let i = 0; i < cartDish.length; i++) {
    const dish = {
      name: cartDish[i].name,
      picture: cartDish[i].picture,
      price: cartDish[i].price
    }
      renderCart(dish);
  }

}

continueShopping.onclick = function() {
  setTimeout(() => {
    shoppingCard.style.display = "none";
    document.querySelector('.cartProduct').remove();
  }, 500);
  modalTile.classList.add("activeModalTile");
  body1.style = 'none';

}

window.onclick = function(event) {
  if (event.target == modalCloseArea) {
    setTimeout(() => {
      shoppingCard.style.display = "none";
      document.querySelector('.cartProduct').remove();
    }, 500);
    modalTile.classList.add("activeModalTile");
    body1.style = 'none';
    
  }
}

modalTile.addEventListener('click', event => {
  console.log(event.target);

  if (event.target.classList.contains('plus')) {
    console.log('plus');
  }
})

function renderCart(dish) {

  const cartProduct = document.createElement('div');
  cartProduct.classList.add('cartProduct');

  const cardProductContent = document.createElement('div');
  cardProductContent.classList.add('cardProductContent');

  const productPreview = document.createElement('span');
  productPreview.classList.add('productPreview');
  const cartImage = document.createElement('img');

  const productInfo = document.createElement('div');
  productInfo.classList.add('productInfo');
  const productName = document.createElement('span');
  productName.classList.add('productName');
  productName.innerHTML = dish.name;
  const productCountTitle = document.createElement('span');
  productCountTitle.classList.add('productCountTitle');
  productCountTitle.innerHTML = 'Количество: ';

  const count = document.createElement('div');
  count.classList.add('count');
  const minus = document.createElement('span');
  minus.classList.add('minus');
  minus.innerHTML = '-';
  const productCountValue = document.createElement('input');
  productCountValue.classList.add('productCountValue');
  const plus = document.createElement('span');
  plus.classList.add('plus');
  plus.innerHTML = '+';

  const productPrice = document.createElement('span');
  productPrice.classList.add('productPrice');

  const productRemove = document.createElement('div');
  productRemove.classList.add('productRemove');




  productPreview.appendChild(cartImage);
  cardProductContent.appendChild(productPreview);

  count.appendChild(minus);
  count.appendChild(productCountValue);
  count.appendChild(plus);

  productInfo.appendChild(productName);
  productInfo.appendChild(productCountTitle);
  productInfo.appendChild(count);
  cardProductContent.appendChild(productInfo);

  cardProductContent.appendChild(productRemove);

  cartProduct.appendChild(cardProductContent);
  cartList.appendChild(cartProduct);
  
}