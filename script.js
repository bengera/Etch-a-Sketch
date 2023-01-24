function makeGrid() {
    const container = document.createElement('div');
    container.className = "container";
    console.log(container);
    document.body.appendChild(container);

    for (let i = 0; i < 257; i++) {
        const gridEl = document.createElement('div');
        gridEl.className = 'grid-el';
        container.appendChild(gridEl);
    }
}


makeGrid();

const gridElements = document.querySelectorAll('.grid-el');
// console.log(gridElements);
const active = true;

window.addEventListener('mousedown', () => {
    
    if (active === true) {
        gridElements.forEach((element) => {
            element.addEventListener('mousemove', () => {
                console.log('element clicked');
                element.style.backgroundColor = "red";
                
                
            })
        })
    } 

           
    
})





// const testBox = document.getElementById('test-box');

// testBox.addEventListener('mouseenter', ()=> {
//     testBox.style.backgroundColor = 'blue';

// })
