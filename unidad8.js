
var respUsu = document.getElementById ('preg_respUsu')
respUsu.style.fontFamily= 'Arial Narrow'
function mostrar() {
	var gc_b = document.getElementById('tomba_b')
	gc_b.style.backgroundImage='url(godoycruz.jpg)'
	gc_b.style.backgroundSize = 'contain'

if (gc_b.style.display == 'none') {
	gc_b.style.display = 'block'
	alert ('Las siguientes personas que salen en la imagen son claves para salvar a Godoy Cruz de este momento')
 	} else {
 		gc_b.style.display = 'none'
 	}
}
