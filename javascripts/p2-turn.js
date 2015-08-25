
define(function(require) {
  var $ = require("jquery");
  var p2Deal = require("p2-deal");
  var p2Draw = require("p2-draw");
  var scoring = require("scoring");
  var p2Card;
  var p2Id;

  $("#p2deal").click(function(e) {
    e.preventDefault();
    // console.log("p2 clicked");
    var player2Deal = p2Deal();
    player2Deal.then(function(deal) {
      console.log(deal);
      p2Id = deal.deck_id;
      console.log(p2Id);
      $("#p2deal").css("display", "none");
      $("#p2draw").css("display", "block");
      $("#p1draw").css("display", "block");
    });
  });

  $("#p2draw").click(function(e) {
    e.preventDefault();
    console.log("draw 2 clicked");
    var player2Draw = p2Draw(p2Id);
    player2Draw.then(function(card) {
      console.log(card);
      p2Card = card.cards[0].image;
      $("#p2Card").html("<img src='" + p2Card + "'>");
      scoring.p2Value(card);
    });
  });
});