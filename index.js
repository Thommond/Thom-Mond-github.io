
// Main function
window.onscroll = () => {stickHeader()};

// Get the header and nav
let header = document.getElementById("theHeader")
let nav = document.getElementById("theNav");

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Adds the sticky header class when offset is not start

// TODO: Add so header 'shrinks' in size and styles follow shrink
// TODO: Delete p element from header and add when user is at top of page
stickHeader = () => {

  if (window.pageYOffset > sticky) {

    header.classList.add("sticky");
    nav.classList.add("stickyTwo");
}
// Sticks to page if offset is not start
   else {

    header.classList.remove("sticky");
    nav.classList.remove("stickyTwo");
  }

}
