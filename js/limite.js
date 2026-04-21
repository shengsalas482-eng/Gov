function checkAndApplyErrorBorder() {
  var inputElement = document.getElementById("form-widgets-IDublinCore-title");
  //verificando se o elemento existe, para então realizar a função
  if (inputElement) {
    var maxLength = 79;
    if (inputElement.value.length > maxLength) {
      inputElement.classList.add("error-border");
    } else {
      inputElement.classList.remove("error-border");
    }
  }
}

document.addEventListener("DOMContentLoaded", checkAndApplyErrorBorder);

var inputElement = document.getElementById("form-widgets-IDublinCore-title");
if (inputElement) {
  inputElement.addEventListener("input", checkAndApplyErrorBorder);
}

function checkAndApplyErrorBorder2() {
  var inputElement2 = document.getElementById(
    "form-widgets-IDublinCore-description"
  );
  //verificando se o elemento existe, para então realizar a função
  if (inputElement2) {
    var maxLength2 = 183;

    if (inputElement2.value.length > maxLength2) {
      inputElement2.classList.add("error-border");
    } else {
      inputElement2.classList.remove("error-border");
    }
  }
}

document.addEventListener("DOMContentLoaded", checkAndApplyErrorBorder2);

var inputElement2 = document.getElementById(
  "form-widgets-IDublinCore-description"
);

if (inputElement2) {
  inputElement2.addEventListener("input", checkAndApplyErrorBorder2);
}
