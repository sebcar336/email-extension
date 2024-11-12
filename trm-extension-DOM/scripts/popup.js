// popup.js

// Solicita el valor almacenado al background.js
chrome.runtime.sendMessage({ type: "getValueTrm" }, (response) => {
    if (response && response.value) {
      document.getElementById("miElemento").innerText = response.value;
    } else {
      document.getElementById("miElemento").innerText = "Valor no disponible";
    }
  });
  