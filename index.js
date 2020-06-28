
// Main function
window.onscroll = () => {stickHeader()};

// Get needed elements from document
let header = document.getElementById("theHeader")
let nav = document.getElementById("theNav");
// Creating elements for back to top link on sticky header
let li = document.createElement("li");
let a = document.createElement("a");


// Get the offset position of the navbar
const sticky = header.offsetTop;

stickHeader = () => {

  if (window.pageYOffset > sticky) {

    // Removes stick updates when at top of page Yoffset
    header.classList.add("sticky");
    nav.classList.add("stickyUlUpdate");
    // Creating classes for top of page link and adding to page
    li.setAttribute("class", "topPage");
    a.setAttribute("class", "topPage");
    nav.appendChild(li);
    li.appendChild(a);
    a.setAttribute("href", "#topOfPage")
    a.textContent = 'Back to Top';

}

   else {

    //Updates header to have "sticky styles on scroll"
    header.classList.remove("sticky");
    nav.classList.remove("stickyUlUpdate");
    // Deleting back to top button once user is back at the top
    nav.removeChild(nav.lastElementChild);

  }

}
