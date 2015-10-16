var energym = energym || {};

energym.app = (($, window, undefined) => {

    let init, 
        initOnload, 
        appScroll, 
        appResize, 
        getOrientation, 
        setOrientation, 
        debounce;

    let orientation;

    // On Dom ready
    init = () => {
        energym.hero.resizeHero();
        energym.hero.initParallax();
        energym.popup.init();
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
    appResize = () => {
        let _onResize;
        orientation = getOrientation();

        _onResize = debounce(() => {
            let currentOrientation = getOrientation();
            if(currentOrientation !== orientation) {
                energym.hero.resizeHero();
                setOrientation(currentOrientation);
            }
        }, 50);

        $(window).resize(() => {
           _onResize(); 
        });
    };

    getOrientation = () => {
        return $(window).height() < $(window).width() ? "landscape" : "portrait";
    };

    setOrientation = (currentOrientation) => {
        orientation = currentOrientation;
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