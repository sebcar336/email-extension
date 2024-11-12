const firstname = document.getElementById("firstname");
const surname = document.getElementById("surname");
const gender = document.getElementById("gender");
const red = document.getElementById("red");//true-false
const blue = document.getElementById("blue");//true-false
const checkboxEMAIL = document.getElementById("checkbox1");
const checkboxSMS = document.getElementById("checkbox2");
const tellMe = document.querySelector("textarea");
const continent = document.getElementById("continent");
const submit = document.getElementById("submitbutton");

const data=[]

function guardarDatos() {
    data.length = 0;
    data.push(firstname?.value || "No disponible");
    data.push(surname?.value || "No disponible");
    data.push(gender?.value || "No disponible");
    data.push(!red.checked && !blue.checked ? "No disponible" : red.checked ? red.value : blue.value);
    data.push(!checkboxEMAIL.checked ? "No" : "Si");
    data.push(!checkboxSMS.checked ? "No" : "Si");
    data.push(tellMe?.value || "No disponible");
    data.push(continent?.value || "Ninguno")
}

const observer = new MutationObserver(() => {guardarDatos();});

if(firstname)observer.observe(firstname, { childList: true, subtree: false });
if(surname)observer.observe(surname, { childList: true, subtree: false });
if(gender)observer.observe(gender, { childList: true, subtree: false });
if(red)observer.observe(red, { childList: true, subtree: false });
if(blue)observer.observe(blue, { childList: true, subtree: false });
if(checkboxEMAIL)observer.observe(checkboxEMAIL, { childList: true, subtree: false });
if(tellMe)observer.observe(tellMe, { childList: true, subtree: false });
if(continent)observer.observe(continent, { childList: true, subtree: false });


submit.addEventListener("click",()=>{
    guardarDatos();
    alert(`
    Nombre:${data[0]}
    Apellido: ${data[1]}
    Genero: ${data[2]}
    Color Favorito: ${data[3]}
    Contactar por: 
        - Email: ${data[4]}
        - SMS: ${data[5]}
    Descripción: ${data[6]}
    Continentes visitados: ${data[7]}
    `);
});
