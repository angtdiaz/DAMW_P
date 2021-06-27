/*!
* Start Bootstrap - Business Casual v7.0.1 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
/*
window.addEventListener('DOMContentLoaded', event => {
  const listHoursArray = document.body.querySelectorAll('.list-hours li');
  listHoursArray[new Date().getDay()].classList.add(('today'));
})
introJs().start();
*/
// Example starter JavaScript for disabling form submissions if there are invalid fields
//esta funcion valida que los campos del formulario estèn llenos
(function () {
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
)()
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

