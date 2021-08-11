
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
    
      if (buttonStart.innerHTML === "Start Game") {
        buttonStart.innerHTML= "Stop Game";
      } else {
        buttonStart.innerHTML= "Start Game";
      }

      if (gameBoard.style.display === "none" || gameBoard.style.display === "") {
        gameBoard.style.display = "block";
      } else {
        gameBoard.style.display = "none";
      }
    
    // gameBoard.style.display="block";
    // buttonStart.innerHTML="Stop Game"
}

//reating Dynamic Table using user input

function createDynamiCells (rowCell,columnCell){
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

// catching the dom element to perform the task on them later

var tableRow = document.getElementsByTagName('tr');
var tableData = document.getElementsByTagName('td');
var playerTurn = document.querySelector('.player-turn');
const slots = document.querySelectorAll('.slot');
const resetBtn = document.querySelector('.reset');

// setting defauly Player and winner 
var currentPlayer = 1;
let winner;
playerTurn.textContent = `${player1}'s turn!`

// main function to change the colour and perform operations 


function changeColor(e){
    //gethering the column index number where the cell is clicked
    let column = e.target.cellIndex;
    let row = []; //Saving the clicked cell

    for (i = tableRow.length-1; i > -1; i--){
        if (tableRow[i].children[column].style.backgroundColor == 'white'){
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1){
                row[0].style.backgroundColor = 'red';
                if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()){
                    playerTurn.textContent = `${player1} WINS!!`;
                    playerTurn.style.color = player1Color;
                    return alert(`${player1} WINS!!`);
                }else if (drawCheck()){
                    playerTurn.textContent = 'DRAW!';
                    return alert('DRAW!');
                }else{
                    playerTurn.textContent = `${player2}'s turn`
                    return currentPlayer = 2;
                }
            }else{
                row[0].style.backgroundColor = 'yellow';
                if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()){
                    playerTurn.textContent = `${player2} WINS!!`;
                    playerTurn.style.color = player2Color;
                    return alert(`${player2} WINS!!`);
                }else if (drawCheck()){
                    playerTurn.textContent = 'DRAW!';
                    return alert('DRAW!');
                }else{
                    playerTurn.textContent = `${player1}'s turn`;
                    return currentPlayer = 1;
                }
                
            }
        }
    }
   
}


Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener('click', changeColor);
    // Set all slots to white for new game.
    cell.style.backgroundColor = 'white';
});


function  toCheckMatchedCellColour(colOne,colTwo,colThree,colFour){
    return (colOne=== colTwo && colOne === colThree && colOne === colFour && colOne !== 'white' && colOne !== undefined)
}

// function toCheckMatchedCellColour(one, two, three, four){
//     return (one === two && one === three && one === four && one !== 'white' && one !== undefined);
// }


//check for horizontal match

function horizontalCheck(){
    for (let row = 0; row < tableRow.length; row++){
        for (let col =0; col < tableRow[row].childElementCount-3; col++){
           if (toCheckMatchedCellColour(tableRow[row].children[col].style.backgroundColor,tableRow[row].children[col+1].style.backgroundColor, 
                                tableRow[row].children[col+2].style.backgroundColor, tableRow[row].children[col+3].style.backgroundColor)){
               return true;
           }
        }
    }
}

//check for vertical match

function verticalCheck(){
    for (let col = 0; col < +columnCell; col++){
        for (let row = 0; row < +rowCell -3; row++){
            if (toCheckMatchedCellColour(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor,
                                tableRow[row+2].children[col].style.backgroundColor,tableRow[row+3].children[col].style.backgroundColor)){
                return true;
            };
        }   
    }
}

//check for upper diagonal match

function diagonalCheck(){
    for(let col = 0; col < +columnCell-3; col++){
        for (let row = 0; row <  +rowCell -3; row++){
            if (toCheckMatchedCellColour(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col+1].style.backgroundColor,
                tableRow[row+2].children[col+2].style.backgroundColor,tableRow[row+3].children[col+3].style.backgroundColor)){
                    return true;
                }
            }
        }

}
// check for lower Diagonal match
function diagonalCheck2(){
    for(let col = 0; col < +columnCell-3; col++){
        for (let row = +rowCell-1; row > 2; row--){
            if (toCheckMatchedCellColour(tableRow[row].children[col].style.backgroundColor, tableRow[row-1].children[col+1].style.backgroundColor,
                tableRow[row-2].children[col+2].style.backgroundColor,tableRow[row-3].children[col+3].style.backgroundColor)){
                    return true;
            }
        }
    }
}

// check for draw 

function drawCheck(){
    let fullSlot = []
    for (i=0; i < tableData.length; i++){
        if (tableData[i].style.backgroundColor !== 'white'){
            fullSlot.push(tableData[i]);
        }
    }
    if (fullSlot.length === tableData.length){
        return true;
    }
}

// resetiing game

resetBtn.addEventListener('click', () => {
    slots.forEach(slot => {
        slot.style.backgroundColor = 'white';
    });
    playerTurn.style.color = 'black';
    return (currentPlayer === 1 ? playerTurn.textContent = `${player1}'s turn` : playerTurn.textContent = `${player2}'s turn`);
});
