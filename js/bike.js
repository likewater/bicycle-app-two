var apiKey = require('./../.env').apiKey;

function Weather(location){
  this.location = location;
}

Weather.prototype.getWeather = function(location) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + location + '&distance=25&stolenness=proximity').then(function(response) {
    $('.showBikes').text(response.bikes.forEach(function(bike) {
      $('.showBikes').append("<li>" + "<span>Year, make and model:</span>" + " " + bike.title + "<br>" + "<span>Serial number:</span>" + " " +  bike.serial + "<br>" + "<span>Date reported stolen:</span>" + " " + new Date(bike.date_stolen * 1000) + "</li>");
      console.log(response);
    }));
  })
    .fail(function(error) {
      $('.$showBikes').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
//
// $(colors).each(function() {
//    var color = this;
//    $.get("https://bikeindex.org:443/api/v2/bikes_search/count?colors=" + color +  "&proximity=" + city + "&proximity_square=100&access_token=date_stolen").then(function(response) {
//      responseString += "<li class='list-group-item'>" + response.proximity + " stolen " + color + " bikes </li>";
//      done -= 1;
//      if(done === 0){
//        $('#output').prepend(responseString);
//      }
//    }).fail(function(error) {
//        $('#output').prepend(error.responseJSON.message);
