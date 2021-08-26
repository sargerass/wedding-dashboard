<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Presentación</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <!--<link rel="stylesheet" href="css/main.css"> -->
    </head>
    <script type="text/javascript">
        var hastTag = null;
         <?php 
            if( isset($_GET["hash"]) ){
                echo "hastTag = '".$_GET["hash"]."'";
            }
         ?>
    </script>
   
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <section id="app">
            <section id="imagenCargando">

                <h1 class="tituloBienvenida">
                <!--
                    <img src="img/loading-verde.gif">
                    -->
                    <img src="img/logo.jpeg">
                </h1>
            </section>
        	<section id="contenidoBaner">
        		<div class="filaFotos fila fila1">
        		</div>
        		<div class="filaFotos fila fila2">
        		</div>
                <div class="filaFotos fila fila1">
                </div>
        		<div class="fila fila2">
                    <div>
                        <div class="contenedorFlip" id="fotosTwits">
                            <div class="contenedorLogo front" id="imagen1Foto" style="margin-bottom: 5.375px; height: 526.625px; background-image: url(&quot;img/dqt.jpg&quot;); background-size: 526.625px 526.625px;">
                            </div>
                            <div class="contenedorLogo back" id="imagen2Foto" style="margin-bottom: 5.375px; height: 526.625px; background-image: url(&quot;img/dqt.jpg&quot;); background-size: 526.625px 526.625px;">                            
                            </div>
                        </div>
                        <div class="contenidoTwit" id="vistaTwit">
                            <table >
                                <tbody>
                                    <tr>
                                        <td rowspan="2" class="usuario" >
                                            <img id="imagenPerfilUsuario" src="img/logos/america.jpg">
                                        </td>
                                        <td style="padding-right: 0">
                                            <section class="contenidoMensajeUsuarios">
                                                <h4 id="lblNombreUsuario" class="nombreUsuario">
                                                    Guillermo David Asto Inga
                                                </h4>
                                                <div class="mensajeUsuario" id="lblMensajeUsuario">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </section>
                                            
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>                    
                    </div>
                    
                    <div class="fila filaFotos fila3">
                        
                    </div>
                    <div class="fila filaFotos fila3">
                        
                    </div>
        		</div>
        	</section>
        	<footer >
        		<div id="baneInferior">
        			
        		</div>
        	</footer>
        </section>

        <script type="text/javascript" src="js/vendor/jquery.min.js"></script>        
        
        <script type="text/javascript" src="js/banerInferior.js"></script>
        <script type="text/javascript" src="js/vistas/vistaFoto.js"></script>
        <script type="text/javascript" src="js/vistas/vistaMensajes.js"></script>
        <script type="text/javascript" src="js/portada.js"></script>
        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>