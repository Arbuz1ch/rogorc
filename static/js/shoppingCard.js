let shoppingCard = document.getElementById("shoppingCard");

let modalCloseArea = document.getElementById("modalCloseArea")

let basket = document.getElementById("basket");

let continueShopping = document.getElementById("continueShopping");

let modalTile = document.getElementById("modalTile");

let modalBlackout = document.getElementById("modalBlackout");

let body1 = document.getElementById("body");

const cartList = document.querySelectorAll('.cartList');

const orderButton = document.getElementById('orderButton');

orderButton.onclick = function() {
  const count = document.querySelector('.productCountValue');
  const dishValue = count.getAttribute('value');
  console.log(dishValue);
}


basket.onclick = function() {
  shoppingCard.style.display = "flex";
  modalTile.classList.remove("activeModalTile");
  modalBlackout.classList.remove("activeModalBlackout");
  body1.style.overflow = 'hidden';
  

  // const cartDish = JSON.parse(localStorage.getItem('cartDish'));

  // for (let i = 0; i < cartDish.length; i++) {
  //   const dish = {
  //     name: cartDish[i].name,
  //     picture: cartDish[i].picture,
  //     price: cartDish[i].price,
  //     id: i,
  //   }
  //     renderCart(dish);

  Object.keys(localStorage).forEach((key) => {
    const dishkey = JSON.parse(localStorage.getItem(`${key}`));
    console.log(key);
    const dish = {
      name: dishkey.name,
      picture: dishkey.picture,
      price: dishkey.price,
    };
    console.log(JSON.parse(JSON.stringify(dish)));
    renderCart(dish);
  })
      productRemove();    
      productCount();
  }


continueShopping.onclick = function() {
  setTimeout(() => {
    shoppingCard.style.display = "none";
    const cartProductList = document.querySelectorAll('.cartProduct');
    console.log(cartProductList);
    cartProductList.forEach((product) => {
        product.remove();
    });
  }, 495);


  modalTile.classList.add("activeModalTile");
  modalBlackout.classList.add("activeModalBlackout");
  body1.style = 'none';

}

window.onclick = function(event) {
  if (event.target == modalCloseArea) {
    setTimeout(() => {
      shoppingCard.style.display = "none";
      const cartProductList = document.querySelectorAll('.cartProduct');
      console.log(cartProductList);
      cartProductList.forEach((product) => {
          product.remove();
      });
    }, 500);
    modalTile.classList.add("activeModalTile");
    modalBlackout.classList.add("activeModalBlackout");
    body1.style = 'none';
    
  }
}

function productRemove() {
  const cartProductList = document.querySelectorAll('.cartProduct');
  cartProductList.forEach((box) => {
    box.addEventListener('click', (event) => {
      if (event.target.classList.contains('productRemove')) {
        const key = document.querySelector('.productName').innerHTML;
        localStorage.removeItem(key);
        box.remove();
      }
    })
  });
}

function productCount() { 
    cartList.forEach((box) => {
      const count = box.querySelectorAll('.count');

      count.forEach((value) => {
        value.addEventListener('click', (event) => {
        const min = parseInt(value.dataset.min);
        const max = parseInt(value.dataset.max);
        const countValue = value.querySelector('.productCountValue');
          let i = parseInt(countValue.getAttribute('value'));
          if (event.target.classList.contains('minus')) {
              if (i == min) {
                return;
              }
              i--
              countValue.setAttribute('value', i);
          }
          if (event.target.classList.contains('plus')) {
              if (i == max) {
                return;
              }
              i++
              countValue.setAttribute('value', i);
          }
        })

        })
      })
    }


function renderCart(dish) {
  const cartList = document.querySelector('.cartList');

  const cartProduct = document.createElement('div');
  cartProduct.classList.add('cartProduct');

  const cardProductContent = document.createElement('div');
  cardProductContent.classList.add('cardProductContent');

  const productPreview = document.createElement('span');
  productPreview.classList.add('productPreview');
  const cartImage = document.createElement('img');
  cartImage.src = dish.picture
  cartImage.style.width = '185px'

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
  count.dataset.data_step = 1;
  count.dataset.min = 1;
  count.dataset.max = 7;
  const minus = document.createElement('span');
  minus.classList.add('minus');
  minus.innerHTML = '-';
  const productCountValue = document.createElement('input');
  productCountValue.classList.add('productCountValue');
  let i = 1;
  productCountValue.setAttribute('value', i);
  const plus = document.createElement('span');
  plus.classList.add('plus');
  plus.innerHTML = '+';

  const productPrice = document.createElement('span');
  productPrice.classList.add('productPrice');
  productPrice.innerHTML = '₾  ' + dish.price

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
  productInfo.appendChild(productPrice);
  cardProductContent.appendChild(productInfo);

  cardProductContent.appendChild(productRemove);

  cartProduct.appendChild(cardProductContent);
  cartList.appendChild(cartProduct);
}
