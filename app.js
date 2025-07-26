let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#rest-btn");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  boxes.forEach(box => box.disabled = true);
};

const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
  msgContainer.classList.add("show");
  disableBoxes();
};

const checkWin = () => {
  for (let pattern of winPatterns) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      showWinner(val1);
      return;
    }
  }
};

boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return;

    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWin();
  });
});

const resetGame = () => {
  boxes.forEach(box => {
    box.innerText = "";
    box.disabled = false;
  });
  msgContainer.classList.remove("show");
  turn0 = true;
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
