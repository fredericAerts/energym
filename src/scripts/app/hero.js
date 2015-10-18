var energym = energym || {};

energym.hero = (($, window, undefined) => {

    let init, resizeHero, initParallax;

    init = () => {
        // hero arrow click handler
        $('.js-hero__arrow-wrapper').click(function(event) {
            event.preventDefault();
            var offset = 75;
            var target = $('.js-quote').offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            }, 1000, "easeOutQuart");            
        });

        $('.hero').addClass('hero--parallaxed');

        $('body').addClass('active');
        $('.hero__arrow').addClass('hero__arrow--active');
    };

    resizeHero = () => {
        $('.hero').height( $(window).height() );
    };

    initParallax = () => {        
        $('.parallax-window').parallax({
            imageSrc: 'web/img/hero.jpg',
            position: 'top center',
            speed: 0.3
        });
    };

    return {
        init: init,
        resizeHero: resizeHero,
        initParallax: initParallax
    };

}(jQuery, window));