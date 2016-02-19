// document.getElementById('search-opener').onclick = function() {
//    popup =document.getElementById('search-popup'); 
//   if(hasClass(popup, 'main-search-popup')) {
//     popup.classList.add("fadeout");
//   }
//   else {
//     console.log(2);
//   }
//   popup.classList.add('popup-animate');
// }

function init() {
  var mapDiv = document.getElementById('main_google_map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 34.898071, lng: -111.516274},
      zoom: 9
    });
}
// hasClass = function(element, selector) {
//   classList = element.classList;
//     for (var i = 0, l = classList.length; i < l; i++) {
//         if (classList[i] === selector) {
//             return true;
//         }
//     }

//     return false;
// }