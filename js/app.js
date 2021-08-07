function ordenarArreglo(array,asc,campo){
	var aux,i,j;
	if(asc){
		if(campo){
			for ( i = 0; i < array.length-1; i++) {
				array[i];
				for ( j = i+1; j < array.length; j++) {
					if(array[j][campo]<array[i][campo]){
						aux = array[i];		array[i] = array[j];	array[j] = aux;
					}
				};
			};
		}
		else{
			for ( i = 0; i < array.length-1; i++) {
				array[i];
				for ( j = i+1; j < array.length; j++) {
					if(array[j]<array[i]){
						aux = array[i];		array[i] = array[j];	array[j] = aux;
					}
				};
			};
		}
	}
	else{
		if(campo){
			for ( i = 0; i < array.length-1; i++) {
				array[i];
				for ( j = i+1; j < array.length; j++) {
					if(array[j][campo]>array[i][campo]){
						aux = array[i];		array[i] = array[j];	array[j] = aux;
					}
				};
			};
		}
		else{
			for ( i = 0; i < array.length-1; i++) {
				array[i];
				for ( j = i+1; j < array.length; j++) {
					if(array[j]>array[i]){
						aux = array[i];		array[i] = array[j];	array[j] = aux;
					}
				};
			};
		}
	}
}
function randomArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}