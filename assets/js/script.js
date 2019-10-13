$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var firstImage = null;
var secondImage = null;
var matches= null;
var max_matches = 2;

function initializeApp(){
  // $('.lfz-card').on('click', handleCardClick) ; //$('.card').flip()
  $('.card').on('click', handleCardClick);

}

function handleCardClick(event){
  $(event.target).addClass('hidden');
  //$(this).addClass('hidden');

  if (firstCardClicked === null){
    firstCardClicked = $(event.currentTarget);
    firstImage = $(firstCardClicked).find('.instructor-image').css('background-image')
    console.log(firstImage);


  } else {
    secondCardClicked = $(event.currentTarget);
    secondImage = $(secondCardClicked).find('.instructor-image').css('background-image')
    console.log(secondImage);


    if (firstImage !== secondImage){
      setTimeout(cardFlipOver, 300);

    } else if (firstImage === secondImage) {
      console.log('cards match');
      matches++;
    }
}

// function cardFlipOver() {
//   firstCardClicked.find('.lfz-card').removeClass('hidden');
//   secondCardClicked.find('.lfz-card').removeClass('hidden');

// }
}

/* if (matches === max_mathces){
  $('div').addClass('modal-content');
} */
