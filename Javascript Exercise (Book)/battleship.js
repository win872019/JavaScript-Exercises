var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
    guess = prompt("準備，瞄準，射擊！(鍵入範圍0-6的數字):");
    if (guess < 0 || guess > 6) {
        alert("請見入一個有效的數字！");
    } else {
        guesses = guesses + 1;
        if(guess == location1 || guess == location2 ||guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
            isSunk = true;
            alert("你擊沉了我的船艦!");
            } 
        } else {
            alert("MISS!");
        }
    }
}
var stats = "你猜了" + guesses + " 次擊沉我的船艦， " + "這意味著你的射擊率為 " + (3/guesses);
alert(stats);