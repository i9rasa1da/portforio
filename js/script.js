  $(function () {
    $('.slider').slick({
      speed: 2000, //スライドが切り替わる速度 3秒 1000ミリ=1秒
      autoplay: true, //自動再生
      autoplaySpeed: 4000, //スライド切り替え待ち時間 再生速度 5秒 1000ミリ=1秒
      infinite: true, //無限にスライド
      fade: true, //フェードを有効   
      dots: true,  //ドットを表示                     
    });
          });

  $('a[href^="#"]').click(function () {
              var speed = 800;
  var adjust = $('#header').height();
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - adjust;
  $('body,html').animate({scrollTop: position }, speed, 'swing');
  return false;
            });