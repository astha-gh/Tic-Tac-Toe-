let btn = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let new_btn = document.querySelector(".new_btn");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turnX = true;
let win_pattern = [[0,1,2] , [0,3,6] , [0,4,8] , [1,4,7] , [2,5,8] , [2,4,6] , [3,4,5] , [6,7,8]];

const enable_btn = () => {
    for(box of btn){
        box.disabled = false;
        box.innerText = "";
    }
}

const reset_game = () => {
    turnX = true;
    enable_btn();
    msg_container.classList.add("hide");
}

const disable_btn = () => {
    for(box of btn){
        box.disabled = true;
    }
}

const show_winner = (winner) => {
    msg.innerText = `Winner ${winner}`;
    msg_container.classList.remove("hide");
    disable_btn();
}

let check_win = () => {
    for(let pattern of win_pattern){
        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("WINNER" , pos1);
                show_winner(pos1);
            }
        }
    }
}

btn.forEach((box) => {
    box.addEventListener("click" , ()=> {
        console.log("box was clicked");
        if(turnX === true){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = "true";

        check_win();
    })
})

new_btn.addEventListener("click" , reset_game);
reset_btn.addEventListener("click" , reset_game);