var energym = energym || {};

energym.hero = (($, window, undefined) => {

    let init, initParallax;

    init = () => {
        $('.hero').addClass('hero--parallaxed');
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
        initParallax: initParallax
    };

}(jQuery, window));