const btn = document.querySelector('.btn')


//Mandamos a llamar a la funcion mostrarOcultarDiv al hacer click
btn.addEventListener('click', mostrarOcultarDiv)

function mostrarOcultarDiv(){
    
    const ocultar = document.querySelector('.catching')


    if(btn.textContent == "Ocultar"){

        ocultar.style.display = "none"
        btn.style.background = "red"
        btn.innerText = "Ver"

    }else{

        ocultar.style.display = "flex"
        btn.style.background = "grey"
        btn.innerText = "Ocultar"
    }

    console.log("click")
}


