// Reset Function
function gameReset() {
    flag = 1
    document.getElementById("print").innerHTML = ""
    document.getElementById("playerImg").src = ""
    
    for (let i = 1; 3; i++) {
        document.getElementById("a" + i).value = ""
        document.getElementById('a' + i).disabled = false

        document.getElementById("b" + i).value = ""
        document.getElementById('b' + i).disabled = false

        document.getElementById("c" + i).value = ""
        document.getElementById('c' + i).disabled = false
    }
}


// Check Turn Function
flag = 1
function turnCheck_1() {
    if (flag == 1) {
        document.getElementById("a1").value = "X"
        document.getElementById('a1').disabled = true
        flag = 0
        document.getElementById("print").innerHTML = "Next Up: Player 2"
        document.getElementById("playerImg").src = "images/noise.gif"
    } else {
        document.getElementById("a1").value = "O"
        document.getElementById('a1').disabled = true
        flag = 1
        document.getElementById("print").innerHTML = "Next Up: Player 1"
        document.getElementById("playerImg").src = "images/peppino.gif"
    }
}
function turnCheck_2() {
    if (flag == 1) {
        document.getElementById("a2").value = "X"
        document.getElementById('a2').disabled = true
        flag = 0
        document.getElementById("print").innerHTML = "Next Up: Player 2"
        document.getElementById("playerImg").src = "images/noise.gif"
    } else {
        document.getElementById("a2").value = "O"
        document.getElementById('a2').disabled = true
        flag = 1
        document.getElementById("print").innerHTML = "Next Up: Player 1"
        document.getElementById("playerImg").src = "images/peppino.gif"
    }
}
function turnCheck_3() {
    if (flag == 1) {
        document.getElementById("a3").value = "X"
        document.getElementById('a3').disabled = true
        flag = 0
        document.getElementById("print").innerHTML = "Next Up: Player 2"
        document.getElementById("playerImg").src = "images/noise.gif"
    } else {
        document.getElementById("a3").value = "O"
        document.getElementById('a3').disabled = true
        flag = 1
        document.getElementById("print").innerHTML = "Next Up: Player 1"
        document.getElementById("playerImg").src = "images/peppino.gif"
    }
}
function turnCheck_4() {
    if (flag == 1) {
        document.getElementById("b1").value = "X"
        document.getElementById('b1').disabled = true
        flag = 0
        document.getElementById("print").innerHTML = "Next Up: Player 2"
        document.getElementById("playerImg").src = "images/noise.gif"
    } else {
        document.getElementById("b1").value = "O"
        document.getElementById('b1').disabled = true
        flag = 1
        document.getElementById("print").innerHTML = "Next Up: Player 1"
        document.getElementById("playerImg").src = "images/peppino.gif"
    }
}
function turnCheck_5() {
    if (flag == 1) {
        document.getElementById("b2").value = "X"
        document.getElementById('b2').disabled = true
        flag = 0
        document.getElementById("print").innerHTML = "Next Up: Player 2"
        document.getElementById("playerImg").src = "images/noise.gif"
    } else {
        document.getElementById("b2").value = "O"
        document.getElementById('b2').disabled = true
        flag = 1
        document.getElementById("print").innerHTML = "Next Up: Player 1"
        document.getElementById("playerImg").src = "images/peppino.gif"
    }
}
function turnCheck_6() {
    if (flag == 1) {
        document.getElementById("b3").value = "X"
        document.getElementById('b3').disabled = true
        flag = 0
        document.getElementById("print").innerHTML = "Next Up: Player 2"
        document.getElementById("playerImg").src = "images/noise.gif"
    } else {
        document.getElementById("b3").value = "O"
        document.getElementById('b3').disabled = true
        flag = 1
        document.getElementById("print").innerHTML = "Next Up: Player 1"
        document.getElementById("playerImg").src = "images/peppino.gif"
    }
}
function turnCheck_7() {
    if (flag == 1) {
        document.getElementById("c1").value = "X"
        document.getElementById('c1').disabled = true
        flag = 0
        document.getElementById("print").innerHTML = "Next Up: Player 2"
        document.getElementById("playerImg").src = "images/noise.gif"
    } else {
        document.getElementById("c1").value = "O"
        document.getElementById('c1').disabled = true
        flag = 1
        document.getElementById("print").innerHTML = "Next Up: Player 1"
        document.getElementById("playerImg").src = "images/peppino.gif"
    }
}
function turnCheck_8() {
    if (flag == 1) {
        document.getElementById("c2").value = "X"
        document.getElementById('c2').disabled = true
        flag = 0
        document.getElementById("print").innerHTML = "Next Up: Player 2"
        document.getElementById("playerImg").src = "images/noise.gif"
    } else {
        document.getElementById("c2").value = "O"
        document.getElementById('c2').disabled = true
        flag = 1
        document.getElementById("print").innerHTML = "Next Up: Player 1"
        document.getElementById("playerImg").src = "images/peppino.gif"
    }
}
function turnCheck_9() {
    if (flag == 1) {
        document.getElementById("c3").value = "X"
        document.getElementById('c3').disabled = true
        flag = 0
        document.getElementById("print").innerHTML = "Next Up: Player 2"
        document.getElementById("playerImg").src = "images/noise.gif"
    } else {
        document.getElementById("c3").value = "O"
        document.getElementById('c3').disabled = true
        flag = 1
        document.getElementById("print").innerHTML = "Next Up: Player 1"
        document.getElementById("playerImg").src = "images/peppino.gif"
    }
}

