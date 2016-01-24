function init() {
  var mapDiv = document.getElementById('main_google_map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 34.898071, lng: -111.516274},
      zoom: 9
    });
}