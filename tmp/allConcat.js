var Bike = require('./../js/bike.js').bikeModule;


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
