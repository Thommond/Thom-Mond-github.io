
// Calling stickHeader on scroll
window.onscroll = () => {stickHeader()};

// Get needed elements from document
let header = document.getElementById("theHeader")
let nav = document.getElementById("theNav");
let slidesCtn = document.querySelector('.travel-slides-ctn')
let captionsCtn = document.querySelector('.travel-slides-captions-ctn')
// Creating elements for back to top link on sticky header
let li = document.createElement("li");
let a = document.createElement("a");

// Get the offset position of the navbar
const sticky = header.offsetTop;

let stickHeader = () => {

  if (window.pageYOffset > sticky) {
    // Updates header to have "sticky styles on scroll"
    header.classList.add("sticky");
    nav.classList.add("stickyUlUpdate");
    // Slides will not display while header is "sticky"
    slidesCtn.style.display = 'none';
    captionsCtn.style.display = 'none';

}

   else {

    // Removes stick updates when at top of page Yoffset
    header.classList.remove("sticky");
    nav.classList.remove("stickyUlUpdate");
    slidesCtn.style.display = 'block';
    captionsCtn.style.display = 'inline';


  }

}



let slideIndex = 0;

travelSlideShow();

function travelSlideShow() {

  let count;

  const captions = document.getElementsByClassName("travel-captions");
  const slides = document.getElementsByClassName("travel-slides")

  // Loop through images
  for (count = 0; count < slides.length; count++) {
    captions[count].style.display = "none";
    slides[count].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}

  slides[slideIndex-1].style.display = "block";
  captions[slideIndex-1].style.display = "inline";
  setTimeout(travelSlideShow, 5000); // Change image every 5 seconds
}
