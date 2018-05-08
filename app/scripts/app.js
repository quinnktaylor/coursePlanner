$(function() {
  $('.course-year').click(function(){
    $('.course-col').removeClass('is-active');
    $(this).parent().addClass('is-active');
  });
});
