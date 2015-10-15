var energym = energym || {};

energym.app = (($, window, undefined) => {

    let init, initOnload, appScroll, appResize, debounce;


    // On Dom ready
    init = () => {
        energym.hero.initParallax();
        console.log('hello','init');
    };


    // On All loaded
    initOnload = () => {
        appScroll();
        appResize();
        setTimeout(() => {
            energym.hero.init();
            energym.loader.dissipate();
        }, 1000);
    };

    // On Scroll
    appScroll = () => {
        let _onScroll;

        _onScroll = debounce(() => {
            console.log('scrolling');
        }, 50);

        $(window).scroll(() =>{
            _onScroll();
        });
    };

    // On Resize
    appResize = function() {
        var _resizeHero;

        _resizeHero = function() {
            $('.hero').height( $(window).height() );
        };
        _resizeHero();

        $(window).resize(function() {
            _resizeHero();
        });
    };

    debounce = (func, wait, immediate) => {
        let timeout;
        return (...args) => {
            let context = this;
            let later = () => {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    };

    return {
        init: init,
        initOnload: initOnload
    };

}(jQuery, window));


// Dom ready
$(() => {
    energym.app.init();
});

// All loaded
$(window).load(() => {
    energym.app.initOnload();
});