// Box Checking Function
function boxChecking() {
    // Vars
    var a1, a2, a3, b1, b2, b3, c1, c2, c3;

    a1 = document.getElementById('a1').value;
    a2 = document.getElementById('a2').value;
    a3 = document.getElementById('a3').value;
    
    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    b3 = document.getElementById('b3').value;
    
    c1 = document.getElementById('c1').value;
    c2 = document.getElementById('c2').value;
    c3 = document.getElementById('c3').value;

    // Check if win then disable
    if ((document.getElementById('a1').disabled == true) &&
        (document.getElementById('b1').disabled == true) &&
        (document.getElementById('c1').disabled == true) &&
        (document.getElementById('a2').disabled == true) &&
        (document.getElementById('b2').disabled == true) &&
        (document.getElementById('c2').disabled == true) &&
        (document.getElementById('a3').disabled == true) &&
        (document.getElementById('b3').disabled == true) &&
        (document.getElementById('c3').disabled == true)) {
        document.getElementById("print").innerHTML = "Tie"
        document.getElementById("playerImg").src = "images/angryPeppino.png"
    }

    if (((a1 == 'X') && (a2 == 'X') && (a3 == 'X')) || 
        ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) ||
        ((c1 == 'X') && (c2 == 'X') && (c3 == 'X')) ||
        ((a1 == 'X') && (b2 == 'X') && (c3 == 'X')) ||
        ((c1 == 'X') && (b2 == 'X') && (a3 == 'X')) ||
        ((a1 == 'X') && (b1 == 'X') && (c1 == 'X')) ||
        ((a2 == 'X') && (b2 == 'X') && (c2 == 'X')) ||
        ((a3 == 'X') && (b3 == 'X') && (c3 == 'X'))){
        document.getElementById("print").innerHTML = "Player 1 Wins!"
        document.getElementById("playerImg").src = "images/peppinoAnim.gif"

        for (let i = 1; 3; i++) {
            document.getElementById('a' + i).disabled = true
            document.getElementById('b' + i).disabled = true
            document.getElementById('c' + i).disabled = true
        }
    }

    else if (((a1 == 'O') && (a2 == 'O') && (a3 == 'O')) || 
            ((b1 == 'O') && (b2 == 'O') && (b3 == 'O')) ||
            ((c1 == 'O') && (c2 == 'O') && (c3 == 'O')) ||
            ((a1 == 'O') && (b2 == 'O') && (c3 == 'O')) ||
            ((c1 == 'O') && (b2 == 'O') && (a3 == 'O')) ||
            ((a1 == 'O') && (b1 == 'O') && (c1 == 'O')) ||
            ((a2 == 'O') && (b2 == 'O') && (c2 == 'O')) ||
            ((a3 == 'O') && (b3 == 'O') && (c3 == 'O'))) {
        document.getElementById("print").innerHTML = "Player 2 Wins!"
        document.getElementById("playerImg").src = "images/noiseAnim.gif"

        for (let i = 1; 3; i++) {
            document.getElementById('a' + i).disabled = true
            document.getElementById('b' + i).disabled = true
            document.getElementById('c' + i).disabled = true
        }
    }
}

function animImage() {
    if (!document.getElementById("playerImg").src.includes('Anim.gif')) {
        document.getElementById("playerImg").src = document.getElementById("playerImg").src.replace('.gif','Anim.gif')
    }
}