var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerO;
var gameOver = false;

const changeP = document.getElementById("changePlayer");
const restartG = document.getElementById("restartGame");
const homeP = document.getElementById("homePage");
const playwho = document.querySelector("#playerTurn");
const playGame = document.querySelector("#playGame");
const previous = document.getElementById("previous");
const next = document.getElementById("nextMove");
const gameEnd = document.getElementById("gameover");
const noWinner = document.getElementById("noWinner");
const soundtrip = document.getElementById("soundtrack");

const gameOversound = new Audio("audio/click.wav");

const winnerSound = new Audio("audio/winner2.mp3");

const clickError = new Audio("audio/draw.mp3");

const drawSound = new Audio("audio/noWinner.mp3");

const jovit = new Audio("audio/jovit.mp3");



board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]


let moves = [];

let moves2 = []; 

let movesCounter = -1;

let counterTwo = 0;


window.onload = function() {
    setGame();
}


function setGame() {


    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            tile.addEventListener("click", setTile);
            document.getElementById("board").appendChild(tile);
            playwho.textContent = `Player ${currPlayer}'s turn`;
            if (r == 0 || r == 1) {
                tile.classList.add("horizontal-line");
            }
            if (c == 0 || c == 1) {
                tile.classList.add("vertical-line");
                
            } 
        }
        
    }
}


function setTile() {
    if (gameOver) {
        return;
    }

    movesCounter += 1;
    console.log(movesCounter);

    let coords = this.id.split("-");    //ex) "1-2" -> ["1", "2'"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (board[r][c] != ' ') { 
        //already taken spot
        clickError.play();
        return;
    }

    
    board[r][c] = currPlayer; //pwede iclick 
    this.innerText = currPlayer; //kung kaninong turn, un ang mag occupy

    moves.push(JSON.parse(JSON.stringify(board)));
    console.log(moves)

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

    checkWinner();
}


function checkWinner() {
    //horizontally, check 3 rows
    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' ') {
            
            //pag nameet ang condition, lagyan ng style ung tiles.
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(r.toString() + "-" + i.toString());
                tile.classList.add("winner");
                // playwho.textContent = `Player ${currPlayer}'s turn`;
                previous.classList.remove('prev');
                previous.classList.add('nextBG');
                next.classList.remove('next');
                next.classList.add('nextBG');
                playwho.classList.add('gameOver');
                gameEnd.classList.remove('gameOver');
                gameEnd.classList.add('gameOverShow');
                next.disabled = true;
                next.classList.remove('nextBG');
                winnerSound.play();
               
                
            }
            gameOver = true;
            counterTwo = movesCounter;
            return;
        }
    }

    //vertically, check 3 columns
    for (let c = 0; c < 3; c++) {
        if (board[0][c] == board[1][c] && board[1][c] ==  board[2][c] && board[0][c] != ' ') {
            
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(i.toString() + "-" + c.toString());                
                tile.classList.add("winner");
                previous.classList.remove('prev');
                previous.classList.add('nextBG');
                next.classList.remove('next');
                next.classList.add('nextBG');
                playwho.classList.add('gameOver');
                gameEnd.classList.remove('gameOver');
                gameEnd.classList.add('gameOverShow');
                next.disabled = true;
                next.classList.remove('nextBG');
                winnerSound.play();
                
              
            }
            gameOver = true;
            counterTwo = movesCounter;
            return;
        }
    }

    //diagonal 
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(i.toString() + "-" + i.toString());                
                tile.classList.add("winner");
                previous.classList.remove('prev');
                previous.classList.add('nextBG');
                next.classList.remove('next');
                next.classList.add('nextBG');
                playwho.classList.add('gameOver');
                gameEnd.classList.remove('gameOver');
                gameEnd.classList.add('gameOverShow'); 
                next.disabled = true;
                next.classList.remove('nextBG'); 
                winnerSound.play();      
        }
        gameOver = true;
        counterTwo = movesCounter;
        return;
    }

    //other diagonal 
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
                previous.classList.remove('prev');
                previous.classList.add('nextBG'); 
                next.classList.remove('next');
                next.classList.add('nextBG');
                playwho.classList.add('gameOver');
                gameEnd.classList.remove('gameOver');
                gameEnd.classList.add('gameOverShow');
                next.disabled = true;
                next.classList.remove('nextBG');
                winnerSound.play();
                
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
        counterTwo = movesCounter;
        return;
        
        
    }

    // if all tiles are taken = draw
    if (board[0][0] != ' ' && board[0][1] != ' ' && board[0][2] != ' ' && board[1][0] != ' ' && board[1][1] != ' ' && board[1][2] != ' ' && board[2][0] != ' ' && board[2][1] != ' ' && board[2][2] != ' ') {
        
        // draw.classList.remove('draw')
        // draw.classList.add('drawShow')
        playwho.classList.add('gameOver');
        noWinner.classList.remove('draw');
        noWinner.classList.add('drawShow');  

        previous.classList.remove('prev');
        previous.classList.add('nextBG');
        next.classList.remove('next');
        next.classList.add('nextBG');
        drawSound.play();
        next.disabled = true;
        next.classList.remove('nextBG');
        gameOver = true;
        counterTwo = movesCounter;
        return;
    } 


    if (board[0][0] != ' ' || board[0][1] != ' ' || board[0][2] != ' ' || board[1][0] != ' ' || board[1][1] != ' ' || board[1][2] != ' ' || board[2][0] != ' ' || board[2][1] != ' ' || board[2][2] != ' ') {
        
        changeP.classList.remove('changeP')
        changeP.disabled = true;
        return;
    } 

}


document.getElementById('changePlayer').onclick = function(){
    if (currPlayer == playerO) {
        currPlayer = playerX; 
        gameOversound.play();   
    } 
    else {
        currPlayer = playerO;
        gameOversound.play();
        
    }
    playwho.textContent = `Player ${currPlayer}'s turn`;
    return;

}



function restartGame(){
    setTimeout(() => {
        location.reload();
    });
}

restartG.addEventListener('click', restartGame);



function previousButton(){
    moves2 = moves[movesCounter - 1];
    movesCounter --;
    console.log(moves2);
    for (let r = 0; r <=2 ; r++) {
        for (let c = 0; c<=2; c++){
            let tileOne = document.getElementById(r.toString() + "-" + c.toString());
            tileOne.innerText = moves2[r][c];
            next.disabled = false;
            next.classList.add('nextBG');
            gameOversound.play();
            if (movesCounter === 0) {
                previous.disabled = true;
                previous.classList.remove('nextBG');
            } 
        }
    }
}
previous.addEventListener('click', previousButton);



function nextButton(){
    moves2 = moves[movesCounter + 1];
    movesCounter ++;
    console.log(moves2);
    for (let r = 0; r <=2 ; r++) {
        for (let c = 0; c<=2; c++){
            let tileOne = document.getElementById(r.toString() + "-" + c.toString());
            tileOne.innerText = moves2[r][c];
            previous.disabled = false;
            previous.classList.add('nextBG');
            gameOversound.play();
        }
    }
    if (movesCounter === counterTwo) {
        next.disabled = true;
        next.classList.remove('nextBG');
        console.log(next.disabled);
    }
}
next.addEventListener('click', nextButton);



document.getElementById('soundtrack').onclick = function(){
    jovit.play();
}
