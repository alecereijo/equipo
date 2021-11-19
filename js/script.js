const cabecera = '¡MORRY CHRISTMAS!';
let i = 0;
const typing = () => {
	if(i < cabecera.length){
		document.querySelector('.cabecera').innerHTML += cabecera.charAt(i);
		i++;
		
		setTimeout(typing, 150);
	}
}

typing();