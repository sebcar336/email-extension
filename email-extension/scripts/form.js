//Elementos extraidos para recolectar data
const firstname = document.getElementById("firstname");
const surname = document.getElementById("surname");
const gender = document.getElementById("gender");
const red = document.getElementById("red"); // true-false
const blue = document.getElementById("blue"); // true-false
const checkboxEMAIL = document.getElementById("checkbox1");
const checkboxSMS = document.getElementById("checkbox2");
const tellMe = document.querySelector("textarea");
const continent = document.getElementById("continent");
const submit = document.getElementById("submitbutton");


const data = [];



function guardarDatos() {
    data.length = 0;
    data.push(firstname.value || "No disponible");
    data.push(surname.value || "No disponible");
    data.push(gender.value || "No disponible");
    data.push(!red.checked && !blue.checked ? "No disponible" : red.checked ? red.value : blue.value);
    data.push(checkboxEMAIL.checked ? "Si" : "No");
    data.push(checkboxSMS.checked ? "Si" : "No");
    data.push(tellMe.value || "No disponible");
}

const observer = new MutationObserver(() => {guardarDatos();});

if(firstname)observer.observe(firstname, { childList: true, subtree: false });
if(surname)observer.observe(surname, { childList: true, subtree: false });
if(gender)observer.observe(gender, { childList: true, subtree: false });
if(red)observer.observe(red, { childList: true, subtree: false });
if(blue)observer.observe(blue, { childList: true, subtree: false });
if(checkboxEMAIL)observer.observe(checkboxEMAIL, { childList: true, subtree: false });
if(tellMe)observer.observe(tellMe, { childList: true, subtree: false });

submit.addEventListener("click",(event)=>{
  event.preventDefault();
  guardarDatos();
  chrome.runtime.sendMessage({ type: "setData", value: data });
  alert(`
  Nombre: ${data[1]}
  Apellido: ${data[2]}
  Genero: ${data[3]}
  Color Favorito: ${data[4]}
  Contactar por: 
      - Email: ${data[5]}
      - SMS: ${data[6]}
  Descripción: ${data[7]}
  `);

});
