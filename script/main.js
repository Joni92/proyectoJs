
// Muestra el Login Form en el home.


document.getElementById("btnLogin").addEventListener("click",mostrarLogin); 
let formLogin = document.querySelector('.login-box'); 

function mostrarLogin( ){
    formLogin.style.visibility = "visible";
}  

// Otra forma de abrir el login -------------------------//

/* let iconLogin = document.querySelector('.btnLogin');
let openForm = document.querySelector('.login-box');

iconLogin.onclick = function(){
    openForm.style.visibility = "visible";
} */

//------------------------------------------------------//

// Oculta el Login Form en el home

let close = document.querySelector('.iconClose');

close.onclick = function(){
    formLogin.style.visibility = "hidden";
}

//-------------------------------------------------------//

// Login
let ingresar = document.querySelector('.user-box');
let user = 1234;
let pass = 1234;

ingresar.onclick = function(){
    let user = prompt("Ingrese su Usuario:");
    let dato = parseInt(prompt("Ingrese la Contraseña:"));
    let intentos = 3;

    while((dato != pass) && (intentos > 0)) {
        intentos--;
        alert(`Contraseña equivocada. Te quedan ${intentos} intentos.`);
        let dato = parseInt(prompt("Ingrese la Contraseña:"));
    }
}
