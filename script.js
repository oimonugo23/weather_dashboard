//DOM ELEMENTS
var formEL = document.getElementById("search-form");

formEL.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target.children[0].value);
});


