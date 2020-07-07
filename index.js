
// Calling stickHeader on scroll
window.onscroll = () => {stickHeader()};

// Get needed elements from document
let header = document.getElementById("theHeader")
let nav = document.getElementById("theNav");
// Creating elements for back to top link on sticky header
let li = document.createElement("li");
let a = document.createElement("a");


// Get the offset position of the navbar
const sticky = header.offsetTop;

let stickHeader = () => {

  if (window.pageYOffset > sticky) {

    // Removes stick updates when at top of page Yoffset
    header.classList.add("sticky");
    nav.classList.add("stickyUlUpdate");
    // Creating classes for top of page link and adding to page

}

   else {

    //Updates header to have "sticky styles on scroll"
    header.classList.remove("sticky");
    nav.classList.remove("stickyUlUpdate");


  }

}
