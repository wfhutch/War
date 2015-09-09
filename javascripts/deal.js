// Make call to api to get new deck.  Each player uses their
// own full deck.

define(function(require) {
  var $ = require("jquery");
  var Q = require("q");

  return function() {  
    var deferred = Q.defer();

    $.ajax ({
      url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    })
    .done(function(data) {
      deferred.resolve(data);
    })
    .fail(function(xhr, status, error) {
      deferred.reject(error);
    });
    
    return deferred.promise;
  };
});
