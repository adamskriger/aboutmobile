$( document ).ready(function() {
    console.log( "ready!" );


    $(window).scroll(function(){
      var sticky = $('.header-background'),
          scroll = $(window).scrollTop();

      if (scroll >= 50) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });



$('.formfor-ipad').submit(function(e) {
  e.preventDefault();
  var input1 = $('#input1field').val().trim();
  console.log(input1)
  $('.active-ipad').append(input1 + '<br>');

  var input2 = $('#input2field').val().trim();
  console.log(input1)
  $('.active-ipad').append(input2 + '<br>');

  var input3 = $('#input3field').val().trim();
  console.log(input1 + '<br>')
  $('.active-ipad').append(input3);
  $(this).attr('style', 'text-align: center');

  $('.centerer').css('text-align','center');


});


});
