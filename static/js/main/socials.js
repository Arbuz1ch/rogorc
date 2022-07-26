// Get the modal
let modal = document.getElementById("socialsModal");

let arrow = document.querySelector('.socialsArrow');

// Get the button that opens the modal
let btn = document.getElementById("socBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let body = document.getElementById("body");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
  arrow.classList.add("activeArrow");
  body.style.overflow = 'hidden';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  arrow.classList.remove("activeArrow");
  body.style = 'none';
}

// When the user clicks anywhere outside of the modal, close it
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    arrow.classList.remove("activeArrow");
    body.style = 'none';
  }
}