//Create grid with an initial starting size of 32*32


let gridSize = 32;
createGrid(gridSize);


//button "unpressed"


let isPressed = false;

document.addEventListener("keydown", logKeyDown);



//Reset button


const button = document.querySelector("#button");

button.addEventListener("click", () => {
    console.log(gridSize);
    gridSizeNew = prompt("Please enter the number of squares you would like on both sides (maximum 100).");
    removeGrid();
    if (gridSizeNew > 100) {
        gridSize = 100;
    }
    else if (gridSizeNew % 1 !== 0 || gridSizeNew < 1) {
        alert("Please enter a valid whole number between 1 and 100");
    }
    else {
        gridSize = gridSizeNew;
    }
    console.log(gridSize);
    createGrid(gridSize);
});


//Create grid and remove grid functions 


function createGrid(gridSize) {
    const outerContainer = document.querySelector("#outer-container");
    const container = document.createElement('div');
    container.setAttribute("id", "container");
    outerContainer.appendChild(container);
    container.style = "grid-template-columns: repeat("+ gridSize +", 1fr)";
    const informationBox = document.querySelector("#information-box");
    outerContainer.insertBefore(container,informationBox);
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const container = document.querySelector('#container');

        const div = document.createElement('div');
        div.className = 'grid-block';
        container.appendChild(div);
    }
}

function removeGrid() {
    const outerContainer = document.querySelector("#outer-container");
    console.log(outerContainer);
    const container = document.querySelector("#container");
    outerContainer.removeChild(container);
}



    
//Drawing function, including keyup and keydown functions


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









let container = document.querySelector("#container");

