function init() {
  var area = document.getElementById("position");
  var latlng = new google.maps.LatLng(24.9774721, 121.1824813);

  var map = new google.maps.Map(area, {
    zoom: 14,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
}

window.addEventListener("load", init);
