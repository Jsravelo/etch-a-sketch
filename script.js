const container = document.querySelector('#container');
let numOfBoxes = 16;



let boxWidth = 1/numOfBoxes;

let gridSize = boxWidth * numOfBoxes;





function makeGrid(numOfBoxes, boxWidth) {

    let gridSize = boxWidth * numOfBoxes * 100;

    container.style.height = `${gridSize}vw`;
    container.style.width = `${gridSize}vw`;

    for (let i = 0; i < numOfBoxes * numOfBoxes; i++) {

        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.style.width = `${boxWidth * 100}%`;
        newDiv.style.height = `${boxWidth * 100}%`;
        container.appendChild(newDiv);

    }
}

makeGrid(numOfBoxes, boxWidth)
