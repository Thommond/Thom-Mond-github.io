
// Main function
window.onscroll = () => {stickHeader()};

// Get needed elements from document
let header = document.getElementById("theHeader")
let nav = document.getElementById("theNav");


// Get the offset position of the navbar
const sticky = header.offsetTop;

stickHeader = () => {

  if (window.pageYOffset > sticky) {

    //Removes stick updates when at top of page Yoffset
    header.classList.add("sticky");
    nav.classList.add("stickyUlUpdate");

}

   else {

    //Updates header to have "sticky styles on scroll"
    header.classList.remove("sticky");
    nav.classList.remove("stickyUlUpdate");

  }

}
