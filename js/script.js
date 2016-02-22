document.getElementById("search-opener").onclick = function(event) {
  event.preventDefault();
  console.log(123);
  popup =document.getElementById("search-popup");
  if(hasClass(popup, "open")) {
    popup.classList.remove("open");
  }
  else {
    popup.classList.add("open");
  }
}

function init() {
  var mapDiv = document.getElementById("main_google_map");
  var SedonaLatLng = {lat: 34.878397, lng:-111.762395};
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 34.757071, lng: -111.736274},
    zoom: 9
  });
  var marker = new google.maps.Marker({
  position: SedonaLatLng,
  map: map,
  title: "Sedona dream"
  });
}

function  hasClass(element, selector) {
  classList = element.classList;
    for (var i = 0, l = classList.length; i < l; i++) {
      if (classList[i] === selector) {
        return true;
      }
    }
    return false;
}