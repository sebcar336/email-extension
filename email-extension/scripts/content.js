// Inicializa emailjs cuando el script de contenido se carga
emailjs.init("kOgwgAeAHgKWc3Q10");

const popupDOM = document.createElement("div");
popupDOM.id = "popupDOM";


// Elementos dentro del popup
const message = document.createElement("label");
message.className = "messagePopup";

const containerEmail = document.createElement("div");
containerEmail.className = "containerEmail";

const inputEmailFrom = document.createElement("input");
inputEmailFrom.setAttribute("id", "emailFrom");
inputEmailFrom.setAttribute("type", "email");
inputEmailFrom.setAttribute("placeholder", "Escribe tu correo");

const inputEmailTo = document.createElement("input");
inputEmailTo.setAttribute("id", "emailTo");
inputEmailTo.setAttribute("type", "email");
inputEmailTo.setAttribute("placeholder", "Escribe el correo del destinatario");

const containerBtn = document.createElement("div");
containerBtn.className = "containerBtn";

const btnClosePopup = document.createElement("button");
btnClosePopup.className = "btnClosePopup";
btnClosePopup.textContent = "x";

const btnSendPopup = document.createElement("button");
btnSendPopup.className = "btnSendPopup";
btnSendPopup.textContent = "Enviar";


document.body.appendChild(popupDOM);
popupDOM.appendChild(message);
popupDOM.appendChild(containerEmail);
containerEmail.appendChild(inputEmailTo);
containerEmail.appendChild(inputEmailFrom);
containerEmail.appendChild(containerBtn);
containerBtn.appendChild(btnClosePopup);
containerBtn.appendChild(btnSendPopup);


function mostrarPopup(event) {
  const range = window.getSelection().getRangeAt(0);
  const rect = range.getBoundingClientRect();
  popupDOM.style.left = `${window.scrollX + rect.left}px`;
  popupDOM.style.top = `${window.scrollY + rect.bottom - 75}px`;
  popupDOM.style.display = "flex";
}

function ocultarPopup() {
  popupDOM.style.display = "none";
}

document.addEventListener("keypress", (event) => {
  const selectedText = window.getSelection().toString().trim();
  if ((event.key === "|") && selectedText) {
    chrome.runtime.sendMessage({ type: "setCopyData", value: selectedText });
    message.textContent = selectedText;
    mostrarPopup(event);
  }
});

btnClosePopup.addEventListener("click", ocultarPopup);

function sanitizeInput(input) {
  return input.replace(/[<>]/g, "");
}

function sendMail() {
  const sanitizedEmailTo = sanitizeInput(inputEmailTo.value);
  const sanitizedEmailFrom = sanitizeInput(inputEmailFrom.value);
  const sanitizedMessage = sanitizeInput(message.textContent);

  const params = {
    emailToF: sanitizedEmailTo,
    emailFromF: sanitizedEmailFrom,
    messageF: sanitizedMessage
  };


  const serviceID = "service_ouv07ss";
  const templateID = "template_h1nwbtr";

  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      alert("Email enviado correctamente!");
    })
    .catch((error) => {
      console.error("Error al enviar el correo:", error);
      alert("Error al enviar el correo. Revisa la consola para más detalles.");
    });
}

// Asignar evento al botón de enviar
btnSendPopup.addEventListener("click", sendMail);
