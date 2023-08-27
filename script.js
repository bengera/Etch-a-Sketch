function makeGrid() {
    const masterContainer = document.getElementById('master');
    const container = document.createElement('div');
    container.className = "container";
    masterContainer.appendChild(container);
      

    for (let i = 0; i < 257; i++) {
        const gridEl = document.createElement('div');
        gridEl.className = 'grid-el';
        container.appendChild(gridEl);
    }

    const controlContainer = document.createElement('div');
    controlContainer.className = "controls";
    container.appendChild(controlContainer);

    
}

makeGrid();

const gridElements = document.querySelectorAll('.grid-el');
const active = true;
const randomButton = document.getElementById('random');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const redButton = document.getElementById('red');
const eraseButton = document.getElementById('erase');


function startColoringEffect() {
    if (active) {
        gridElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                let x = Math.floor(Math.random() * 256);
                let y = Math.floor(Math.random() * 256);
                let z = Math.floor(Math.random() * 256);
                let bgColor = "rgb(" + x + "," + y + "," + z + ")";
                console.log(bgColor);
                element.style.backgroundColor = bgColor;
            });
        });
    }
}

function colorYellow() {
    if (active) {
        gridElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                element.style.backgroundColor = 'yellow';
            });
        });
    }
}

function colorGreen() {
    if (active) {
        gridElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                element.style.backgroundColor = 'green';
            });
        });
    }
}

function colorBlue() {
    if (active) {
        gridElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                element.style.backgroundColor = 'blue';
            });
        });
    }
}

function colorRed() {
    if (active) {
        gridElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                element.style.backgroundColor = 'red';
            });
        });
    }
}

function eraseGrid() {
    if (active) {
        gridElements.forEach((element) => {
              element.style.backgroundColor = 'white';
        });
    }
}


randomButton.addEventListener('click', startColoringEffect);
yellowButton.addEventListener('click', colorYellow);
greenButton.addEventListener('click', colorGreen);
blueButton.addEventListener('click', colorBlue);
redButton.addEventListener('click', colorRed);
eraseButton.addEventListener('click', eraseGrid);

// const colorButtons = document.querySelectorAll('.color-button');
// let selectedColor = 'black';

// colorButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         selectedColor = event.target.getAttribute('data-color');
//     });
// });

// window.addEventListener('mousedown', () => {
//     if (active) {
//         gridElements.forEach((element) => {
//             element.addEventListener('mouseenter', () => {
//                 element.style.backgroundColor = selectedColor;
//             });
//         });
//     }
// });

// const colors = ['red', 'green', 'blue', 'purple', 'orange'];

// window.addEventListener('mousedown', () => {
//     if (active) {
//         gridElements.forEach((element) => {
//             element.addEventListener('mouseenter', () => {
//                 let randomColor = colors[Math.floor(Math.random() * colors.length)];
//                 element.style.backgroundColor = randomColor;
//             });
//         });
//     }
// });



//

// const testBox = document.getElementById('test-box');

// testBox.addEventListener('mouseenter', ()=> {
//     testBox.style.backgroundColor = 'blue';

// })
