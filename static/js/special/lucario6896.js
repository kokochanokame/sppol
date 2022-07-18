$(function(){
  $('.product_img_sub img').on('click',function(){
    img = $(this).attr('src');
    $('.product_img_sub li').removeClass('current');
    $(this).parent().addClass('current');
    $('.product_img_main img').fadeOut(50, function() {
      $('.product_img_main img').attr('src', img).on('load', function() {
        $(this).fadeIn();
      })
    })
  });
});

$(function(){
  $('.product_caution_ttl').on('click', function() {
    $(this).toggleClass('close');
    $(this).next().slideToggle();
  });
});

$(function(){
  $('.nav .inner li img').each(function() {

    let img_off = $(this).attr('src');
    let img_on = $(this).attr('src').replace('off', 'on');

    $(this).hover(
      function () {
        $(this).attr('src', img_on);
      },
      function () {
        $(this).attr('src', img_off);
      }
    );
  });
});
