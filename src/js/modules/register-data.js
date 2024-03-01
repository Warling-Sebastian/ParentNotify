
let nombre = localStorage.getItem('name')
let apellido = localStorage.getItem('lastName')
let password_apk = localStorage.getItem('password')
let password_Capk = localStorage.getItem('password_C')
let grado = localStorage.getItem('grade')
let seccion = localStorage.getItem('section')
let name_complete = nombre+apellido;
document.querySelector('.usuario').innerHTML = `${nombre}`;
document.querySelector('#menu_user').innerHTML = `${nombre}`;

function notify() {
    // Verificar si el navegador soporta las notificaciones
if ("Notification" in window) {
    // Pedir permiso para enviar notificaciones
    Notification.requestPermission().then(function(permission) {
      if (permission === "granted") {
        // Crear la notificación
        var notification = new Notification("!", {
          body: "klk kev esta es una noty por ejemplos"
        });
  
        // Mostrar la notificación
        setTimeout(notification.close.bind(notification), 5000);
      } else {
        console.log("El usuario denegó el permiso para enviar notificaciones.");
      }
    });
  } else {
    console.log("Este navegador no soporta las notificaciones.");
  }
}