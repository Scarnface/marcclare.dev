/* ================================= 
  Scripts
==================================== */

// Hide the menu on page load
document.addEventListener('DOMContentLoaded', function() {
  $(this).find('.menu-content').hide();
});

// Switch menu visibilty on hover
$('.menu').hover(function() {
  $(this).find('#menu-btn-primary').hide();
  $(this).find('.menu-content').show();
}, function() {
  $(this).find('.menu-content').hide();
  $(this).find('#menu-btn-primary').show();
});