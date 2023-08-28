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

    const leftNob = document.createElement('div');
    leftNob.className = "left-nob";
    controlContainer.appendChild(leftNob);

    const rightNob = document.createElement('div');
    rightNob.className = "right-nob";
    controlContainer.appendChild(rightNob);
    
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

function colorGrid(color) {
    if (active) {
        gridElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                element.style.backgroundColor = color;
                
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


yellowButton.addEventListener('click', () => {colorGrid('yellow')});
greenButton.addEventListener('click', () => colorGrid('green'));
blueButton.addEventListener('click', () => colorGrid('blue'));
redButton.addEventListener('click', () => colorGrid('red'));
eraseButton.addEventListener('click', eraseGrid);
randomButton.addEventListener('click', startColoringEffect);
