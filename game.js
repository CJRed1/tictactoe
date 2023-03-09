// Box Checking Function
function boxChecking() {}


// Reset Function
function gameReset() {
    for (let i = 1; 3; i++) {
        flag = 1
        document.getElementById("print").innerHTML = ""
        document.getElementById("playerImg").src = ""

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