var arrayImagenes = [];
if(hastTag == null){
	hastTag = "marketing";	
	hastTag = "photography";	
	//hastTag = "xxx";	
}
var arrayCantidadPorFila = [8,4,8,3,3];
//var arrayCantidadPorFila = [4,2,1,1];
//var hastTag = "jesus";
var posLista = 0;
var arrayListas = $(".filaFotos");
function getListaActual(){
	var lista = arrayListas[posLista%arrayListas.length];
	posLista++;
	return $(lista);
}
var posImagen = 0;
function getImagenCargada(){
	dato = arrayImagenes[posImagen%arrayImagenes.length];
	posImagen++;
	return dato;
}
var arrayFotos = [];
var arrayElementos = [];
var cargoPagina = false;
function colocarImagenes(){
	if(arrayImagenes.length == 0){
		setTimeout(colocarImagenes,500);
		return;
	}
	if(!cargoPagina){
		
		$("#imagenCargando").fadeOut(function(){
			$("#contenidoBaner").fadeIn();
			setTimeout(cambioDimensionesPantalla,10);
		});
		
	}
	cargoPagina = true;
	var arrayListas = $(".filaFotos");
	var numeroElemento = randomEntre(10,20);
	var i,j,altoLista,dato;
	var posicion = 0;
	arrayListas.data({"alto":0});
	var altoColumna = $(arrayListas[0]).height();
	for ( i = 0; i < arrayListas.length; i++) {
		lista = $(arrayListas[i]);
		paddingBottom = lista.css("padding-right");
		j = 0;
		for ( j = 0; j < arrayCantidadPorFila[i%arrayCantidadPorFila.length]; j++) {
			dato = getImagenCargada();
			vistaFoto = new VistaFoto(lista,dato);
			arrayFotos.push(vistaFoto);

			arrayElementos.push(vistaFoto);
			altoLista = vistaFoto.getAlto()+lista.data("alto");
			lista.data("alto",altoLista);
			vistaFoto.css({"padding-bottom":paddingBottom});
			lista.append(vistaFoto);
		}
	}
}
function colocarNuevos(){
//	console.log("consultando nuevos");
	$.ajax({		  
		dataType:"json",
		type:"GET",
		url: "php/newsbyhash.php?q="+hastTag,
		success: resultado,
		error:function(evt){
			console.log("error texto",evt);
		}
	});
}

