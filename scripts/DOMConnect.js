var numeratorInput = document.getElementById( 'numerator' ),
    denominatorInput = document.getElementById( 'denominator' ),
    calcButton = document.getElementById( 'calcButton' ),
    scoreElem = document.getElementById( 'score' );

var score = fractionSimplyfying( numeratorInput.value, denominatorInput.value );

calcButton.addEventListener( 'click', function(e) {
    scoreElem.value = score[0] + "/" + score[1];
});