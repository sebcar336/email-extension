// Función principal para obtener el valor del elemento y enviarlo al background.js

function obtenerValorTrm() {
    const valueTrmElement = document.getElementById("value-trm");
  
    if (valueTrmElement) {
      const valueTrm = valueTrmElement.textContent;
      chrome.runtime.sendMessage({ type: "setValueTrm", value: valueTrm });
    } else {
      setTimeout(obtenerValorTrm, 100);
    }
  }
function observarCambios() {
    const targetNode = document.getElementById("value-trm");

    if (targetNode) {
      const observer = new MutationObserver(() => {
        // Obtiene el texto cuando haya un cambio
        const valueTrm = targetNode.textContent;
        chrome.runtime.sendMessage({ type: "setValueTrm", value: valueTrm });
        observer.disconnect(); // Detiene la observación una vez que se ha obtenido el valor
      });
  
      // Observa cambios en el texto dentro del nodo
      observer.observe(targetNode, { childList: true, subtree: true });
    } else {
      // Si el elemento aún no está disponible, ejecuta obtenerValorTrm
      obtenerValorTrm();
    }
}

// Llamar a la función principal
observarCambios();
  