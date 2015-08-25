
define(function(require) {
  var $ = require("jquery");
  var p1Deal = require("p1-deal");
  var p1Draw = require("p1-draw");
  var scoring = require("scoring");
  var p1Card;
  var p1Id;

  $("#p1deal").click(function(e) {
    e.preventDefault();
    // console.log("p1 clicked");
    var player1Deal = p1Deal();
    player1Deal.then(function(deal) {
      // console.log(deal);
      p1Id = deal.deck_id;
      // console.log(p1Id);
      $("#p1deal").css("display", "none");
      $("#p1draw").css("display", "block");
    });
  });

  $("#p1draw").click(function(e) {
    e.preventDefault();
    // console.log("draw 1 clicked");
    var player1Draw = p1Draw(p1Id);
    player1Draw.then(function(card) {
      // console.log(card);
      p1Card = card.cards[0].image;
      $("#p1Card").html("<img src='" + p1Card + "'>");
      scoring.p1Value(card);
    });
  });
});