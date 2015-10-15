var energym = energym || {};

energym.hero = (($, window, undefined) => {

    let init, resizeHero, initParallax;

    init = () => {
        $('.hero').addClass('hero--parallaxed');
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