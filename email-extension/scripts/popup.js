const form = document.getElementById("form-ext");
const emailFrom = document.getElementById("emailFrom");
const subject = document.getElementById("subject");
const emailTo = document.getElementById("emailTo");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

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
  const sanitizedEmailFrom = sanitizeInput(emailFrom.value);
  const sanitizedEmailTo = sanitizeInput(emailTo.value);
  const sanitizedSubject = sanitizeInput(subject.value);
  const sanitizedMessage = sanitizeInput(message.value);

  let params = {
    emailFromF: sanitizedEmailFrom,
    emailToF: sanitizedEmailTo,
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
