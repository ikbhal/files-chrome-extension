// // content.js
// $(document).ready(function() {
//     $('body').css('background-color', 'lightblue');
//   });
  
// content.js
(function() {
  // Function to change the background color of the page
  function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
  }

  // Wait for the DOM to be ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    changeBackgroundColor();
  } else {
    document.addEventListener('DOMContentLoaded', changeBackgroundColor);
  }
})();
