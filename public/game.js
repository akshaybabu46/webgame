const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    const result = document.getElementById("result");

    if (guess === randomNumber) {
        result.innerHTML = "🎉 Correct! You win!";
    } else if (guess < randomNumber) {
        result.innerHTML = "📈 Too low!";
    } else {
        result.innerHTML = "📉 Too high!";
    }
}
