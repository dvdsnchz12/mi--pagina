// Obtener elementos del DOM
const updateForm = document.getElementById('updateForm');
const newContent = document.getElementById('newContent');
const currentContent = document.getElementById('currentContent');

// Agregar un evento al formulario para manejar el envío
updateForm.addEventListener('submit', function (event) {
  // Prevenir el comportamiento por defecto del formulario
  event.preventDefault();
  
  // Actualizar el contenido de la página con el texto ingresado
  if (newContent.value.trim() !== "") {
    currentContent.textContent = newContent.value;
    newContent.value = "";  // Limpiar el campo de entrada
  } else {
    alert("Por favor, ingresa un contenido válido.");
  }
});
