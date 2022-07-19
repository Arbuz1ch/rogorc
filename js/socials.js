// Get the modal
let modal = document.getElementById("socialsModal");

let arrow = document.querySelector('.socialsArrow');

// Get the button that opens the modal
let btn = document.getElementById("socBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  arrow.classList.add("activeArrow");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  arrow.classList.remove("activeArrow");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    arrow.classList.remove("activeArrow");
  }
}