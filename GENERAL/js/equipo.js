fetch("/GENERAL/json/equipoTrabajo.json")
.then(response => response.json())
.then(data => {
    let nombre;
    let edad;
    let carrera; 
    let img_src;
    for(let persona of data){
        nombre= persona.nombre;
        edad=persona.edad;
        carrera=persona.carrera
        img_src=persona.src

        let plantilla_equipo =  
        `<section class="page-section">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                         <div class="bg-faded p-5 d-flex me-auto rounded">
                            <h2 class="section-heading mb-0">
                            <span class="section-heading-lower">${nombre}</span>
                            <span class="section-heading-upper">${carrera}</span>
                            <span class="section-heading-upper">${edad}</span>
                             </h2>
                         </div>
                    </div>
                <img
                class="product-item-img mx-auto rounded img-fluid mb-3 mb-lg-0"
                src=${img_src}
                alt="..." />
                </div>
            </div>
        </section>`

  document.getElementById("equipoEquipo").innerHTML+=plantilla_equipo;
    }
});