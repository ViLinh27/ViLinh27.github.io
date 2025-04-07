//svg to code: https://nikitahl.github.io/svg-2-code/
//svg code to css: https://www.svgbackgrounds.com/tools/svg-to-css/

//-- DARK MODE ---//
let dmBtn = document.getElementById("darkModebtn");
let dmTxt = "Dark Mode";
let lmTxt = "Light Mode";

function toggleDarkMode(){
  let d = document.body;
  d.classList.toggle('darkMode');
}

dmBtn.addEventListener("click",function(e){
  console.log("trigger change darkmode button text");//--------debug
  if(e.target.textContent === dmTxt){
    e.target.textContent = lmTxt;
  }
  else{
    e.target.textContent = dmTxt;
  }
});

//--- MENU FUNCTIONS ---//
function responsiveMenu(){
  var m = document.getElementById("mainTopNav");
  if(m.className==="topnav"){
    m.className+=" responsive";
  }else{
    m.className="topnav";
  }
}

//--- PROJECT GRID FUNCTIONS ---//
function flipToBack(event,txt){
	var element = event.currentTarget;
  if(element.className === "card"){
    element.style.transform = "rotateY(180deg)";
    txt.style.display = "block";
  }
};
function flipToFront(e,txt){
  var e = e.currentTarget;
  if(e.className === "card"){
    e.style.transform = "rotateY(0deg)";
    txt.style.display = "none";
  }
}

//--SCROLL TO TOP --//
function topFunc(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTop(0,0);
}

//--- MODAL FUNCTIONS ---//
var modals = document.querySelectorAll(".modal");
var modalbtn = document.querySelectorAll("button.modal-btn");
var spans = document.getElementsByClassName("close");

//user clicks project card, open modal
for(var i = 0;i <modalbtn.length ;i++){
  modalbtn[i].onclick = function(e){
    e.preventDefault();
    var modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  }
}

//user clicks close to close modal
for(var i=0;i<spans.length;i++){
  spans[i].onclick = function(){
    for(var index in modals){
      if(typeof modals[index].style !== "undefined"){
        modals[index].style.display = "none";
      }
    }//end of for loop
  }//end of anon func
}//end of outer loop

// Store the original onclick handler if it exists
const originalOnClick = window.onclick;

window.onclick = function(event) {
  // Call the original handler if it exists
  if (originalOnClick) {
    originalOnClick(event);
  }

  // Handle primary modals
  if (event.target.classList.contains("modal")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined") {
        modals[index].style.display = "none";
      }
    }
  }

  // Handle secondary modals
  secondModals.forEach(function(modal) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};


/* 
//user clicks outside modal, close too
window.onclick = function(event){
  if(event.target.classList.contains("modal")){
    for(var index in modals){
      if(typeof modals[index].style !== "undefined"){
        modals[index].style.display = "none";
      }
    }
  }
}
 */
//---TAB FUNCTIONS ---//
document.getElementById("defaultOpen").click();
function openTab(e,t){
  var i,tabcontent,tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for(i=0;i<tabcontent.length;i++){
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablinks");
  for(i=0;i<tablinks.length;i++){
    //console.log(typeof(tablinks[i].className));
    tablinks[i].className = tablinks[i].className.replace(" active","");
  }
  
  document.getElementById(t).style.display="grid";
  e.currentTarget.className += " active";
}

//--ABOUT IMAGE FUNCTION--//
//ref: https://stackoverflow.com/questions/43366738/how-to-check-if-mouse-is-still-over-element-in-javascript
let mepic = document.getElementById('aboutmepic');
let resultpic = "https://pbs.twimg.com/media/FX-qcmeWIAQk5bX?format=jpg&name=medium";
let isMouseOver = false;
mepic.addEventListener("mouseleave", function(event){
  isMouseOver = false;
  mepic.src = "https://pbs.twimg.com/media/FjgTPE3XgAAGAyM?format=jpg&name=medium";
},false);
mepic.addEventListener("mouseover", function (event) {
  isMouseOver = true;
  mepic.src = resultpic;
},false);

//--- SLIDESHOW FUNCTIONS ---//
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

