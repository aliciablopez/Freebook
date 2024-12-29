/** FUNCIONALIDADES */

/**--Botón del formulario Contacto */
const $form = document.querySelector('#contact') 
const $buttonMailto = document.querySelector('#mail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:iniciativa.dar.01@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}



/**BOTON RECOMENDADO: envía a favoritos, leer y escuchar
FORMULARIO REGISTRO USUARIO: login y register con mail y contraseña validos
FORMULARIO CARRITO DE FAVORITOS: equivale a carrito
CAJA DE EXPLORAR: (Pendiente) revisa el catálogo según título
OCULTAR BAR MENU: si vw es menor que 760px
BOTON CONTACTO: ENVÍA*/




