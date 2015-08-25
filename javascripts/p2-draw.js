
define (["jquery", "q"], function($, Q) {

  return function(id) {  
    var deferred = Q.defer();

    $.ajax ({
      url: "http://deckofcardsapi.com/api/deck/" + id + "/draw/?count=1"
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
