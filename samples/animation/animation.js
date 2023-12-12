(function () {

  
  // rolling-title/img
  function rollingTitle(target, duration) {
    $(target).eq(0).addClass('on');
    var rollingTit = $(target);
    // $('.rolling-title span').eq(0).addClass('on');
    // var rollingTit = $('.rolling-title span');
    var cnt = 0;
    setInterval(function () {
      cnt++;
      if (cnt > rollingTit.length - 1) {
        cnt = 0;
      }
      rollingTit.removeClass('on ed');
      rollingTit.eq(cnt - 1).addClass('ed');
      rollingTit.eq(cnt).addClass('on');
    }, duration);
  }
  rollingTitle('.rolling-title span', 1500);
  rollingTitle('.howto-img-motion .img', 2000);


  // swipe-slide preview & station
  $(".swiper-container").each(function (index) {

    switch (index) {
      case 0:
        var swiper = new Swiper('.card-slider', {
          slidesPerView: 1,
          slidesOffsetBefore: 0,
          centeredSlides: true,
          spaceBetween: 15,
          on: {
            slideChangeTransitionEnd: function () {
              var nowIndex = swiper.realIndex;

              switch (nowIndex) {
                case 1: typingMotion(); break;
                case 2: removeHeart(); break;
                case 3: playHeart(); break;
                case 4: removeHeart(); break;
              }
            },
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
        break;

      case 1:
        var swiper = new Swiper('.station-slider', {
          slidesPerView: 1,
          spaceBetween: 0,
          on: {

            activeIndexChange: function (swip) {
              var $txt = $('.station-title .rolling-station span');
              var location = ['홍대입구역 ', '삼성역 ', '강남역 '];
              $txt.removeClass('active');
              setTimeout(function(){
                $txt.addClass('active');
              },100)
              $txt.html(location[swip.activeIndex]);
            }
          },
          autoplay: {
            delay: 5000,
          },
          pagination: {
            el: ".swiper-bullet",   //페이징 태그 클래스 설정 
            clickable: true,
            type: 'bullets',
            renderBullet: function (index, className) {
              return '<span class="ir ' + className + '">' + (index + 1) + "</span>";
            },
          },

        });
        break;
    }
  })


  var typing = false;
  function typingMotion() {
    if(typing) return;
    var strArr = "보고싶다는말해주면".split("");
    var appendStr = "";
    typing=true;
    $(".role .place").html(" ");
    $(".role .frist").addClass("on");

    for (let i = 0; i < strArr.length; ++i) {
      setTimeout(function () {
        appendStr += strArr[i];
        $(".role .typing").html(appendStr);
        if(i === strArr.length - 1)
        typing= false;
      }, 200 * i)
    }
  }

  function picMotion() {
    var count = 1;

    function loop() {
      if (count === 1) {
        $(".photo ul").removeClass("on1");
        $(".photo ul").removeClass("on2");
        $(".photo ul").removeClass("on3");
      }

      setTimeout(function () {
        $(".photo ul").addClass("on" + count);
        if (count === 3) count = 1;
        else count++;
      }, 10);
      setTimeout(loop, 2000);
    }
    loop();
  }
  picMotion();

  function playHeart() {
    function randomNum(m, n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor(Math.random() * (n - m + 1)) + m;
    }
    function addHeart() {
      for (var i = 0; i < 8; i++) {
        $('.heart').eq(i).css({
          'animation': 'heart-ani 1s ' + i * 0.1 + 's forwards',
          'transform': 'scale(0.4) translate( ' + randomNum(-150, 150) + 'px,' + randomNum(-420, -100) + 'px)',
          'transition': 'transform 2s ' + i * 0.1 + 's'
        });
      }
    };
    addHeart();
  }
  function removeHeart() {
    for (var i = 0; i < 8; i++) {
      $('.heart').eq(i).css({
        'animation': 'none',
        'transform': 'scale(1) translate(0,0)',
        'transition': 'transform 2s ' + i * 0.1 + 's'
      });
    }
  }

})();
