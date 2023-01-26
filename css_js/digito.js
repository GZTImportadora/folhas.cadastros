function ValidaEan(numero){
	factor = 3;
	sum = 0;
	numlen = document.getElementById('numero').value.length;
	
	if (numlen == 13){
		for(index = numero.value.length; index > 0; --index){
			if (index != 13){
			sum = sum + numero.value.substring (index-1, index) * factor;
    		factor = 4 - factor;
			}
  		}
		cc = ((1000 - sum) % 10);
		ca = numero.value.substring(12);
		if(cc == ca){
			alert("EAN-13 válido");
		}
		else{
			alert("Digite um código EAN válido");
		}
	}
	
	if(numlen == 14){
		for(index = numero.value.length; index > 0; --index){
			if (index != 14){
			sum = sum + numero.value.substring (index-1, index) * factor;
    		factor = 4 - factor;
			}
  		}
		cc = ((1000 - sum) % 10);
		ca = numero.value.substring(13);
		if(cc == ca){
			alert("EAN-14 válido");
		}
		else{
			alert("Digite um código EAN válido");
		}
	}
	
	if(numlen == 8){
		for(index = numero.value.length; index > 0; --index){
			if (index != 8){
			sum = sum + numero.value.substring (index-1, index) * factor;
    		factor = 4 - factor;
			}
  		}
		cc = ((1000 - sum) % 10);
		ca = numero.value.substring(7);
		if(cc == ca){
			alert("EAN-8 válido");
		}
		else{
			alert("Digite um código EAN válido");		}
	}
	
	if(numlen == 12){
		for(index = numero.value.length; index > 0; --index){
			if (index != 12){
			sum = sum + numero.value.substring (index-1, index) * factor;
    		factor = 4 - factor;
			}
  		}
		cc = ((1000 - sum) % 10);
		ca = numero.value.substring(11);
		if(cc == ca){
			alert("EAN-12 válido");
		}
		else{
			alert("Digite um código EAN válido");
		}
	}
	
	if (((((numlen != 8) && (numlen != 12)) && (numlen != 13)) && (numlen != 14))){
		alert("Digite um código EAN válido");
	}

}
