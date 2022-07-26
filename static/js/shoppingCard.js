let shoppingCard = document.getElementById("shoppingCard");

let modalCloseArea = document.getElementById("modalCloseArea")

let basket = document.getElementById("basket");

let continueShopping = document.getElementById("continueShopping");

// let back = document.getElementsByClassName("back")[0];

let modalTile = document.getElementById("modalTile");

let body1 = document.getElementById("body");

basket.onclick = function() {
  shoppingCard.style.display = "flex";
  body1.style.overflow = 'hidden';
}

continueShopping.onclick = function() {
  shoppingCard.style.display = "none";
  body1.style = 'none';
}

window.onclick = function(event) {
  if (event.target == modalCloseArea) {
    shoppingCard.style.display = "none";
    body1.style = 'none';
  }
}