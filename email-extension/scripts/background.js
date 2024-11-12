let data = null;
let CopyData = null;
// Escuchar los mensajes para almacenar datos o enviar datos
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "setData") {
    data = message.value; // Guardamos los datos enviados desde form.js
    console.log("Datos almacenados:", data);
  } else if (message.type === "getData") {
    sendResponse({ value: data }); // Enviamos los datos almacenados cuando se solicitan
  }
  if (message.type === "setCopyData") {
    CopyData = message.value; // Guardamos los datos enviados desde content.js
    console.log("Datos almacenados:", CopyData);
  } else if (message.type === "getCopyData") {
    sendResponse({ value: CopyData }); // Enviamos los datos almacenados cuando se solicitan
  }
});