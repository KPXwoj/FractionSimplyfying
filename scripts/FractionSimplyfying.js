var numeratorInput = document.getElementById( 'numerator' ),
    denominatorInput = document.getElementById( 'denominator' ),
    scoreNumerator = document.getElementById( 'score-numerator'),
    scoreDenominator = document.getElementById( 'score-denominator' );

window.onload = function() {
    refreshScore();
}

numeratorInput.addEventListener( 'input', function(e) {
    refreshScore();
});

denominatorInput.addEventListener( 'input', function(e) {
    refreshScore();
});

function refreshScore() {
    // console.log( 'num: ' + numeratorInput.value );
    // console.log( 'den: ' + denominatorInput.value );
    var score = fractionSimplyfying( numeratorInput.value, denominatorInput.value );
    if ( score === undefined ) {
        // console.log( altScore );
    } else {
        scoreNumerator.innerHTML = score[0];
        scoreDenominator.innerHTML = score[1];
    }
}

function fractionSimplyfying( numerator, denominator ) {
    var counter = 0;
        loop: for ( var i = 0; i == counter; null) {
            console.log( 'num: ' + numerator + ' den: ' + denominator + ' counter: ' + counter );
            if ( isDivisibleBySeven( numerator, denominator ) ) {
                numerator = numerator / 7;
                denominator = denominator / 7;
                continue loop;
            } else if ( isDivisibleByFive( numerator, denominator) ) {
                numerator = numerator / 5;
                denominator = denominator / 5;
                continue loop;
            } else if ( isDivisibleByThree( numerator, denominator ) ) {
                numerator = numerator / 3;
                denominator = denominator / 3;
                continue loop;
            } else if ( isDivisibleByTwo( numerator, denominator ) ) {
                numerator = numerator / 2;
                denominator = denominator / 2;
                continue loop;
            } else {
                counter = 1;
                console.log( 'num: ' + numerator + ' den: ' + denominator + ' counter: ' + counter );
                console.log( ' - - - - - - - - - - - - - - - - - final loop end' );
                return new Array(numerator, denominator);
                break loop;
            }
        }

    //
    // Helper functions
    //
    // checking divising number by 2
    function isDivisibleByTwo(n, d) {
        if ( (n % 2) === 0 && (d % 2) === 0 ) {
            return true;
        } else { return false; }
    }

    // checking divising number by 3
    function isDivisibleByThree(n, d) {
        if ( (n % 3) === 0 && (d % 3) ===0 ) {
            return true
        } else { return false; }
    }

    // checking divising number by 5
    function isDivisibleByFive(n, d) {
        if ( (n % 5) === 0 && (d % 5) === 0 ) {
            return true;
        } else { return false; }
    }

    // checking divising number by 7
    function isDivisibleBySeven(n, d) {
        if ( (n % 7) === 0 && (d % 7) === 0 ) {
            return true;
        } else { return false; }
    }
}