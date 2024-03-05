const container = document.querySelector('#container');
let numOfBoxes = 16;

let boxWidth = 100/numOfBoxes;

function makeGrid(numOfBoxes, boxWidth) {

    for (let i = 0; i < numOfBoxes * numOfBoxes; i++) {

        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.style.width = `${boxWidth}%`;
        newDiv.style.height = `${boxWidth}%`;
        container.appendChild(newDiv);

        console.log(newDiv.style.width)



        // newDiv.addEventListener('mouseover', (e) => {
        //     e.target.style.background = 'black'
        // })
    }

}

makeGrid(numOfBoxes, boxWidth)
