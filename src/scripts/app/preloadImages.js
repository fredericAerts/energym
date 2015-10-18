var energym = energym || {};

energym.preloadImages = (($, window, undefined) => {

    let init;

    let hostUrl = "http://" + location.host;
    let imageDirectories = [
        "/web/img/gallery/7.JPG",
        "/web/img/gallery/29.jpg",
        "/web/img/gallery/5.JPG",
        "/web/img/gallery/28.JPG"
    ];

    energym.preloadedImages = []; // saving images on global seem to work best for zoom on first clicked image

    init = () => {
        imageDirectories.forEach((imageDirectory, index) => {
            energym.preloadedImages[index] = new Image();
            energym.preloadedImages[index].src = hostUrl + imageDirectory;
        });
    };

    return {
        init: init
    };

}(jQuery, window));