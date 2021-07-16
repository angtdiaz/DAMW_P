let buscar = document.getElementById("search")
buscar.onclick = function(e){
    var valorBusc = document.getElementById("searchterm").value.toLowerCase()
    var container = document.getElementById("contenedor-producto")
    var sectionProd = container.querySelectorAll("section")
    console.log(valorBusc)
    for(prod of sectionProd){
        if(prod.classList.contains(valorBusc)==true || valorBusc=="")
            prod.setAttribute("style", "display:initial")
        else
            prod.setAttribute("style", "display:none")
        
    }   
}

