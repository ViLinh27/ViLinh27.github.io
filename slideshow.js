let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    console.log("plusSlides called, n:", n);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    console.log("currentSlide called, n:", n);
  showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log("showSlides called, n:", n);
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");

  console.log("Total slides:", slides.length);
  console.log("Current slideIndex (before adjustments):", slideIndex);

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  console.log("slideIndex (after adjustments):", slideIndex);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}