jQuery(document).ready(function($) {
	
	// Menu sticky
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

		if (wScroll > 60) {
			$('.topbar').addClass('sticky-menu');
		} else {
			$('.topbar').removeClass('sticky-menu');
		}

		// Parallax header
		if ((wScroll + 200) > $('#services').offset().top) {

			$('.service').each(function(i) {
				setTimeout(function(){
					$('.service').eq(i).addClass('is-showing');
				}, 250 * (i+1));
			});

		}

	});

	// Menu active
	$('.menu-item a').click(function() {
		$('.menu-item a').removeClass('menu-active');
		$(this).addClass('menu-active');
	});

	// Smooth Scrolling
	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname ===this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
        return false;
      }
    }
  });

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu-item a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu-items a').removeClass("menu-active");
            currLink.addClass("menu-active");
        }
        else{
            currLink.removeClass("menu-active");
        }
    });
	}
  // menu responsive
  $('.icon-close').hide();

  $('.icon-menu').click(function() {

    $('.icon-menu').hide();
    $('.icon-close').show();

    $('#nav-menu-mobile .menu').addClass('menu-responsive').removeClass('menu');

    $('.icon-close').click(function(){
      $('#nav-menu-mobile .menu-responsive').removeClass('menu-responsive').addClass('menu');
      $('.icon-menu').show();
      $('.icon-close').hide();
    });

  });

  $('.menu-item a').click(function() {
    $('.menu-responsive').removeClass('menu-responsive').addClass('menu');
    $('.icon-menu').show();
    $('.icon-close').hide();
  });

});