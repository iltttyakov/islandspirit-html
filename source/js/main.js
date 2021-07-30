$('input').on('change', function () {
  $(this).attr('value', $(this).val());
});

if ($('#city__clouds').length) {
  let clouds = document.getElementById('city__clouds');
  let balloon = document.getElementById('city__balloon');
  let lines = document.getElementById('city__lines');
  let dots = document.getElementById('city__dots');

  $(window).on('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    clouds.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    balloon.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    lines.style.transform = 'translate(-' + x * 8 + 'px, -' + y * 8 + 'px)';
    dots.style.transform = 'translate(-' + x * 4 + 'px, -' + y * 4 + 'px)';
  });
}

$('.map__marker').on('click', function () {
  $('.map__marker').addClass('map__marker--hide');
  $(this).addClass('map__marker--active');

  $('.map__close').removeClass('map__close--hide');
  $('.first__offer').addClass('first__offer--withbg');

  let imgUrl = $(this).data('img');
  $(this).css('background-image', 'url("' + imgUrl + '")')
});

$('.map__close').on('click', function () {
  $('.map__marker').removeClass('map__marker--active');
  $('.map__marker').removeClass('map__marker--hide');

  $('.map__marker').css('background-image', '');

  $('.first__offer').removeClass('first__offer--withbg');
});

if ($('.header__burger').length) {
  $('.header__burger').on('click', function () {
    $('.header__menu').slideToggle();
  });
}

if ($('.share__open').length) {
  $('.share__open').on('click', function () {
    $('.share').toggleClass('share--active');
  });
}
