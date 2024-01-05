var board = [];
var rows = 8;
var columns = 8;

var minescount = 5;
var minesLocation = [];

var cellClick = 0;
var flagBool = false;

var gameOver = false;

window.onload = function () {
    startGame();
}

function setMines(){
    minesLocation.push("2-2");
    minesLocation.push("2-3");
    minesLocation.push("5-6");
    minesLocation.push("5-7");
    minesLocation.push("5-1");

}

function startGame(){
    document.getElementById("mines").innerText = minescount;
    document.getElementById("flag-button").addEventListener("click", setFlag);
    setMines()
    for(let i = 0; i < rows; i++){
        let row = [];
        for(let j = 0; j < columns; j++){
            let cell = document.createElement("div");
            cell.className = "cell clicked";
            cell.id = i.toString() + "-" + j.toString();
            cell.addEventListener("click", clickCell)
            document.getElementById("container").append(cell);
            row.push(cell);
        }
        board.push(row);
    }
}

function setFlag(){
    if(flagBool){
        flagBool = false;
        
    } else {
        flagBool = true;
        
    }
}

function clickCell() {
    if (flagBool) {
        if (!this.classList.contains("flag")) {
            // Aggiungere la classe "flag" alla cella
            this.classList.add("flag");
        } else {
            // Rimuovere la classe "flag" dalla cella
            this.classList.remove("flag");
        }
        return;
    }

    if(minesLocation.includes(this.id)){
        this.classList.add("mine");
        alert("Hai perso")
        gameOver = true;
        revealMines()
    }
}

function revealMines(){
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            let img = document.createElement("img");
            img.src = "resources/bomb.png";
            img.width = 47;
            img.height = 47;
            if(minesLocation.includes(i.toString() + "-" + j.toString())){
                board[i][j].append(img);
                board[i][j].style.backgroundColor = "red";
            }
        }
    }
}