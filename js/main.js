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
    e.preventDefault();
    var href = $(this).attr('href');

    if(href.length > 0) {
      $('main').animate({
        scrollTop: $(href).prop('offsetTop')
      }, 300);
    }
  });

  $('.photo-stack').click(function(e) {
    var img = $(e.target).closest('img').attr('src');
    $('main').addClass('de-emphasize');
    $('.photo-modal').css('background-image', 'url(\'' + img + '\')');
    $('.modal-background').removeClass('hidden');
  });

  $('.close-button').click(function(e) {
    $(e.target).parent().addClass('hidden');
    $('main').removeClass('de-emphasize');
  });

  if(window.location.hash.length > 0) {
    $('main').animate({
      scrollTop: $(window.location.hash).prop('offsetTop')
    }, 300);
  }

  setYear();
  chartInit();
});

function chartInit() {
  var ctx = $('#skill-chart').get(0).getContext('2d');
  var data = {
    labels: ["T-SQL", "HTML5", "Javascript", "CSS3", "JQuery", "Git", "Node.js",
             "Express.js", "Ember.js", "SCSS"],
    datasets: [
        {
            label: "My Skills",
            fillColor: '#db3340',
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [4, 3.75, 3.75, 3.5, 3.5, 3, 2.25, 2, 0.5, 0.25]
        }
    ]
  };
  var options = {
    scaleBeginAtZero : true,
    scaleShowGridLines : true,
    scaleGridLineColor : "rgba(0,0,0,.05)",
    scaleGridLineWidth : 1,
    scaleShowHorizontalLines: false,
    scaleShowVerticalLines: false,
    barShowStroke : true,
    barStrokeWidth : 2,
    barValueSpacing : 5,
    barDatasetSpacing : 1

  }
  var bar = new Chart(ctx).Bar(data, options);
}

function setYear() {
  $('#year').html(new Date().getFullYear());
}
