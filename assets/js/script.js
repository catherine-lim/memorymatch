$(document).ready(initializeApp);

var firstCardClicked = $(event.currentTarget);
var secondCardClicked = null;
var matches= null;

function initializeApp(){
  // $('.card').addClass(".cardback");
  $('.lfz-card').on('click', handleCardClick) ; //$('.card').flip()


}

function handleCardClick(event){
  ($(event.currentTarget)).addClass('hidden');


}
