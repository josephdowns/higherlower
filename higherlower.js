//let num = Math.floor(Math.random() * 20) + 1;
const userNumber = document.querySelector("#userNum")
const maxNum = document.querySelector("#maxNum")
const warningMax = document.querySelector(".warningMax")
const warningGuess = document.querySelector(".warningGuess")
const warningRange = document.querySelector(".warningRange")
const warningDuplicate = document.querySelector(".warningDuplicate")
// console.log(warningDuplicate.innerText)
const userGuesses = []


function getNum() {
    if (userNumber.value % 1 === 0 && userNumber.value > 0) {
        warningMax.classList.add("hidden")
        num = Number(Math.floor(Math.random() * userNumber.value) + 1);
        console.log(userNumber.value);
        maxNum.innerText = userNumber.value;
        return num;
    }
    else {
        warningMax.classList.remove("hidden")
    }
}

function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");
    if (guess >= 1 && guess <= userNumber.value) {
        warningRange.classList.add("hidden")
        if (userGuesses.indexOf(guess) == -1 ) {
            warningDuplicate.classList.add("hidden")
            if (guess % 1 == 0) {
                warningGuess.classList.add("hidden")
                if(guess == num) {
                    userGuesses.push(guess)
                    message.innerHTML = `Correct! You guessed the number in ${userGuesses.length} tries! You guessed ${userGuesses.join(", ")}.`;
                }
                else if (guess > num) {
                    message.innerHTML = "Lower.";
                    userGuesses.push(guess)
                    console.log(userGuesses)
                }
                else {
                    message.innerHTML = "Higher.";
                    userGuesses.push(guess)
                    console.log(userGuesses)
                }
            }
            else {
                warningGuess.classList.remove("hidden")
            }
        } 
        else {
            warningDuplicate.classList.remove("hidden")
        }
    }
    else {
        warningRange.classList.remove("hidden")
    }
}