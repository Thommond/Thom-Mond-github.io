
// Main function
window.onscroll = () => {stickHeader()};

// Get the header
var header = document.getElementById("theHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Adds the sticky header class when offset is not start

stickHeader = () => {

  if (window.pageYOffset > sticky) {

    header.classList.add("sticky");
}
// Sticks to page if offset is not start
   else {

    header.classList.remove("sticky");
  }

}
