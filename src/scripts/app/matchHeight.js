var energym = energym || {};

energym.matchHeight = (($, window, undefined) => {

    let init;

    init = () => {
        $('.js-facility').matchHeight();
    };

    return {
        init: init
    };

}(jQuery, window));