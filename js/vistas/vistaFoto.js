function VistaFoto(lista,dato,clase){
	var anchoTotal = lista.width();
	var elemento = $("<div class='contenedorFlip'>");
	var imagen1 = new imagenFoto(anchoTotal,dato,clase);
	var imagen2 = new imagenFoto(anchoTotal,dato,clase);
	var imagenActiva = imagen1;
	function init(){
		dato.vistas++;
		imagen1.addClass('front');
		imagen2.addClass('back');
		elemento.append(imagen1);
		elemento.append(imagen2);
		elemento.css({"height":elemento.getAlto()});
	}
	elemento.getAlto = function(){
		return imagenActiva.getAlto();
	}
	elemento.getAncho = function(){
		return imagenActiva.getAncho();
	}
	elemento.cambiarImagen = function(obj){
		obj.vistas++;
		if( elemento.hasClass('flipped') ){
			imagenActiva = imagen1;
			//imagen1.setDato(obj);
			elemento.removeClass("flipped");
		}
		else{
			imagenActiva = imagen2;
			//imagen2.setDato(obj);
			elemento.addClass("flipped");	
		}
		//imagenActiva.html("vistas: "+obj.vistas);
		imagenActiva.setDato(obj);
	//	elemento.css({"width":elemento.getAncho(),"height":elemento.getAlto()});
		elemento.css({"height":elemento.getAlto()});
	}
	elemento.actualizarDimensiones = function(){
		imagen1.setAnchoPadre(lista.width());
		imagen2.setAnchoPadre(lista.width());
	//	elemento.css({"width":elemento.getAncho(),"height":elemento.getAlto()});
		elemento.css({"height":elemento.getAlto()});
	}
	elemento.on("click",function(){
		return;
		if(elemento.hasClass('flipped')){
			elemento.removeClass("flipped");
		}
		else{
			elemento.addClass("flipped");	
		}		
	});
	init();
	return elemento;
}
function imagenFoto(anchoTotal,dato,clase){
	var elemento;
	var imagen,enlace,contenedorImagen;
	var padre,ancho,alto,paddingRight;
	var escala,an,al;
	if(clase){
		elemento = $("<div class='"+clase+"'>");
	}
	else{
		elemento = $("<div class='contenedorImagen'>");	
	}
	elemento.getAlto = function(){
		return al;
	}
	elemento.getAncho = function(){
		return an;
	}
	elemento.setAnchoPadre = function(nuevoAncho){
		anchoTotal = nuevoAncho;
		init();
	}
	elemento.setDato = function(datoNuevo){
		dato.vistas++;
		dato = datoNuevo;
		init();
	}
	function init(){
		alto = dato.alto;
		ancho = dato.ancho;
		escala = anchoTotal/ancho;
		enlace = dato.imagen;
		an = anchoTotal;
		al = alto*escala;
		paddingRight = lista.css("padding-right");
		elemento.css({"margin-bottom":paddingRight,"height":al,
				"background-image":"url("+enlace+")","background-size":an+"px "+al+"px"});	
		elemento.alto = al;	
	}
	init();
	return elemento;
}