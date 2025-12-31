'use strict';

jQuery(function ($) {
  $('#js-hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    $('.p-nav').toggleClass('is-active');
  });

  $('.p-nav__link').on('click', function () {
    // event.preventDefault(); を付けるとリンクが効かなくなる
    $('#js-hamburger').removeClass('is-active');
    ('.p-nav').removeClass('is-active');
  });
});