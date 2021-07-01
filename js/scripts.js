
window.addEventListener('DOMContentLoaded', event => {
  const listHoursArray = document.body.querySelectorAll('.list-hours li');
  listHoursArray[new Date().getDay()].classList.add(('today'));
})

fetch('DAWM_P/quipo.json')
  .then(response => response.json())
  .then(data => {
      

    });

introJs().start();

// Example starter JavaScript for disabling form submissions if there are invalid fields
//esta funcion valida que los campos del formulario estèn llenos
function validacion(){
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {

      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else if (form.checkValidity()) {
          console.log("hola")

        }
        form.classList.add('was-validated')
      }, false)
    })
}
validacion();
//Esta función permite que la barra de progreso crezca dependiendo de los campos que se van llenando
//Y también va decreciendo cuando una  campo queda vacio
var porcentProgress = 14.29;
var countProgress = 0;
var listId = new Array();
function prueba1(id) {
  var valor = document.getElementById(id).value;
  if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    countProgress = countProgress - porcentProgress;
    document.getElementsByClassName("progress-bar bg-success")[0].setAttribute("style", "width: " + countProgress + "%");
    document.getElementsByClassName("progress-bar bg-success")[0].setAttribute("aria-valuenow", countProgress);
  } else {
    if (!(listId.includes(id))) {
      countProgress = countProgress + porcentProgress;
      document.getElementsByClassName("progress-bar bg-success")[0].setAttribute("style", "width: " + countProgress + "%");
      document.getElementsByClassName("progress-bar bg-success")[0].setAttribute("aria-valuenow", countProgress);
      listId.push(id);
    }

  }
}
function stepper(){
  let boton = document.getElementById('boton')
  let clase = "row align-items-stretch mb-4 final";
  if (boton.textContent == "Escribir") {
      boton.value = "bloque-2";
      boton.textContent = "Siguiente";
      var bloque1 = document.querySelector("#bloque-1");
      bloque1.className = clase;
      boton.className = "btn btn-primary btn-xl text-uppercase primero";
  } else {
      if (boton.value == "bloque-2") {
          boton.value = "bloque-3";
          var bloque2 = document.querySelector("#bloque-2");
          bloque2.className = clase;
      } else if (boton.value == "bloque-3") {
          boton.value = "bloque-4";
          var bloque2 = document.querySelector("#bloque-3");
          bloque2.className = clase;
      } else if (boton.value == "bloque-4") {
          boton.value = "bloque-5";
          var bloque2 = document.querySelector("#bloque-4");
          bloque2.className = clase;
          boton.className = "btn btn-primary btn-xl text-uppercase segundo";
      } else if (boton.value == "bloque-5") {
          boton.value = "bloque-6";
          var bloque2 = document.querySelector("#bloque-5");
          bloque2.className = clase;
      } else if (boton.value == "bloque-6") {
          var enviar = document.querySelector("#submit");
          enviar.className = "btn btn-primary btn-xl text-uppercase final";
          boton.style.display = "none";
          var bloque2 = document.querySelector("#bloque-6");
          bloque2.className = clase;
      }
  }
}
