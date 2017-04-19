var apiKey = require('./../.env').apiKey;
var test = "true";
var stolen = "true";

function Bike(location){
  this.location = location;
}

Bike.prototype.getLocation = function(location) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + location + '&distance=25&stolenness=proximity').then(function(response) {
    location(response.bikes);
    }));
  })
    .fail(function(error) {
      $('.$showBikes').text(error.responseJSON.message);
    });
  };

  Bike.prototype.getLocationMake = function(location, manufacturer) {
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + manufacturer + '&location=' + location + '&distance=25&stolenness=proximity').then(function(response) {
      locationMake(response.bikes);
      }));
    })
    .fail(function(error) {
      $('.$showBikes').text(error.responseJSON.message);
      });
    };


    Bike.prototype.postStolenBike = function(location, manufacturer, year, frame_model, date_stolen, frameColors, stolen, test) {
      var stolenBike = {stolen_location :location, manufacturer_name :manufacturer, year :year, frame_model :frame_model, date_stolen :date_stolen, frameColors :frameColors, stolen : "true", test :"true"}
      $.post('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + manufacturer + '&location=' + location + '&distance=25&stolenness=proximity').then(function(response) {
        locationMake(response.bikes);
        }));
      })
      .fail(function(error) {
        $('.$showBikes').text(error.responseJSON.message);
        });
      };


exports.bikeModule = Bike;
