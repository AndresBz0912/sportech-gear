


// catgorias


function showCategory(category) {
  console.log(`Mostrando categoría: ${category}`);
  var products = document.querySelectorAll('.product-wap');
  
  products.forEach(function(product) {
      const productCategory = product.getAttribute('data-category');
      console.log(`Producto categoría: ${productCategory}`);
      
      if (productCategory === category || category === 'all') {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  showCategory('camisas'); // Muestra todos los productos al cargar la página
});



