
define(function(require) {
  var $ = require("jquery");
  var p1Value;
  var p1Count = 0;
  var p2Value;
  var p2Count = 0;

  return {
    p1Value: function(card) {
      console.log(card.cards[0].value);
      p1Value = (card.cards[0].value);
    },

    p2Value: function(card) {
      console.log(card.cards[0].value);
      p2Value = (card.cards[0].value);
      console.log("p1Value", p1Value);
      console.log("p2Value", p2Value);

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
            console.log("p1 count", p1Count);
            console.log("p2 count", p2Count);
          }
      $("#p1Score").html(p1Count);
      $("#p2Score").html(p2Count);
      // $(".score").css("display", "block");
    }

  };

});

        // fbModule.updateScore({p2Value: p2Value, p1Value: p1Value})
