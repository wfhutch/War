
define(function(require) {
  var $ = require("jquery");
  var deal = require("deal");
  var draw = require("draw");
  var scoring = require("scoring");
  var convert = require("convert-to-num");
  var p2Card;
  var p2Id;

  $("#p2deal").click(function(e) {
    e.preventDefault();
    var player2Deal = deal();
    player2Deal.then(function(deal) {
      p2Id = deal.deck_id;
      console.log(p2Id);
      $("#p2deal").css("display", "none");
      $("#p2draw").css("display", "block");
      $("#p1draw").css("display", "block");
    });
  });

  $("#p2draw").click(function(e) {
    e.preventDefault();
    var player2Draw = draw(p2Id);
    player2Draw.then(function(card) {
      p2Card = card.cards[0].image;
      $("#p2Card").html("<img src='" + p2Card + "'>");
      p2CardNum = convert(card.cards[0].value);
      console.log("p2 converted", p2CardNum);
      console.log("p2 remaining", card.remaining);
      if (card.remaining === 0) {
        scoring.winner();
      }
      scoring.p2Value(p2CardNum);
      $("#p2draw").prop("disabled", true);
      $("#p1draw").prop("disabled", false);
    });
  });
});