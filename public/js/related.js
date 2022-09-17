//Select the buttons 
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//Set counter for setting distance for cards to move on each click
let count = 0;

//Set tracker to keep track of where the controls and cards are in relation to the card container
let tracker = 0;

//Action for Next button
function moveCardsLeft() {
    //'Count' controls the distnace for each card push and can be adjusted by changing the integer subtracted from the variable below.
    //The tracker keeps track of the index while the next and prev buttons are being clicked.
    count = count - 402;
    tracker++;

    //Disables buttons after cards reach a specified distance. Number of clicks can be adjusted by changing the integers in the if statements. ie. changing the '0' to '-1' allows the user to click back one additional time before disabling the 'prev' button.
    if (tracker === 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 5) {
        next.setAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }

    //Pushes cards based on 'count'. 
    const cards = document.querySelectorAll('.card-related');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}

//Action for Prev button
function moveCardsRight() {
    count = count + 402;
    tracker --;
    if (tracker <= 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 5) {
        next.setAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }
    const cards = document.querySelectorAll('.card-related');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}

//Event listeners to slide the cards.
prev.addEventListener('click', () => {
    moveCardsRight();
});

next.addEventListener('click', () => {
    moveCardsLeft();
});