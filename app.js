let btn = document.querySelectorAll(".box");

let nwgme_btn = document.querySelector("#nwgme_btn");
let msg_cont = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turno = true;

let winningpattrn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let newgame = () => {
  let turno = true;
  enablebtn();
  msg_cont.classList.add("hide");
};

btn.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "o";
      turno = false;
    } else {
      box.innerText = "x";
      turno = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

let disabledbtn = () => {
  for (let box of btn) {
    box.disabled = true;
  }
};

let enablebtn = () => {
  for (let box of btn) {
    box.disabled = false;
    box.innerText = "";
  }
};

let showwinner = (winner) => {
  msg.innerText = `congratulations, winner is ${winner} `;
  msg_cont.classList.remove("hide");
  disabledbtn();
};

let checkwinner = () => {
  for (let pattern of winningpattrn) {
    let pos1val = btn[pattern[0]].innerText;
    let pos2val = btn[pattern[1]].innerText;
    let pos3val = btn[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val == pos3val) {
        showwinner(pos1val);
      }
    }
  }
};

nwgme_btn.addEventListener("click", newgame);

// console.log(pattern[0],pattern[1],pattern[2]);
// console.log(
//     btn[pattern[0]].innerText,
//     btn[pattern[1]].innerText,
//     btn[pattern[2]].innerText,

// );
