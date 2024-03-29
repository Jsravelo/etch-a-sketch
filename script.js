const container = document.querySelector('#container');
const gridSize = document.querySelector('#grid-size')
const enter = document.querySelector('.enter')
const reset = document.querySelector('.reset')



enter.addEventListener('click', () => {

    const numOfBoxes = gridSize.value;
    const boxWidth = 100/numOfBoxes;

    if (gridSize.value > 100) {
    alert("Enter a number below 100");
    gridSize.value = '';
    return
    };

    makeGrid(numOfBoxes, boxWidth);
    
});


function makeGrid(numOfBoxes, boxWidth) {

    container.innerHTML = '';

    for (let i = 0; i < numOfBoxes * numOfBoxes; i++) {

        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.style.width = `${boxWidth}%`;
        newDiv.style.height = `${boxWidth}%`;
        container.appendChild(newDiv);


        newDiv.addEventListener('mouseover', () => {

            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            
            newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        });

    };

};

reset.addEventListener("click", () => {
    const newDiv = document.querySelectorAll(".box");
    newDiv.forEach(box => {
        box.style.backgroundColor = "white";
    });

    container.innerHTML = '';
})
