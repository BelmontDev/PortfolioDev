function copiarCorreo() {
  // Selecciona el campo de entrada de texto
  var correoInput = document.getElementById("correoInput");
  // Selecciona el texto dentro del campo de entrada de texto
  correoInput.select();
  // Copia el texto al portapapeles
  document.execCommand("copy");
  // Alerta al usuario que se ha copiado el correo electrónico
  alert("¡Correo electrónico copiado al portapapeles!");
}


  document.getElementById("btnEnviarCorreo").addEventListener("click", function() {
    var destinatario = "gillomdev@gmail.com";
    var asunto = "Recruting";
    var cuerpo = "Hi Gilbert, ";

    var url = "https://mail.google.com/mail/?view=cm&to=" + destinatario +
              "&su=" + encodeURIComponent(asunto) +
              "&body=" + encodeURIComponent(cuerpo);
              
              var opciones = "width=600,height=400,top=100,left=100"; // Puedes ajustar el tamaño y la posición de la ventana emergente según tus necesidades
              
              window.open(url, "ventanaEmergente", opciones);
});

function abrirPDF() {
  // Ruta al archivo PDF
  var pdfURL = "JS/ResumeATS.pdf";
  
  // Abre el PDF en una nueva pestaña
  window.open(pdfURL, "_blank");
}
