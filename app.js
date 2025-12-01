let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;//playerO
let count = 0;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
        } else {
            //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWiner();
    });


});


const showWinner = (winner) => {
    msg.innerText = `Congratulations,Winer ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const showDraw = () => {
    msg.innerText = `It's a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const checkWiner = () => {
    let winner = false;
    for (let patterns of winPattern) {
        let position1 = boxes[patterns[0]].innerText;
        let position2 = boxes[patterns[1]].innerText;
        let position3 = boxes[patterns[2]].innerText;
        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);
                disableBoxes();
                winner = true;
            }
        }

    };
    if (count === 9 && winner === false) {
        showDraw();
    }
};

const restGame = () => {
    turnO = true;
    enableBoxes();
    count=0;
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", restGame);
resetBtn.addEventListener("click", restGame);
