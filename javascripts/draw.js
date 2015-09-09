// Make call to api to draw a card.  Each player has unique 
// deck id so calls must be made seperately.

define (["jquery", "q"], function($, Q) {

  return function(id) {  
    var deferred = Q.defer();

    $.ajax ({
      url: "http://deckofcardsapi.com/api/deck/" + id + "/draw/?count=2"
    })
    .done(function(data) {
      console.log(data);
      deferred.resolve(data);
    })
    .fail(function(xhr, status, error) {
      deferred.reject(error);
    });
    
    return deferred.promise;
  };
});
