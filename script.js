let tiles=document.querySelectorAll(".tile");
let resetButton = document.querySelector("button");
let currentTurn = "red";


let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
for (let i=0; i<tiles.length; i++){
    tiles[i].addEventListener("click", setTile)
}
resetButton.addEventListener("click", resetGame)
function setTile(e){
    let classes = e.target.classList;
    let tileAlreadySelected = classes.contains("red") || classes.contains("blue");
    if(tileAlreadySelected) {
        console.log("Pick another tile please")
    } else {
        classes.add(currentTurn);
        checkForWinner()
        changeTurn()
    }
}
function changeTurn(){
    if(currentTurn =="red"){
        currentTurn = "blue"
    } else{
        currentTurn = "red";
    }

}
function resetGame(){
    for(let i=0; i<tiles.length; i++){
        tiles[i].classList.remove("red");
        tiles[i].classList.remove("blue")
    }
    
}
function checkForWinner(){
  
    for(let i=0; i<winningCombos.length; i++){
        let combination = winningCombos[i];
        foundWinner = true;

        for(let j=0; j<combination.length; j++){
            let tileIndex = combination[j];
            let hasTile = tiles[tileIndex].classList.contains(currentTurn);
            if(hasTile!==true){
                foundWinner = false
            }
        }
        
        if(foundWinner==true){
            console.log(`Player ${currentTurn} wins!`);
        
        }
    }
}