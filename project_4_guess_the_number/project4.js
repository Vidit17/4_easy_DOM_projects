let random_number = parseInt(Math.random()*10)+1;

let user_input = document.querySelector("#guessfield");
let submit = document.querySelector("#submitbutton");
let prev_guess_span = document.querySelector(".prev-guess");
let guess_remaining = document.querySelector(".guess-rema");
let result = document.querySelector(".p-result");
let newGame_tag = document.querySelector(".new-game")

let prevguess = [];
let total_guess = 1;

let game = true;

if (game) {
    submit.addEventListener("click",function(e){
        e.preventDefault()
        let guess = parseInt(user_input.value);
        validateguess(guess)
    })
}

function validateguess(guess){
    if (guess==""||guess>100||guess<1||isNaN(guess)) {
        alert("Please enter valid number")
         user_input.value = ""
    }
    else{
        prevguess.push(guess)
        if (total_guess===10&&guess!=random_number) {
            result.innerHTML = `Game Over number was ${random_number}`
            cleaner_updation()
            endgame()
        } else{
            cleaner_updation()
            check_guess(guess)
        }
    }
}

function cleaner_updation(){
    user_input.value = ""
    prev_guess_span.innerHTML = prevguess
    total_guess++
    guess_remaining.innerHTML = `${11-total_guess}`
}

function check_guess(guess){
    if (guess==random_number) {
        result.innerHTML = `You won number was ${random_number}`;
        endgame()
    } else if (guess>random_number) {
        result.innerHTML = `your guess is too big`
    } else {
        result.innerHTML = `Your guess is too small`
    }
}

function endgame(){
    user_input.value = ""
    user_input.setAttribute("disabled","") // aage user input na de paaye
    newGame_tag.innerHTML = "Start new Game"
    game = false;
    newGame_tag.addEventListener("click",function(e){
        e.preventDefault()
        newGame()
    })
}


function newGame(){
    random_number = parseInt(Math.random()*10)+1
    prevguess = []
    total_guess = 1
    prev_guess_span.innerHTML = prevguess
    guess_remaining.innerHTML = 10
    user_input.removeAttribute("disabled")
    result.innerHTML = ""
    newGame_tag.innerHTML = ""
    game = true;
}