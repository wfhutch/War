
define(function(require) {
  var $ = require("jquery");
  var deal = require("deal");
  var draw = require("draw");
  var scoring = require("scoring");
  var convert = require("convert-to-num");
  var p1Card;
  var p1Id;

  $("#p1deal").click(function(e) {
    e.preventDefault();
    var player1Deal = deal();
    player1Deal.then(function(deal) {
      console.log(deal);
      p1Id = deal.deck_id;
      console.log(p1Id);
      $("#p1deal").css("display", "none");
    });
  });

  $("#p1draw").click(function(e) {
    e.preventDefault();
    var player1Draw = draw(p1Id);
    player1Draw.then(function(card) {
      p1Card = card.cards[0].image;
      $("#p1Card").html("<img src='" + p1Card + "'>");
      p1CardNum = convert(card.cards[0].value);
      console.log("p1 converted", p1CardNum);
      console.log("p1 remaining", card.remaining);
      scoring.p1Value(p1CardNum);
      $("#p1draw").prop("disabled", true);   // disable draw button when 
      $("#p2draw").prop("disabled", false);  // it is not that player's turn
    });
  });
});