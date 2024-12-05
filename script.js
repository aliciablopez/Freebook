/** FUNCIONOALIDADES

BOTON CLICK: cambia de color al cliquear y aparece texto "ir a #"
BOTON RECOMENDADO: envía a favoritos, leer y escuchar
FORMULARIO REGISTRO USUARIO: login y register con mail y contraseña validos
FORMULARIO CARRITO DE FAVORITOS: equivale a carrito
CAJA DE EXPLORAR: (Pendiente) revisa el catálogo según título



 */

/* -- BOTON RETURN revisar funcionalidad -- */
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

