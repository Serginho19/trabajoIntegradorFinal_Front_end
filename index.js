


function agregar_carrito() {
    let cantidad = parseInt(document.getElementById("Pack_2_form").value);

    if (isNaN (cantidad)) {
        document.getElementById("carrito").textContent = "Por favor agregue un número válido";
    } else {
        if (cantidad == 0) {
            document.getElementById("carrito").textContent = "Carrito sin productos, por favor intente nuevamente.";
        } else {
            let producto = document.getElementById ("Producto1").textContent;
            let precio = parseInt(document.getElementById ("precio1").textContent);
            let total = precio*cantidad

            document.getElementById("carrito").textContent = "Usted está comprando: " + producto  +" -- por "+ cantidad +" por cantidad/es -- Precio unitario: "+precio +"-- Precio Total: "+ total; 
            
            

            
        }


    }
}

let boton_comprar = document.getElementById("Comprar_Pack_2");
boton_comprar.addEventListener("click", agregar_carrito)
