// main.js

// Wait for the DOM to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function() {
  // Select button1 using its ID
  const button1 = document.getElementById('button1');

  // Add an event listener for the click event
  button1.addEventListener('click', function() {
    // Redirect to page1.html when button1 is clicked
    window.location.href = 'page1.html';
  });
});
// JavaScript Document