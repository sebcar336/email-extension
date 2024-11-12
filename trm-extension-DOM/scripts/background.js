// background.js

// Variable para almacenar el valor recibido
let valueTrm = null;

// Escucha mensajes de otros scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "setValueTrm") {
    valueTrm = message.value;
    console.log("Valor recibido:", valueTrm);
  }
});

// Permite que otros scripts pidan el valor almacenado
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "getValueTrm") {
    sendResponse({ value: valueTrm });
  }
});
