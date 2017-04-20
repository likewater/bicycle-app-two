var apiKey = require('./../.env').apiKey;

Bike = function(){
}


//displayLocation(response.bikes);

Bike.prototype.getLocation = function(location) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + location + '&distance=25&stolenness=proximity').then(function(response) {
          displayLocation(response.responseText, true);
    // $('.showBikes').text(response.bikes.forEach(function(bike) {
    //   $('.showBikes').append("<a href=https://bikeindex.org/bikes/" + bike.id  + "><span><strong>Description</strong>:</span>" + " " + bike.title + "<br>" + "<span><strong>Serial number:</strong></span>" + " " +  bike.serial + "<br>" + "<span><strong>Date reported stolen:</strong></span>" + " " + new Date(bike.date_stolen * 1000) + "</p><br></a>");
    //   console.log("response test: " + response);
    // }));

  }).fail(function(error) {
      $('.showBikes').text(error.responseJSON.message);
  });
};










Bike.prototype.getLocationMake = function(location, manufacturer) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + manufacturer + '&location=' + location + '&distance=25&stolenness=proximity').then(function(response) {
    $('.showBikes').text(response.bikes.forEach(function(bike) {
      $('.showBikes').append("<a href=https://bikeindex.org/bikes/" + bike.id  + "><span><strong>Description</strong>:</span>" + " " + bike.title + "<br>" + "<span><strong>Serial number:</strong></span>" + " " +  bike.serial + "<br>" + "<span><strong>Date reported stolen:</strong></span>" + " " + new Date(bike.date_stolen * 1000) + "</p><br></a>");
    }));
  })
    .fail(function(error) {
      $('.showBikes').text(error.responseJSON.message);
  });
};
exports.bikeModule = Bike;
