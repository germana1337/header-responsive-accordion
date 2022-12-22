
let accordionContainer = document.querySelectorAll(".container");

accordionContainer.forEach(function (element) {
  element.addEventListener("click", function () {
    this.classList.toggle("active");
    
  });
});






