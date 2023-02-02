var nombre=prompt('Introduzca su nombre:')
alert('Bienvenido a Capitán Sport, ' + nombre)
var edad=parseInt(prompt('¿Cuantós años tenes?'))

while (edad>90 || edad <3){
if (edad>90){
	alert('Eres demasiado viejo')
	edad=parseInt(prompt('Introduce una edad valida'))

}
if (edad<3){
	alert('Eres demasiado joven')
	edad=parseInt(prompt('Introduce una edad correcta'))
}
}
var boca=prompt('¿Crees que Boca va a poder salir campeón de la Copa Libertadores?')
var gc=prompt('¿Para vos, Godoy Cruz logrará mantenerse en la primera división del fútbol Argentino?')
var afa=prompt('¿Cómo crees que le va a ir a la Selección Argentina en Qatar?')

