var Bike = require('./../js/bike.js').bikeModule;

// var displayResults = function(city, humidityData) {
//   $('.showBike').text("The humidity in " + city + " is " + humidityData + "%");
// }

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#stolen-location').click(function() {
    var location = $('#location').val();
    $('#location').val("");
    currentBikeObject.getBike(location);
  });
});
