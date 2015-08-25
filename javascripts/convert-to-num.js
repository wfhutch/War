define(function(require) {
  var $ = require("jquery");

  function convert() {
    if (card.cards[0].value === "2") {
      cardValue = 2;
    }
    if (card.cards[0].value === "3") {
      cardValue = 3;
    }
    if (card.cards[0].value === "4") {
      cardValue = 4;
    }
    if (card.cards[0].value === "5") {
      cardValue = 5;
    }
    if (card.cards[0].value === "6") {
      cardValue = 6;
    }
    if (card.cards[0].value === "7") {
      cardValue = 7;
    }
    if (card.cards[0].value === "8") {
      cardValue = 8;
    }
    if (card.cards[0].value === "9") {
      cardValue = 9;
    }
    if (card.cards[0].value === "10") {
      cardValue = 10;
    }
    if (card.cards[0].value === "JACK") {
      cardValue = 11;
    }
    if (card.cards[0].value === "QUEEN") {
      cardValue = 12;
    }
    if (card.cards[0].value === "KING") {
      cardValue = 12;
    }
    if (card.cards[0].value === "ACE") {
      cardValue = 12;
    }
    console.log("converted value", cardValue);
    return cardValue;
  }
});






