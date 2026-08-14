//svg to code: https://nikitahl.github.io/svg-2-code/
//svg code to css: https://www.svgbackgrounds.com/tools/svg-to-css/

//-- DARK MODE ---//
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

// -- RESPONSIVE NAV BAR ---//
function responsiveNavFunc(){
  var x = document.getElementById("mainNav");
  if (x.className === "main-nav") {
    x.className += " responsive";
  } else {
    x.className = "main-nav";
  }
}