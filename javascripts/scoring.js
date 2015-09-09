
define(function(require) {
  var $ = require("jquery");
  var p1Value;
  var p1Count = 0;
  var p2Value;
  var p2Count = 0;

  return {
    p1Value: function(card) {
      p1Value = (card);
    },

    p2Value: function(card2) {
      p2Value = (card2);

      if (p1Value > p2Value) {
        p1Count += 2;
        console.log("p1 count", p1Count);
      } else if 
        (p1Value < p2Value) {
        p2Count += 2;
        console.log("p2 count", p2Count);
        } else if
          (p1Value == p2Value) {
            p1Count += 1;
            p2Count += 1;
          }
      $("#p1Score").html(p1Count);
      $("#p2Score").html(p2Count);
    },

    winner: function() {
      if (p1Count > p2Count) {
        $("#p1winner").removeClass("invisible");
      } else if 
          (p1Count < p2Count) {
            $("#p2winner").removeClass("invisible");
        } else if 
            (p1Count == p2Count) {
              $("tie").removeClass("invisible");
            }
    }

  };

});

        // fbModule.updateScore({p2Value: p2Value, p1Value: p1Value})
