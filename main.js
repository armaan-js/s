// main.js

document.addEventListener('DOMContentLoaded', function() {

  const button1 = document.getElementById('button1');

  button1.addEventListener('click', function() {
  
    window.location.href = 'index.html';
  });

  const button2 = document.getElementById('button2');

  button2.addEventListener('click', function() {
    
    window.location.href = 'product.html';
  });

});
