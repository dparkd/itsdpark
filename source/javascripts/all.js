//= require_tree .

$(window).ready(function() {
  $('#shake').click(function() {
    $('.layer').removeClass('hide');
    $('.cs-modal').removeClass('cs-hide');
  });

  $('#shaker').click(function() {
    $('.layer').addClass('hide');
    $('.cs-modal').addClass('cs-hide');
  })
})