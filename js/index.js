$(function(){
    var mySwiper = new Swiper(".swiper-container", {
    loop: true, //ループさせる
    effect: "fade", //フェードのエフェクト
    autoplay: {
      delay: 4000, //４秒後に次の画像へ
      disableOnInteraction: false //ユーザー操作後に自動再生を再開する
    },
    speed: 2000 //２秒かけながら次の画像へ移動
  });
});


$(function(){
window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.fadein').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
     $(this).addClass('scrollin');
    }
   });
  }
};
});


$(function() {
    $('.nav li a').each(function(){
        var $href = $(this).attr('href');
        if(location.href.match($href)) {
            $(this).parent().addClass('current');
        } else {
            $(this).parent().removeClass('current');
        }
    });
});




$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});

