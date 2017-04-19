var Weather = require('./../js/bike.js').weatherModule;

// var displayResults = function(city, humidityData) {
//   $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
// }

$(document).ready(function() {
  var currentBikeObject = new Weather();
  $('#weather-location').click(function() {
    var location = $('#location').val();
    $('#location').val("");
    currentBikeObject.getWeather(location);
  });
});
