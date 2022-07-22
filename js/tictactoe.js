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
const gameOversound = new Audio("audio/click.wav");


board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]


moves = [];

moves2 = []; 

movesCounter = -1;

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
                previous.classList.add('restartG');
                next.classList.remove('next');
                next.classList.add('nextBG');
                playwho.textContent = `GAME OVER`;
               
                
            }
            gameOver = true;
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
                previous.classList.add('restartG');
                next.classList.remove('next');
                next.classList.add('nextBG');
                playwho.textContent = `GAME OVER`;
            }
            gameOver = true;
            return;
        }
    }

    //diagonal 
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(i.toString() + "-" + i.toString());                
                tile.classList.add("winner");
                previous.classList.remove('prev');
                previous.classList.add('restartG');
                next.classList.remove('next');
                next.classList.add('nextBG');
                playwho.textContent = `GAME OVER`;
        }
        gameOver = true;
        return;
    }

    //other diagonal 
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
                previous.classList.remove('prev');
                previous.classList.add('restartG'); 
                next.classList.remove('next');
                next.classList.add('nextBG');
                playwho.textContent = `GAME OVER`;
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

    // if all tiles are taken = draw
    if (board[0][0] != '' && board[0][1] != ' ' && board[0][2] != ' ' && board[1][0] != ' ' && board[1][1] != ' ' && board[1][2] != ' ' && board[2][0] != ' ' && board[2][1] != ' ' && board[2][2] != ' ') {
        
        draw.classList.remove('draw')
        draw.classList.add('drawShow')
        playwho.textContent = "NO WINNER";
        previous.classList.remove('prev');
        previous.classList.add('restartG');
        next.classList.remove('next');
        next.classList.add('nextBG');
        gameOver = true;
        return;
    } 


    if (board[0][0] != ' ' || board[0][1] != ' ' || board[0][2] != ' ' || board[1][0] != ' ' || board[1][1] != ' ' || board[1][2] != ' ' || board[2][0] != ' ' || board[2][1] != ' ' || board[2][2] != ' ') {
        
        changeP.classList.add('hide');
        changeP.classList.remove('changeP')
        return;
    } 


     // moves.push(JSON.parse(JSON.stringify(board)));


}


// previous.addEventListener('click', function () {
//     if(board[0][0] != null) {
//     board.pop();
//     moves.push(board);
//     console.log(board);
//     console.log(moves)
//     board = [
//         [' ', ' ', ' '],
//         [' ', ' ', ' '],
//         [' ', ' ', ' ']
//     ]
//     }
// });



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
            // console.log(moves2[r][c]);
            if (movesCounter === 0) {
                // previous.classList.add('prev');
                previous.disabled = true;
                previous.classList.remove('restartG');
            } 

            // if (movesCounter >= 5) {
            //     next.classList.add('prev');
            //     // previous.disabled = true;
            // } 

            // if (gameOver === true && movesCounter === 1) {
            //     previous.classList.remove('prev');
            // }
            console.log(movesCounter);
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
            previous.classList.add('restartG');
            // console.log(moves2[r][c]);
        }
    }
}
next.addEventListener('click', nextButton);