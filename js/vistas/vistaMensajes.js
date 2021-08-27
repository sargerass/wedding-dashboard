function VistaMensajes(){
	var vistaTwit = $("#vistaTwit");
	var fotosTwits = $("#fotosTwits");
	var imagen1Foto = $("#imagen1Foto");
	var imagen2Foto = $("#imagen2Foto");
	var imagenFoto;
	var anchoFotoDQT = 592;
	var altoFotoDQT = 637;
	var altoMaximoImagen = 300;
	//var arrayVistos = [];
	var mostrandoFotoDQT = true;
	var porcentaje = 1;
	var posVisto = 0;
	vistaTwit.actualizarDimensiones = function(){
		var anchoTotal = vistaTwit.parent().width();
		anchoTotal = anchoTotal*porcentaje;
		var escala = (anchoTotal)/(anchoFotoDQT);
		var enlace = "img/logo.jpeg";
		var an = anchoTotal;
		var al = altoFotoDQT*escala;
		imagenFoto.css({"height":al,"background-image":"url("+enlace+")",
			"background-size":an+"px "+al+"px"});
		fotosTwits.height(al);
		imagenFoto.alto = al;
	}
	function colocarTwit(){
		var mensaje;
		if(arrayMensajes.length == 0){
			if(arrayVistos.length == 0){
				setTimeout(colocarTwit,1000);
				return;	
			}
			mensaje = arrayVistos[posVisto%arrayVistos.length];
			posVisto++;
			//setTimeout(colocarTwit,1000);
			//console.log("no hay mensaje");
			//return;
		}
		else{
			mensaje = arrayMensajes.splice(0,1)[0];
			arrayVistos.push(mensaje);	
		}
		
		//console.log("mensaje sellecionado",arrayMensajes, mensaje);
		//return;
		/*
		var cuadroMensaje = new CuadroMensaje(mensaje);
		$("#contenidoBaner").append(cuadroMensaje);
		console.log("---",mensaje);
		*/
		$("#vistaTwit").css("opacity",0);
		setTimeout(function(){
			console.log('mensaje', mensaje);
			$("#imagenPerfilUsuario").attr("src",mensaje.avatar);
			$("#lblNombreUsuario").html(mensaje.user);
			$("#lblMensajeUsuario").html(mensaje.message);
			$("#vistaTwit").css("opacity",1);
		},500);
		setTimeout(function(){
			$("#vistaTwit").css("opacity",1);
		},700);
		
		//console.log("nuevo twit",mensaje);
		//cambiarFlip();
		if(mensaje.avatar){
			urlFoto = mensaje.avatar;
			colocarImagenTwit(urlFoto);
		}
		else{
			colocarFotoDQT();
		}
	}
	function cambiarFlip(){
		return;
		if(fotosTwits.hasClass("flipped")){
			fotosTwits.removeClass('flipped');
		}
		else{
			fotosTwits.addClass("flipped");
		}
	}
	function colocarImagenTwit(urlFoto){
//		console.log("colocando imagen twit",urlFoto);
		mostrandoFotoDQT = false;
		if(imagen1Foto == imagenFoto){
			imagenFoto = imagen2Foto;
		}
		else{
			imagenFoto = imagen1Foto;
		}
		var imagenActual = imagenFoto;
		var img = $("<img>");
		img.on("load",function(){
			var anchoImagen = this.width;
			var altoImagen = this.height;
			var anchoTotal = vistaTwit.parent().width();
			anchoTotal = anchoTotal*porcentaje;
			var escala = (anchoTotal)/(anchoImagen);
			//var enlace = "img/dqt.jpg";
			var an = anchoTotal;
			var al = altoImagen*escala;
			if(al > altoMaximoImagen){
				al = altoMaximoImagen;
				escala = altoMaximoImagen/altoImagen;
				an = (anchoImagen)*escala;
			}
			imagenActual.css({"height":al,"background-size":an+"px "+al+"px"});
			fotosTwits.height(al);
			imagenActual.alto = al;
		})
		imagenActual.css({"background-image":"url("+urlFoto+")"});
		img.attr("src",urlFoto);
		cambiarFlip();
	}
	function colocarFotoDQT(){
		
		console.log("solo mensaje");

		if(mostrandoFotoDQT){
			return;
		}
		if(imagen1Foto == imagenFoto){
			imagenFoto = imagen2Foto;
		}
		else{
			imagenFoto = imagen1Foto;
		}
		var anchoTotal = vistaTwit.parent().width();
		anchoTotal = anchoTotal*porcentaje;
		var escala = (anchoTotal)/(anchoFotoDQT);
		var enlace = "img/logo.jpeg";
		var an = anchoTotal;
		var al = altoFotoDQT*escala;
		imagenFoto.css({"height":al,"background-image":"url("+enlace+")",
			"background-size":an+"px "+al+"px"});
		fotosTwits.height(al);
		imagenFoto.alto = al;
		mostrandoFotoDQT = true;
		cambiarFlip();
	}
	function init(){
		imagenFoto = imagen1Foto;
		vistaTwit.actualizarDimensiones();
		setInterval(colocarTwit,8000);
		colocarTwit();
	}
	init();
	return vistaTwit;
}
/*
<div class="contenidoMensaje">
        			<div class="usuario">
        				<img src="img/fotos/usuario.jpg">
        			</div>
        			<div class="mensaje">
        				<h4 class="nombreUsuario">
        					Guillermo David Asto Inga
        				</h4>
        				<div>
        					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        					tempor incididunt ut labore et dolore magna aliqua.
        				</div>
        			</div>
        		</div>
        		*/
function CuadroMensaje(dato){
	var instancia = $("<div class='contenidoMensaje'>");
	var usuario = $("<div class='usuario'>");
	var imagen = $("<img>");
	var mensaje = $("<div class='mensaje'>");
	var nombreUsuario = $("<h4 class='nombreUsuario'>");
	var cuerpoMensaje = $("<div>");
	function init(){
		instancia.append(usuario);
		instancia.append(mensaje);
		usuario.append(imagen);
		mensaje.append(nombreUsuario);
		mensaje.append(cuerpoMensaje);
		console.log("---",dato);
		var linkFoto = dato.user.profile_image_url;
		imagen.attr({"src":linkFoto});
		nombreUsuario.html(dato.user.name);
		cuerpoMensaje.html(dato.text);
		setTimeout(function(){
			instancia.addClass("leer");
		},100);
		setTimeout(function(){
			instancia.addClass("leido");
		},5000);
	}
	init();
	return instancia;
}