
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

fetch('DAWM_P/quipo.json')
  .then(response => response.json())
  .then(data => {
      

    });