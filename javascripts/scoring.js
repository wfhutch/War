define(function(require) {
  var $ = require("jquery");
  var p1Value;
  var p1Count = 0;
  var p2Value;
  var p2Count = 0;
  var allCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "JACK", "QUEEN", "KING", "ACE"];
  console.log (allCards);

  return {
    p1Value: function(card) {
      console.log(card.cards[0].value);

      for (i=0; i<allCards.length; i++) {
        if (card.cards[0].value === allCards[i]) {
          console.log(allCards[i]);
          p1Value = allCards.indexOf(allCards[i]);
        }
      }
      // if (card.cards[0].value == "JACK") {
      //   p1Value = 11;
      // } else if(card.cards[0].value == "QUEEN") {
      //   p1Value = 12;
      // } else if(card.cards[0].value == "KING") {
      //   p1Value = 13;  
      // } else if(card.cards[0].value == "ACE") {
      //   p1Value = 14;
      // } else {
      //     p1Value = card.cards[0].value;
          console.log(p1Value);
      //   } 
    }
  };
});