var arrayLogos = [
  { img: "banner.jpg", nombre: "America" },
  { img: "banner.jpg", nombre: "America" },
  { img: "banner.jpg", nombre: "America" },
  { img: "banner.jpg", nombre: "America" },
  { img: "banner.jpg", nombre: "America" },
  { img: "banner.jpg", nombre: "America" },
  { img: "banner.jpg", nombre: "America" },

  /*
	{img:"america.jpg",nombre:"America"},
	{img:"anatamina.png",nombre:"America"},
	{img:"bcp.png",nombre:"America"},
	{img:"bmw.png",nombre:"America"},
	
	{img:"camposol.png",nombre:"America"},
	{img:"claro.png",nombre:"America"},
	{img:"google.jpg",nombre:"America"},
	{img:"granaymontero.jpg",nombre:"America"},
	{img:"ipsos.jpeg",nombre:"America"},
	{img:"madam_tusan.jpg",nombre:"America"},
	{img:"pacifico.jpg",nombre:"America"},
	{img:"prima_afp.png",nombre:"America"}
*/
];
function banerInferior() {
  var pos = 0;
  var anchoImagen = 885;
  var altoImagen = 124;

  function init() {
    var i, dato, imagen, link;
    var baneInferior = $("#baneInferior");
    for (j = 0; j < 4; j++) {
      for (i = 0; i < arrayLogos.length; i++) {
        dato = arrayLogos[i];
        imagen = $("<img class='logoImagen'>");
        link = "img/auspiciadores/" + dato.img;

        imagen.attr({ src: link });
        baneInferior.append(imagen);
      }
    }
    setInterval(function () {
      var alto = $("footer").height();
      var escala = alto / altoImagen;
      var anchex = Math.round(escala * anchoImagen);
      var ancho = anchex * arrayLogos.length;
      if (pos >= ancho) {
        pos = 0;
      }
      baneInferior.css({ "margin-left": -pos });

      pos += 1;
    }, 10);
  }
  init();
}
banerInferior();
