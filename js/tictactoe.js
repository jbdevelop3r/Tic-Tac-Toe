// https://www.youtube.com/watch?v=AzvpHNkjqsg&t=848s&ab_channel=KennyYipCoding

var board = document.getElementById("board");;
var playerO = "O";
var playerX = "X";
var currPlayer = playerO;
var gameOver = false;
let changeP = document.getElementById("changePlayer");
let restartG = document.getElementById("restartGame");
let homeP = document.getElementById("homePage");
const playwho = document.querySelector("#playerTurn");
const playGame = document.querySelector("#playGame");
const gameOversound = new Audio("audio/click.wav");



window.onload = function() {
    setGame();
}


board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
] 


function setGame() {
 
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            var tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if (r == 0 || r == 1) {
                tile.classList.add("horizontal-line");
            }
            if (c == 0 || c == 1) {
                tile.classList.add("vertical-line");
            } 

            // board.classList.add("hide")
            tile.innerText = "";
            tile.addEventListener("click", setTile);
            document.getElementById("board").appendChild(tile);
            playwho.textContent = `Player ${currPlayer}'s turn`; 
            
        }
    }
}

// function tileClick(event) {
//     if(gameOver.classlist.contains('visible')) {
//         return;
//     }
// }

// tile.forEach(tile=>tile.addEventListener('click, tileClick'));


function setTile() {
   

    let coords = this.id.split("-");    //ex) "1-2" -> ["1", "2'"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    

    if (board[r][c] != ' ') { 
        //pag na click na di na pwede iclick
        return;
    }
    
    board[r][c] = currPlayer; //mark the board
    this.innerText = currPlayer; //mark the board on html

    //change players
    if (currPlayer == playerO) {
        currPlayer = playerX;
        playwho.textContent = `Player ${currPlayer}'s turn`;
        gameOversound.play();
    }
    else {
        currPlayer = playerO;
        playwho.textContent = `Player ${currPlayer}'s turn`;
        gameOversound.play();
    }

    if (gameOver) {
        return;
    }

    //check winner
    checkWinner();
}


function checkWinner() {
    //horizontally, check 3 rows
    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' ') {
            //if we found the winning row
            //apply the winner style to that row
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(r.toString() + "-" + i.toString());
                tile.classList.add("winner");
                playwho.textContent = `Player ${currPlayer} won the game!`;
                restartG.addEventListener('click', restartGame);
            }
            gameOver = true;
            return;
            
        }
    }

    //vertically, check 3 columns
    for (let c = 0; c < 3; c++) {
        if (board[0][c] == board[1][c] && board[1][c] ==  board[2][c] && board[0][c] != ' ') {
            //if we found the winning col
            //apply the winner style to that col
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(i.toString() + "-" + c.toString());                
                tile.classList.add("winner");
            
                restartG.addEventListener('click', restartGame);
            }
            gameOver = true;
            return;
        }
    }

    //diagonally
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        for (let i = 0; i < 3; i++) {
            let tile = document.getElementById(i.toString() + "-" + i.toString());                
            tile.classList.add("winner");
            
            restartG.addEventListener('click', restartGame);
        }
        gameOver = true;
        return;
    }

    //anti-diagonally
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
        //0-2
        let tile = document.getElementById("0-2");                
        tile.classList.add("winner");

        //1-1
        tile = document.getElementById("1-1");                
        tile.classList.add("winner");

        //2-0
        tile = document.getElementById("2-0");                
        tile.classList.add("winner");
        gameOver = true;
    
        return;
    }
}



function startPlaying(){

 
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                tile.addEventListener("click", setTile);
            
                playwho.textContent = `Player ${currPlayer}'s turn`;
                
            
        }
    }
}

playGame.addEventListener('click', startPlaying);


document.getElementById('changePlayer').onclick = function(){
    if (currPlayer == playerO) {
        currPlayer = playerX;    
    } 
    else {
        currPlayer = playerO;
        
    }
    playwho.textContent = `Player ${currPlayer}'s turn`;
    return;

}

function restartGame(){
    setTimeout(() => {
        location.reload();
    }, 1000);

}

restartG.addEventListener('click', restartGame);


// function noWinner(){
//     if(gameOver = true) {
//         alert('hahah')
//     }
// }

// noWinner();

console.log(board)