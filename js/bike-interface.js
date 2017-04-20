var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  var currentBikeObject = new Bike();

  $('#locationSearch').click(function() {
    var location = $('#location').val();
    $('#location').val();
    currentBikeObject.getLocation(location);
  });

  var location = function(bikeArray){
    bikeArray.forEach(function(bike){
      $('.showBikes').text(response.bikes.forEach(function(bike) {

        $('.showBikes').append("<a href=https://bikeindex.org/bikes/" + bike.id  + "><span><strong>Description</strong>:</span>" + " " + bike.title + "<br>" + "<span><strong>Serial number:</strong></span>" + " " +  bike.serial + "<br>" + "<span><strong>Date reported stolen:</strong></span>" + " " + new Date(bike.date_stolen * 1000) + "</p><br></a>");
    })
  }

  $('#locationMake').click(function() {
    var location = $('#location').val();
    var manufacturer = $('#manufacturer').val();
    $('#location').val("");
    $('#manufacturer').val("");
    currentBikeObject.getLocationMake(location, manufacturer);

    var locationMake = function(bikeArray){
      bikeArray.forEach(function(bike){
        $('#output').append("<a href=https://bikeindex.org/bikes/" + bike.id  + "><span><strong>Description</strong>:</span>" + " " + bike.title + "<br>" + "<span><strong>Serial number:</strong></span>" + " " +  bike.serial + "<br>" + "<span><strong>Date reported stolen:</strong></span>" + " " + new Date(bike.date_stolen * 1000) + "</p><br></a>" );
    });
  });
});

// -------------------------------------------
_var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

new google.maps.Map(document.getElementById('map'), mapOptions);

var markerOptions = {
    position: new google.maps.LatLng(37.7831, -122.4039)
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);
