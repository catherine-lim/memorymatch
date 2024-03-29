$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var firstImage = null;
var secondImage = null;
var matches= null;
var max_matches = 2;
var games_played = 1;
var attempts = 0;

function initializeApp(){
  $('.card').on('click', handleCardClick);
}

function handleCardClick(event) {
  if (firstCardClicked === null) {
      firstCardClicked = $(event.currentTarget);
      $(event.currentTarget).find(".lfz-card").addClass("hidden")

  } else if (secondCardClicked === null) {
      secondCardClicked = $(event.currentTarget);
      $(event.currentTarget).find(".lfz-card").addClass("hidden")

      if (firstCardClicked.find(".back").css("background-image") === secondCardClicked.find(".back").css("background-image")) {
          firstCardClicked = null;
          secondCardClicked = null;
          matches++;
          winCondition(matches);
      } else {
          setTimeout(function() {
          firstCardClicked.find(".lfz-card").removeClass("hidden");
          secondCardClicked.find(".lfz-card").removeClass("hidden");
          firstCardClicked = null;
          secondCardClicked = null;
          }, 1000)  
      }
      attempts++
      displayStats();
  }
}

function winCondition(matches) {
  if (matches === max_matches) {
      $("#theModal").removeClass("hidden");
      $(".restart").on("click", resetStats)
  }
}

function calculateAccuracy(){
  var accuracy = Math.floor(matches/attempts*100);
  if (isNaN(accuracy)) {
    accuracy = 0
  }
  return accuracy + "%" ;
}

function displayStats(){
  $(".accuracy").text(calculateAccuracy());
  $(".games-played").text(games_played);
  $(".attempts").text(attempts);
}

function resetStats(){
  matches = null;
  attempts = 0;
  games_played++;
  displayStats();
  $(".lfz-card").removeClass("hidden");
  $('#theModal').addClass("hidden");
} 