const popupDOM = document.createElement("div");


popupDOM.style.position = "absolute";
popupDOM.style.backgroundColor = "#fff";
popupDOM.style.border = "1px solid #ddd";
popupDOM.style.padding = "10px";
popupDOM.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
popupDOM.style.display = "none";
popupDOM.style.zIndex = "999";

document.body.appendChild(popupDOM);

const label = document.createElement("label");
document.body.appendChild(popupDOM);

const botonBuscarPopup = document.createElement("button");

botonBuscarPopup.textContent = "Q";
botonBuscarPopup.style.backgroundColor = "green";
botonBuscarPopup.style.height = "16px";
botonBuscarPopup.style.padding = "4px";
botonBuscarPopup.style.display = "flex";
botonBuscarPopup.style.justifyContent = "center";
botonBuscarPopup.style.alignItems = "center";
botonBuscarPopup.style.cursor = "pointer";
botonBuscarPopup.style.marginLeft = "10px";
botonBuscarPopup.style.border = "0px";
botonBuscarPopup.style.color = "#fff";

const botonCerrarPopup = document.createElement("button");

botonCerrarPopup.textContent = "x";
botonCerrarPopup.style.backgroundColor = "red";
botonCerrarPopup.style.height = "16px";
botonCerrarPopup.style.padding = "4px";
botonCerrarPopup.style.display = "flex";
botonCerrarPopup.style.justifyContent = "center";
botonCerrarPopup.style.alignItems = "center";
botonCerrarPopup.style.cursor = "pointer";
botonCerrarPopup.style.marginLeft = "10px";
botonCerrarPopup.style.border = "0px";
botonCerrarPopup.style.color = "#fff";

const inputEmailTo = document.createElement("input");
inputEmailTo.setAttribute("type","email");
inputEmailTo.setAttribute("placeholders","email");
document.body.appendChild(inputEmailTo);


function mostrarPopup() {
  // Obtener las coordenadas y dimensiones del elemento
  const range = window.getSelection().getRangeAt(0);
  const rect = range.getBoundingClientRect();
  popupDOM.style.left = `${window.scrollX + rect.left}px`;
  popupDOM.style.top = `${window.scrollY + rect.bottom - 75}px`;
  popupDOM.style.display = "flex";
  popupDOM.appendChild(botonBuscarPopup);
  popupDOM.appendChild(botonCerrarPopup);
  popupDOM.appendChild(inputEmailTo);
  popupDOM.style.alignItems = "center"; 
}

function ocultarPopup() {
  popupDOM.style.display = "none"; 
}

document.addEventListener('mouseup', (event) => {
  const selectedText = window.getSelection().toString().trim();

  if (selectedText) {
      // Muestra el texto seleccionado en el popup
      console.log(selectedText);
      mostrarPopup();
  }
});
// .addEventListener("mouseenter", mostrarPopup);

// Ocultar el popup cuando el ratón se retire del elemento
// popupDOM.addEventListener("mouseleave", ocultarPopup);--------------->

// const buscar = document.getElementById("search-box");
// botonBuscarPopup.addEventListener("click", () => {
//     buscar.value = popupDOM.textContent;
// });

botonCerrarPopup.addEventListener("click",ocultarPopup);
