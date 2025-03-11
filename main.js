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

  
    const contact = document.getElementById('contact-us')
    contact.addEventListener('click', function() {
      let userResponse = confirm("Do you want to contact us via email?");
      
      if (userResponse) {
        window.location.href = "mailto:spice-world@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20ask%20about...";
      }

  });
  
});
