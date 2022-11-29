'use strict';



// document.querySelector('.text').value;
// console.log(document.querySelector('.text').value = 12);

let secretNumber = Math.trunc(Math.random() * 30) + 1;

let score = 29;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.output h1').textContent = message;
}



document.querySelector('.check').addEventListener('click', function () {
    const text = Number(document.querySelector('.text').value);


    if (!text) {
        // document.querySelector('.output h1').textContent = '⛔ no number';
        displayMessage('⛔ no number');
        document.querySelector('.output h1').style.color = '#fff ';

    }
    else if (text === secretNumber) {
        // document.querySelector('.output h1').textContent = '🎉 correct number';
        displayMessage('🎉 correct number');

        document.querySelector('body').style.backgroundColor = '#60b343'
        document.querySelector('.output h1').style.color = '#7a044c';
        document.querySelector('.output h2').style.color = '#7a044c';
        document.querySelector('.output h3').style.color = '#8a1212';
        document.querySelector('.store p').textContent = secretNumber;
        document.querySelector('.store p').style.width = '30%';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.h-score').textContent = highscore;

        }
    } else if (text !== secretNumber) {
        if (score > 1) {
            score--;
            // document.querySelector('.output h1').textContent = '🤔T00 High | think again';
            // document.querySelector('.output h1').textContent = text > secretNumber ? '🤔T00 High | think again' : '🤔T00 Low | think again';
            displayMessage(text > secretNumber ? '🤔T00 High | think again' : '🤔T00 Low | think again');
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.output h1').textContent = '😭 You loss the game';
            displayMessage('😭 You loss the game');
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if (text > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.output h1').textContent = '🤔T00 High | think again';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.output h1').textContent = '😭 You loss the game';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
    // else if (text < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.output h1').textContent = '🤔T00 Low | think again';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.output h1').textContent = '😭 You loss the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

// again button

document.querySelector('.play').addEventListener('click', function () {
    score = 30;
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    displayMessage('start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.text').value = '';
    document.querySelector('.store p').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#ad0d6b';
});