function randomEntre(min,maximo){
	return min+Math.floor(Math.random()*(maximo+1) );
}
var cargoPorPrimeraVez = false;
function getFotosEvento(){
	$.ajax({		  
		dataType:"json",
		//data:data,
		type:"GET",
		url: "php/byhash.php?q="+hastTag,
		success: resultado,
		error:function(evt){
			console.log("error texto",evt);
		}
	});
}
var arrayMensajes = [];
var arrayVistos = [];
function resultado(evt){

	if(evt.length == 0 && !cargoPorPrimeraVez){
		setTimeout(colocarNuevos,2000);	
		return;
	}
	
	var i,obj,cargarImagen;
	var arImagenes = [];
	//console.log("ress",cargoPorPrimeraVez,evt.length);
	for ( i = 0; i < evt.length; i++) {
		obj = evt[i];
		if(!cargoPorPrimeraVez && obj.entities.media && arrayImagenes.length < 20){
			cargarImagen = true;
		}
		else if(cargoPorPrimeraVez && obj.entities.media){
			cargarImagen = true;
		}
		else{
			cargarImagen = false;
		}
		if(cargarImagen){
			elemento = obj.entities.media[0];
			urlFoto = elemento.media_url;
			datirri = {imagen:urlFoto };
			arrayImagenes.push(datirri);
			arImagenes.push(datirri);
		}
		if(cargoPorPrimeraVez){
			arrayMensajes.push(obj);
		}
		else{
			arrayVistos.push(obj);
		}
	}
	for ( i = 0; i < arImagenes.length; i++) {
		obj = arImagenes[i];
		enlace = obj.imagen;
		imagen = $("<img>");
		imagen.on("load",function(evt){								
			ancho = this.width;
			alto = this.height;
			img = $(this);
			dato = img.data("obj");
			dato.ancho = ancho;
			dato.alto = alto;				
			dato.vistas = 0;				
			validarCargado();
		});
		imagen.on("error",function(){
			console.log("errro cargando imagen",error);
			img = $(this);
			dato = img.data("obj");
			for ( i = 0; i < arrayImagenes.length; i++) {
				obj = arrayImagenes[i];
				if(obj.imagen == img.attr("src") ){
					arrayImagenes.splice(i,1);
				}
			}
			validarCargado();
		});
		imagen.data("obj",obj);
		imagen.attr("src",enlace);
	}
	if(arImagenes.length == 0){
		validarCargado();
	}
}
function getImagenesNueva(numeroElementos){	
	var array = [];
	var i,j,imagen,conjunto,encontro;
	for ( i = 0; i < arrayImagenes.length; i++) {
		imagen = arrayImagenes[i];
		if(imagen.alto == null){
			continue;
		}
		encontro = false;
		for ( j = 0; j < array.length; j++) {
			conjunto = array[j];
			if(conjunto.vistas == imagen.vistas){
				encontro = true;
				conjunto.ar.push(imagen);
				break;
			}
		}
		if(encontro){
			continue;
		}
		conjunto = {vistas:imagen.vistas,ar:[imagen]};
		array.push(conjunto);
	}
	//console.log("antes",array);
	ordenarArreglo(array,true,"vistas");
	//console.log("array",array);
	var arrayListaElementos = [];
	for ( i = 0; i < array.length; i++) {
		conjunto = array[i];
		arrayListaElementos = arrayListaElementos.concat( randomArray(conjunto.ar) );
	}
	var arrayResultados = [];
	for ( i = 0; i < numeroElementos; i++) {
		arrayResultados.push( arrayListaElementos[i%arrayListaElementos.length] )
	}
	console.log("imagen Actuales",arrayImagenes.length);
	return arrayResultados;
	
	//return arrayImagenes[randomEntre(0,arrayImagenes.length-1)];
}
function actualizarImagenes(){
	console.log("actualizarImagenes");
	if(arrayFotos.length == 0){
		return;
	}
	var ar = arrayFotos.concat([]);
	var arrayImangesNuevas = getImagenesNueva(4);
	var i;
	//console.log("asasa",arrayImangesNuevas[0],arrayImangesNuevas[1]);
	for ( i = 0; i < arrayImangesNuevas.length; i++) {
		//vista = arrayFotos[i];
		vista = ar.splice(randomEntre(0,ar.length-1))[0];

		obj = arrayImangesNuevas[i];
		console.log("nueva datgos para cambiar",obj);
		vista.cambiarImagen(obj);
		ar.push(vista);
	}
}
function validarCargado(){
	var i;
	for ( i = 0; i < arrayImagenes.length; i++) {
		imagen = arrayImagenes[i];
		if(imagen.ancho == null){
			console.log("FALTA");
			return;
		}
	}
	if(cargoPorPrimeraVez){
		actualizarImagenes();
	}
	else{
		cargoPorPrimeraVez = true;
		colocarImagenes();	
	}
	setTimeout(colocarNuevos,2000);	
}

vistaMensaje = new VistaMensajes();
$(window).on("load",function(){
	getFotosEvento();	
})
$(window).on("resize",cambioDimensionesPantalla);
function cambioDimensionesPantalla(){
	vistaMensaje.actualizarDimensiones();
	for ( i = 0; i < arrayElementos.length; i++) {
		foto = arrayElementos[i];
		foto.actualizarDimensiones();
	}
}
setTimeout(cambioDimensionesPantalla,5000);