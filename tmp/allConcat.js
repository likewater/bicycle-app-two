var Bike = require('./../js/bike.js').bikeModule;
var displayLocation = function(bikes){
  $('.showBikes').text(response.bikes.forEach(function(bike) {
    $('.showBikes').append("<a href=https://bikeindex.org/bikes/" + bike.id  + "><span><strong>Description</strong>:</span>" + " " + bike.title + "<br>" + "<span><strong>Serial number:</strong></span>" + " " +  bike.serial + "<br>" + "<span><strong>Date reported stolen:</strong></span>" + " " + new Date(bike.date_stolen * 1000) + "</p><br></a>");
    console.log("response test: " + response);
    }));
};

$(document).ready(function() {
  var currentBikeObject = new Bike();

  $('#locationSearch').click(function() {
    var location = $('#location').val();
    $('#location').val();
    currentBikeObject.getLocation(location);
  });










  $('#locationMake').click(function() {
    var location = $('#location').val();
    var manufacturer = $('#manufacturer').val();
    $('#location').val("");
    $('#manufacturer').val("");
    currentBikeObject.getLocationMake(location, manufacturer);
  });
});
