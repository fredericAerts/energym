var energym = energym || {};

energym.loader = (($, window, undefined) => {

    var dissipate;

    dissipate = () => {
        $('body').addClass('active');
        $('.hero__arrow').addClass('hero__arrow--active');
    };

    return {
        dissipate: dissipate
    };

}(jQuery, window));