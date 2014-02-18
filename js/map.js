function initialize() {
	var mapOptions = {
		zoom: 12,
		center: new google.maps.LatLng(23.05193468212115, 113.38525772094727),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	
	var position = new google.maps.LatLng(23.06441249099139, 113.39474201202393);
	var marker = new google.maps.Marker({
		position: position,
		map: map,
		title: "GuangZhou"
	});
}
google.maps.event.addDomListener(window, 'load', initialize);