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
*/
// Example starter JavaScript for disabling form submissions if there are invalid fields
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
function printForm2() {
  console.log("hola");
  /*
  let plantillaForm2 = `
  <form class="row g-3 needs-validation" novalidate>
    <div class="col">
      <label for="validationProvince" class="form-label">Provincia</label>
      <select class="form-select" id="validationProvince" required>
        <option selected disabled value="">Elija...</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Escoga su provincia!
      </div>
    </div>
    <div class="col">
      <label for="validationCity" class="form-label">Ciudad</label>
      <select class="form-select" id="validationCity" required>
        <option selected disabled value="">Elija...</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Escoga su ciudad!
      </div>
    </div>
    <div class="mb-3">
      <label for="validationEmail" class="form-label">Correo Electronico</label>
      <input type="text" class="form-control" id="validationEmail"  required>
      <div class="invalid-feedback">
       Ingrese su correo electronico!
      </div>
    </div>
    <div class="mb-3">
      <label for="validationTextarea" class="form-label">Detalles</label>
      <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
      <div class="valid-feedback">
      </div>
    </div>
    <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>  
`
  document.getElementsByClassName("border border-dark")[0].innerHTML = plantillaForm2
  */
}
