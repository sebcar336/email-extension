const form = document.getElementById("form-ext");
const nameF = document.getElementById("nombre");
const subject = document.getElementById("asunto");
const emailTo = document.getElementById("email");
const message = document.getElementById("comentarios");
const submit = document.getElementById("submit-ext");

function sanitizeInput(input) {
  return input.replace(/[<>]/g, ""); // Elimina caracteres problemáticos
}

chrome.runtime.sendMessage({ type: "getData" }, (response) => {
  if (response && response.value) {
    message.textContent = response.value;
  }
});

chrome.runtime.sendMessage({ type: "getCopyData" }, (response) => {
  if (response && response.value) {
    message.textContent = response.value;
  }
});


(function(){
  emailjs.init("kOgwgAeAHgKWc3Q10");
})();

function sendMail() {
  const sanitizedEmail = sanitizeInput(emailTo.value);
  const sanitizedSubject = sanitizeInput(subject.value);
  const sanitizedMessage = sanitizeInput(message.value);

  let params = {
    nameF: nameF.value,
    emailToF: sanitizedEmail,
    subjectF: sanitizedSubject,
    messageF: sanitizedMessage
  };
  let serviceID= "service_kddnkzr";
  let templateID= "template_486nb6q";
  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      alert("Email enviado correctamente!");
    })
    .catch((error) => {
      console.error("Error al enviar el correo:", error);
      alert("Error al enviar el correo. Revisa la consola para más detalles.");
    });
}

submit.addEventListener("click", (event) => {
  event.preventDefault(); // Evitar el envío normal del formulario
  sendMail();
});
