define(function(require) {
  var $ = require("jquery");

  return function(card) {
    console.log("convert card", card);
    var cardValue = 0;

    if (card === "2") {
      cardValue = 2;
    }
    if (card === "3") {
      cardValue = 3;
    }
    if (card === "4") {
      cardValue = 4;
    }
    if (card === "5") {
      cardValue = 5;
    }
    if (card === "6") {
      cardValue = 6;
    }
    if (card === "7") {
      cardValue = 7;
    }
    if (card === "8") {
      cardValue = 8;
    }
    if (card === "9") {
      cardValue = 9;
    }
    if (card === "10") {
      cardValue = 10;
    }
    if (card === "JACK") {
      cardValue = 11;
    }
    if (card === "QUEEN") {
      cardValue = 12;
    }
    if (card === "KING") {
      cardValue = 13;
    }
    if (card === "ACE") {
      cardValue = 14;
    }
    console.log("converted value", cardValue);
    return cardValue;
  };
});






