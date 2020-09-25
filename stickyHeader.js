// STICKY HEADER //
// Execute stickyHeader when the page is scrolled
window.onscroll = function() {stickyHeader()};
// Get the header
var sticky_header = document.getElementById("header_wrapper");
// Get the offset position of the navbar
var sticky = sticky_header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    sticky_header.classList.add("sticky");
  } else {
    sticky_header.classList.remove("sticky");
  }
}

//   -  -  -  //