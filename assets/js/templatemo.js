"use strict";$(document).ready(function(){var t=$(".templatemo-accordion > li > ul").hide();$(".templatemo-accordion > li > a").click(function(){var a=$(this).next();return a.hasClass("active")||(t.removeClass("active").slideUp(),a.addClass("active").slideDown()),!1}),$(".product-links-wap a").click(function(){var t=$(this).children("img").attr("src");return $("#product-detail").attr("src",t),!1}),$("#btn-minus").click(function(){var t=$("#var-value").html();return t="1"==t?t:t-1,$("#var-value").html(t),$("#product-quanity").val(t),!1}),$("#btn-plus").click(function(){var t=$("#var-value").html();return t++,$("#var-value").html(t),$("#product-quanity").val(t),!1}),$(".btn-size").click(function(){var t=$(this).html();return $("#product-size").val(t),$(".btn-size").removeClass("btn-secondary"),$(".btn-size").addClass("btn-success"),$(this).removeClass("btn-success"),$(this).addClass("btn-secondary"),!1})});
/*

TemplateMo 559 Zay Shop

https://templatemo.com/tm-559-zay-shop

*/


// main.js en la página de las camisas
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Obtener datos del botón
          const productName = this.getAttribute('data-name');
          const productImage = this.getAttribute('data-image');
          const productPrecio = this.getAttribute('data-precio');
          const productDes = this.getAttribute('data-des');
          const productTalla = this.getAttribute('data-talla');

          // Guardar en localStorage
          localStorage.setItem('productName', productName);
          localStorage.setItem('productImage', productImage);
          localStorage.setItem('productPrecio', productPrecio);
          localStorage.setItem('productDes', productDes);
          localStorage.setItem('productTalla', productTalla);

          // Redirigir al visualizador
          window.location.href = 'tienda.html';
      });
  });
});
// main.js en la página del visualizador
document.addEventListener('DOMContentLoaded', function() {
  // Obtener los datos del localStorage
  const productName = localStorage.getItem('productName');
  const productImage = localStorage.getItem('productImage');
  const productPrecio = localStorage.getItem('productPrecio');
  const productDes = localStorage.getItem('productDes');
  const productTalla = localStorage.getItem('productTalla');

  // Obtener los elementos del DOM donde se mostrarán los datos
  const largeImageElement = document.getElementById('large-image');
  const productNameElement = document.getElementById('product-name');
  const productPrecioElement = document.getElementById('product-precio');
  const productDesElement = document.getElementById('product-des');
  const productTallaElement = document.getElementById('product-talla');

  if (largeImageElement && productNameElement) {
      // Establecer los valores en los elementos del DOM
      largeImageElement.src = productImage || 'assets/img/camisas/alhi.png'; // Imagen por defecto
      productNameElement.textContent = productName || 'Nombre del producto'; // Nombre por defecto
      productPrecioElement.textContent = productPrecio || 'Precio'; 
      productDesElement.textContent = productDes || 'Descripción'; 
      productTallaElement.textContent = productTalla || 'Talla'; 
  } else {
      console.error('Elementos de visualización del carrito no encontrados.');
  }
});



'use strict';
$(document).ready(function() {

    // Accordion
    var all_panels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });
    // End roduct detail

});
