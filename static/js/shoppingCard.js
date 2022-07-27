let shoppingCard = document.getElementById("shoppingCard");

let modalCloseArea = document.getElementById("modalCloseArea")

let basket = document.getElementById("basket");

let continueShopping = document.getElementById("continueShopping");

let modalTile = document.getElementById("modalTile");

let body1 = document.getElementById("body");

basket.onclick = function() {
  shoppingCard.style.display = "flex";
  modalTile.classList.remove("activeModalTile");
  body1.style.overflow = 'hidden';
}

continueShopping.onclick = function() {
  setTimeout(() => {
    shoppingCard.style.display = "none";
  }, 500);
  modalTile.classList.add("activeModalTile");
  body1.style = 'none';
}

window.onclick = function(event) {
  if (event.target == modalCloseArea) {
    setTimeout(() => {
      shoppingCard.style.display = "none";
    }, 500);
    modalTile.classList.add("activeModalTile");
    body1.style = 'none';
  }
}