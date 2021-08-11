function showgameBoard(){
    const gameBoard= document.querySelector(".container-holder");
    const buttonStart = document.querySelector(".start-game")
    gameBoard.style.display="block";
    buttonStart.innerHTML="Stop Game"
    console.log("showing")
}