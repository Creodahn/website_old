$(document).ready(function() {
  $('main').scroll(function(e) {
    var arrowTop = $('.scroll-arrow').prop('offsetTop'),
        mainTop = $('main').scrollTop(),
        currentEl,
        lastEl,
        found = 0;

    if(mainTop > arrowTop) {
      $('nav').addClass('position');
    } else {
      $('nav').removeClass('position');
    }

    $('section').each(function(i, el) {
      var offset = $(el).prop('offsetTop') - mainTop;
      if(offset > 0 && found === 0) {
        currentEl = lastEl;
        found = 1;
      }

      lastEl = el;
    });

    if($(currentEl).prop('id')) {
      window.location.hash = '#' + $(currentEl).prop('id');
    } else {
      window.location.hash = '';
    }

    $('main').scrollTop(mainTop);

    if($('nav').children('a[href="#' + $(currentEl).prop('id') +'"]')) {

      $('nav').children('a').each(function(i, el) {
        $(el).removeClass('active');
      });

      $('a[href="#' + $(currentEl).prop('id') +'"]').addClass('active');
    }
  });

  $('a[href*="#"]').click(function(e) {
    var href = $(this).attr('href');
    e.preventDefault();

    if(href.length > 0) {
      $('main').animate({
        scrollTop: $(href).prop('offsetTop')
      }, 300);

      window.location.hash = href;
    }
  });

  $('.photo-stack').click(function(e) {
    var img = $(e.target).closest('img').attr('src');

    $('.photo-modal').css('background-image', 'url(\'' + img + '\')');
    $('.photo-modal').css('display', 'block');
  });

  $('.close-button').click(function(e) {
    $(e.target).parent().css('display', 'none');
  });

  if(window.location.hash.length > 0) {
    $('main').animate({
      scrollTop: $(window.location.hash).prop('offsetTop')
    }, 300);
  }
});
