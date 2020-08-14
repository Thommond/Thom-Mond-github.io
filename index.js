
// Calling stickHeader on scroll
window.onscroll = () => {stickHeader()};

// Get needed elements from document
let header = document.getElementById("theHeader")
let nav = document.getElementById("theNav");
let slidesCtn = document.querySelector('.travel-slides-ctn')
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
    slidesCtn.style.display = 'none';

}

   else {

    // Updates header to have "sticky styles on scroll"
    header.classList.remove("sticky");
    nav.classList.remove("stickyUlUpdate");
    slidesCtn.style.display = 'block';


  }

}
// Slide show on header
let index = 0;
travelSlideShow();

function travelSlideShow() {

  let count;
  let slides = document.getElementsByClassName("travel-slides");

  for (count = 0; count < slides.length; count++) {
    slides[count].style.display = "none";
  }

  index++;

  if (index > slides.length) {index = 1}
  slides[index-1].style.display = "block";
  // Change image every 3 seconds
  setTimeout(travelSlideShow, 5000);

}
