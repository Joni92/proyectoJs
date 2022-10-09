
// Muestra el Login Form en el home.


document.getElementById("btnLogin").addEventListener("click",mostrarLogin); 
let formLogin = document.querySelector('.login-box'); 

function mostrarLogin(){
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


//-------------------REGISTRO NVO USUARIO----------------//

function Usuario(nombre, apellido, profesion1, profesion2, profesion3, profesion4, direccion, ciudad, provincia, pais, codigoPostal, email, telefonoMovil) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.profesion1 = profesion1;
    this.profesion2 = profesion2;
    this.profesion3 = profesion3;
    this.profesion4 = profesion4;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.provincia = provincia;
    this.pais = pais;
    this.codigoPostal = codigoPostal;
    this.email = email;
    this.telefonoMovil = telefonoMovil;
} 



let register = document.querySelector('.letsRegister');


register.onclick = function() {
    let nombre = prompt("Cuál es tu Nombre?");
    let apellido = prompt('Cuál es tu Apellid?');
    let profesion1 = prompt('Cuál es tu Profesion?');
    let calle = prompt('Cuál es tu Calle? *Ingrese solo Nombre');
    let calleNumero = parseInt(prompt('Cuál es la altura de tu calle? *Ingrese solo numeros'));
    let ciudad = prompt('Cuál es tu Ciudad?');
    let provincia = prompt('Cuál es tu Provincia?');
    let pais = prompt('Cuál es tu Pais?');
    let codigoPostal = parseInt(prompt('Cuál es tu Codigo Postal?'));
    let email = prompt('Cuál es tu email?');
    let telefonoMovil = parseInt(prompt('Cuál es tu Teléfono?'));
}

const Usuario = new Usuario(nombre, apellido, profesion1, calle, calleNumero, ciudad, provincia, pais, codigoPostal, email, telefonoMovil)

console.log(Usuario);


// -----------------USUARIOS-----------------


const personas = [
    { nombre: 'Sam', appellido: 'Hughes', fechaNacimiento: '1978-07-07', profesion: 'Carpintero'},
    { nombre: 'Terri', appellido: 'Bishop', fechaNacimiento: '1989-02-04', profesion: 'Desarrollador'},
    { nombre: 'Jar', appellido: 'Burke', fechaNacimiento: '2000-11-01', profesion: 'Medico'},
    { nombre: 'Julio', appellido: 'Miller', fechaNacimiento: '1991-12-07', profesion: 'Plomero'},
    { nombre: 'Chester', appellido: 'Flores', fechaNacimiento: '1988-03-15', profesion: 'Albañil'},
    { nombre: 'Madison', appellido: 'Marshall', fechaNacimiento: '1980-09-22', profesion: 'Jardinero'},
    { nombre: 'Ava', appellido: 'Pena', fechaNacimiento: '2004-11-02', profesion: 'Electricista'},
    { nombre: 'Gabriella', appellido: 'Steward', fechaNacimiento: '1994-08-26', profesion: 'Odontologa'},
    { nombre: 'Charles', appellido: 'Campbell', fechaNacimiento: '1997-09-04', profesion: 'Abogado'},
    { nombre: 'Tiffany', appellido: 'Lambert', fechaNacimiento: '1990-05-11', profesion: 'Pintor'},
    { nombre: 'Antonio', appellido: 'Gonzalez', fechaNacimiento: '1985-03-24', profesion: 'Plomero'},
    { nombre: 'Aaron', appellido: 'Garrett', fechaNacimiento: '1985-09-04', profesion: 'Pintor'},
];


let elementoABuscar = prompt("Qué profesion buscas?")

let filtroProfesion = personas.filter( elemento => elemento.profesion == elementoABuscar);

console.log(filtroProfesion);
