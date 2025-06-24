let slideIndex = [1,1];

//each slideshow group gets its own classes for css
let slideId = ["mySlides1", "mySlides2"] 
showSlides(1, 0);
showSlides(1, 1);

//what the prev/next btns call.
//this calls another func with actual slide changing logic to keep things clean
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

//slideshow logic of displaying appropriate slides
function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  console.log("n = ",n);//debug
  console.log("no = ",no);//debug
  if (n > x.length) 
    {
      slideIndex[no] = 1;
      //console.log("slideIndex[no] = ",slideIndex[no]);//debug
      console.log("no = ",no);//debug
    } 
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  console.log("Right before displaying the slides");//debug
  x[slideIndex[no]-1].style.display = "block"; 
}