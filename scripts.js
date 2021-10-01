
let gridSize = 32;
createGrid(gridSize);

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    console.log(gridSize);
    removeGridBlocks();
    gridSize = prompt("Please enter the number of squares you would like on both sides (maximum 100).");
    createGrid(gridSize);
});


//button "unpressed"
let isPressed = false;

document.addEventListener("keydown", logKeyDown);


function createGrid(gridSize) {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const container = document.querySelector('#container');

        const div = document.createElement('div');
        div.className = 'grid-block';
        container.appendChild(div);
    }
}

function removeGridBlocks() {
    const container = document.querySelector("#container");
    const div = document.querySelector(".grid-block");
    for (let i = 0; i < (gridSize * gridSize); i++) {
        container.removeChild(div);
    }
}


//button pressed and code executed
function logKeyDown(e) {
    if (e.keyCode == "32") {
        isPressed = true;
        e.preventDefault();
        const boxes = document.querySelectorAll('.grid-block');

        boxes.forEach((block) => {
            block.addEventListener("mouseenter", () => {
                if (isPressed === true) {
                    block.classList.add("visible");
                }
            });
        });
    }
// if button pressed then "unpress button"
    if (isPressed === true) {
        document.addEventListener("keyup", logKeyUp);
        function logKeyUp(e) {
            if (e.keyCode == "32") {
                isPressed = false;
            }
        }
    }
    
    if (e.keyCode == "82") {
        const boxes = document.querySelectorAll('.grid-block');

        boxes.forEach((block) => {
                block.classList.remove("visible");
        });
    }
}

