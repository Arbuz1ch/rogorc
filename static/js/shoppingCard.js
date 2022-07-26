// Get the modal
let shoppingCard = document.getElementById("shoppingCard");

let modalCloseArea = document.getElementById("modalCloseArea")

// Get the button that opens the modal
let basket = document.getElementById("basket");

let continueShopping = document.getElementById("continueShopping");

// Get the <span> element that closes the modal
let back = document.getElementsByClassName("back")[0];

let body1 = document.getElementById("body");

// When the user clicks on the button, open the modal
basket.onclick = function() {
  shoppingCard.style.display = "flex";
  // shoppingCard.classList.add("activeShoppingCard");
  body1.style.overflow = 'hidden';
}

continueShopping.onclick = function() {
  shoppingCard.style.display = "none";
  // shoppingCard.classList.remove("activeShoppingCard");
  body1.style = 'none';
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalCloseArea) {
    shoppingCard.style.display = "none";
    // shoppingCard.classList.remove("activeShoppingCard");
    body1.style = 'none';
  }
}