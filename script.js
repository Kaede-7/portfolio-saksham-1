let form = document.getElementById("form");
let output = document.getElementById("output");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  output.innerText = "Form submitted succesfully!";
  form.reset();
});
