$(document).ready(function(){
  $('.cs-heading-container').click(function(){
    $('.cs-container').removeClass('cs-active');
    $(this).parent().addClass('cs-active');
  });
});
