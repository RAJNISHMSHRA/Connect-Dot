
let player1;
let player2;
let columnCell,rowCell,totalCell;

let player1Color = "Red";
let player2Color = "Blue";

while (!player1){
    player1 = prompt('Player One: Enter your name. You will be red.','Player 1');
};

while (!player2){
    player2 = prompt('Player Two: Enter your name. You will be yellow.','Player 2');
};
while (!columnCell){
    columnCell = prompt('Select the number of Column. You will be Red',7);
};
while (!rowCell){
    rowCell = prompt('Select the number of rows. You will be yellow.',6);
};



function showgameBoard(){
    const gameBoard= document.querySelector(".container-holder");
    const buttonStart = document.querySelector(".start-game")
    gameBoard.style.display="block";
    buttonStart.innerHTML="Stop Game"
    console.log("showing")
}

//reating Dynamic Table using user input

function createDynamiCells (rowCell,columnCell){
    debugger;
    const table= document.getElementById("Dot-table");
    const tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    for(let i = 0;i<+rowCell;i++){
        const tableRow= document.createElement("TR");
        tableBody.appendChild(tableRow);
        for(j=0;j<+columnCell;j++){
            const tableData = document.createElement('TD');
            tableData.classList.add("slot");
            tableRow.appendChild(tableData)
        }
    }
}
createDynamiCells(rowCell,columnCell)
//
