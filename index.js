document.querySelector("body > .btn") .addEventListener('click', () => {
    let roll1 = Math.floor(Math.random() * 6) + 1;
    let roll2 = Math.floor(Math.random() * 6) + 1;
    let newDice1 = "./images/dice" + roll1 + ".png";
    let newDice2 = "./images/dice" + roll2 + ".png";
    document.querySelector(".dice-1").src = newDice1;
    document.querySelector(".dice-2").src = newDice2;
    if(roll1 > roll2) {
        document.querySelector("h1").textContent = "Player 1 Wins!  🚩"
    }
    else if (roll2 > roll1) {
        document.querySelector("h1").textContent = "Player 2 Wins!  🚩"
    }
    else { // if they are equal
        document.querySelector("h1").textContent = "Ties do nothing. Roll again."
    }
})