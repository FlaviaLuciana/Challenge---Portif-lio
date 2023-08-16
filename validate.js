const camposDoFormulario = document.querySelectorAll("[required]")
const error = document.querySelector(".error")

camposDoFormulario.addEventListener(
    "input",
    function (event) {
      
      if (camposDoFormulario.validity.valid) {
        
        error.innerHTML = ""; 
        error.className = "error"; 
      }
    },
    false,
);

camposDoFormulario.addEventListener(
    "submit",
    function (event) {
      
      if (!camposDoFormulario.validity.valid) {
        
        error.innerHTML = "Espero um e-mail";
        error.className = "error active";
        
        event.preventDefault();
      }
    },
    false,
);