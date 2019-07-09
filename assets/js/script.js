$(document).ready(initializeApp);


function initializeApp(){
  // $('.card').addClass(".cardback");
  $('.lfz-card').on('click', handleCardClick) ; //$('.card').flip()


}

function handleCardClick(event){
  ($(event.currentTarget)).addClass('hidden');


}
