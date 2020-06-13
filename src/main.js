// *** Create empty Array
// let quizArray = [];
let quizArray = [
    'one',
    'two',
    'three',
    'four'
]

// const quizObj = {
//     "obj1": "one",
//     "obj2": "two",
//     "obj3": "three",
//     "obj4": "four"
// }

const list = document.getElementById( 'list' );
const input = document.getElementById( 'input' );
const submit = document.getElementById( 'submit' );

// Add to quizArray
function addToListArray ( textString ) {
    quizArray.push( textString );
}

// Remove from quizArray
function removeFromListArray ( index ) {
    quizArray.splice( index );
}

// Edit quiz array
function editFromListArray ( index, textString ) {
    quizArray[ index ] = textString;
}


// Create <li> containing a String
function createListElement ( textString ) {
    let listItem = document.createElement( 'li' );
    listItem.appendChild( document.createTextNode( textString ) );
    list.appendChild( listItem );
    addToListArray( textString );
}

// Render from quiz array on call
// + Needs to check to see if items are already in list and not print those
function renderList () {
    for ( i = 0; i < quizArray.length; i++ ) { // Print each item in the list
        createListElement( quizArray[i] );
    }
}

// Remove default input action
input.addEventListener( 'keydown', ( event ) => {
    if( event.keyCode === 13 ) {
        event.preventDefault();
        console.log( 'Enter Default prevented' );
    }
})

// Remove default submit button action
submit.addEventListener( 'click', ( event ) => {
    event.preventDefault();
    console.log( 'Submit Default prevented' );
})

// Render the existing list on load
//  - This can add the list to the list if called more than once
// renderList(); // this breaks the site because of addToListArray( textString ) in createListElement