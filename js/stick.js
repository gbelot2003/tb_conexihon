
// Nuestro namespace:
var RotarDestacado = RotarDestacado || {};
/**
 * Inicializar la rotación de destacados.
 */
RotarDestacado.init = function() {
  var destacados = jQuery(".sticky");
   
  // Si no tenemos bastante, detener inmediatamente.
  if (destacados.size() <= 1 || jQuery('#node-form').size() > 0) {
    return;
  }
  
  var masalto = 100;
  destacados.each(function () {
    var destacadoAlto = jQuery(this).height();
    if(destacadoAlto > masalto) {
      masalto = destacadoAlto;
    }
  });

  destacados.hide().css('height', masalto + 'px');
  RotarDestacado.contador = 0;
  RotarDestacado.destacados = destacados;

  destacados.eq(0).fadeIn('slow');
  setInterval(RotarDestacado.actualizarPeriodico, 18000);
};

 
RotarDestacado.actualizarPeriodico = function () {
  var destacados = RotarDestacado.destacados;
  var contar  = RotarDestacado.contador;
  var ultimoDestacado = destacados.size() - 1;
  
  var nuevacuenta;
  if (contar == ultimoDestacado) {
      nuevacuenta = RotarDestacado.contador = 0;
  }
  else {
      nuevacuenta = RotarDestacado.contador = contar + 1;
  }
  
  destacados.eq(contar).fadeOut('slow', function () {
    destacados.eq(nuevacuenta).fadeIn('slow');
  });
};



jQuery(document).ready(RotarDestacado.init);




















