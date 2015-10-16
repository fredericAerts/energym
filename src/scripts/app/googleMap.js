var energym = energym || {};

energym.googleMap = (($, window, undefined) => {

	let init;

	let map, marker;
	let energymCoordinates = {lat: 50.883975, lng: 4.721662};

	init = () => {
		map = new google.maps.Map(document.getElementById('js-google-map'), {
			center: energymCoordinates,
			zoom: 14,
			scrollwheel: false,
			streetViewControl: false,
			mapTypeControl: false,
			zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_LEFT
			}
		});

		marker = new google.maps.Marker({
			position: energymCoordinates,
			map: map
		});
	};

	return {
		init: init
	};

}(jQuery, window));