
$(document).ready(function () {
    //Get Number add five, then log
    // let number = prompt("Pick a number between 1 & 100")
    // console.log(number)
    // let sum = 5 + parseInt(number);
    // console.log(number + ' plus ' + 5 + ' is ' + sum);

    $("#inputNameButton").click(function getUserName() {
        let userName = $("#inputName").val()
        $("#message").html("Welcome, " + userName + "! In this game, I'm going to pick a number and you are going to try to guess it! <br/>What is the highest number I should be allowed to pick?")
        $("#displayGetUserNameBtn").css("display", "none")
        startGame()
    })

    function startGame() {
        let maxNum
        let answer
        $("#displayGetMaxNumBtn").css("display", "block")
        $("#inputMaxNumButton").click(function getMaxFromUser() {
            if ($("#inputMaxNum").val() == 0) {
                $("#message").html("Zero?!? Seriously??? I quit!<br/><br/> *Honestly, where's my Mom when I need a challenge?*")
                $("#displayGetMaxNumBtn").css("display", "none")
                endGame()
            } else {
                maxNum = $("#inputMaxNum").val()
                answer = generateRandomNumber(maxNum)
                $("#message").html("Awesome! I've picked a number, and it's a doozy! <br/> Guess a number between 1 and " + maxNum + ", and I'll tell you if you're too high or too low.")
                $("#displayGetMaxNumBtn").css("display", "none")
                runGame(answer, maxNum)
            }
        })
    }

    function runGame(answer, maxNum) {
        let solution = answer
        let guess
        $("#displayUserGuessBtn").css("display", "block")
        $("#inputGuessButton").click(function getGuessFromUser() {
            guess = Number($("#inputGuess").val())
            $("#inputGuess").val("")
            console.log(solution, guess)
            if (guess < solution && guess != 0) {
                $("#message").html(guess + " is too low!\nPlease guess again")
            } else if (guess > solution && guess <= maxNum) {
                $("#message").html(guess + " is too high!\nPlease guess again")
            } else if (guess > maxNum || guess == 0) {
                $("#message").html("Um..." + guess + " is not between 1 and " + maxNum + ".\nWhy don't you try again? <br/><br/> *Humans!*")
            } else if (guess == solution) {
                $("#message").html(guess + " is the right answer. Congratulations, you win!")
                endGame()
            }
        })
    }

    function endGame() {
        $("#displayUserGuessBtn").css("display", "none")
        $("#displayReplayBtn").css("display", "block")
        $("#replayButton").click(function replay() {
            location.reload()
        })
    }

    function generateRandomNumber(max) {
        return Math.ceil(Math.random() * (max))
    }
})
