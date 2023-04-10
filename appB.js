const squareA = document.getElementById('squareA');
const squareB = document.getElementById('squareB');
const squareC = document.getElementById('squareC');
const squareD = document.getElementById('squareD');
const squareE = document.getElementById('squareE');
const squareF = document.getElementById('squareF');
const squareG = document.getElementById('squareG');
const squareH = document.getElementById('squareH');
const squareI = document.getElementById('squareI');
const divs = document.querySelector('div');
const buttt = document.querySelector('button');
const gene = document.getElementById('Gene');
const audio = new Audio ('sound.mp3');
const draw = new Audio ('drawSound.mp3');
const circleSound = new Audio ('circSound.mp3');
const crosSound = new Audio ('croSound.mp3');
let A = 0;
let B = 0;
let C = 0;
let D = 0;
let E = 0;
let F = 0;
let G = 0;
let H = 0;
let I = 0;
let W = 0;
let num = 0;
let q = 0;


function addA(valueToPrintIn, ValueToSave) {
    
    if (num == 0) {
        valueToPrintIn.classList.add('elX');
        valueToPrintIn.classList.remove('elO');
        num++;
        console.log(num);
        ValueToSave = "circle";
    } else {
        valueToPrintIn.classList.add('elO');
        valueToPrintIn.classList.remove('elX');
        num--;
        console.log(num);
        ValueToSave = "cross";
    }
    checkForWin();
    
}
function resetValues () {
    A = 0;
    B = 0;
    C = 0;
    D = 0;
    E = 0;
    F = 0;
    G = 0;
    H = 0;
    I = 0;
}

function clearingTheBoard () {
    squareA.classList.remove('elO');
    squareB.classList.remove('elO');
    squareC.classList.remove('elO');
    squareD.classList.remove('elO');
    squareE.classList.remove('elO');
    squareF.classList.remove('elO');
    squareG.classList.remove('elO');
    squareH.classList.remove('elO');
    squareI.classList.remove('elO');
    
    squareA.classList.remove('elX');
    squareB.classList.remove('elX');
    squareC.classList.remove('elX');
    squareD.classList.remove('elX');
    squareE.classList.remove('elX');
    squareF.classList.remove('elX');
    squareG.classList.remove('elX');
    squareH.classList.remove('elX');
    squareI.classList.remove('elX');
   
    resetValues();
    
}
function playSound () {
    audio.play();
}
divs.addEventListener('click', playSound);
    function checkForWin() {
        if (A == "circle" && B == "circle" && C == "circle") {
            circleSound.play();
            alert('circle have won');
            resetValues();
            clearingTheBoard();
        } else if (D == "circle" && E == "circle" && F == "circle") {
            circleSound.play();
            alert('circle have won');
            resetValues();
            clearingTheBoard();
        } else if (G == "circle" && H == "circle" && I == "circle") {
            circleSound.play();
            alert('circle have won');
            resetValues();
            clearingTheBoard();
        } else if (A == "circle" && E == "circle" && I == "circle") {
            circleSound.play();
            alert('circle have won');
            resetValues();
            clearingTheBoard();
        } else if (G == "circle" && E == "circle" && C == "circle") {
            circleSound.play();
            alert('circle have won');
            resetValues();
            clearingTheBoard();
        }else if (A == "cross" && B == "cross" && C == "cross") {
            crosSound.play();
            alert('cross have won');
            resetValues();
            clearingTheBoard();
        } else if (D == "cross" && E == "cross" && F == "cross") {
            crosSound.play();
            alert('cross have won');
            resetValues();
            clearingTheBoard();
        } else if (G == "cross" && H == "cross" && I == "cross") {
            crosSound.play();
            alert('cross have won');
            resetValues();
            clearingTheBoard();
        } else if (A == "cross" && E == "cross" && I == "cross") {
            crosSound.play();
            alert('cross have won');
            resetValues();
            clearingTheBoard();
        } else if (G == "cross" && E == "cross" && C == "cross") {
            crosSound.play();
            alert('cross have won');
            resetValues();
            clearingTheBoard();
        } else if (A == "cross" && D == "cross" && G == "cross") {
            crosSound.play();
            alert('cross have won');
            resetValues();
            clearingTheBoard();
        } else if (B == "cross" && E == "cross" && H == "cross") {
            crosSound.play();
            alert('cross have won');
            resetValues();
            clearingTheBoard();
        } else if (C == "cross" && F == "cross" && I == "cross" ) {
            crosSound.play();
            alert('cross have won');
            resetValues();
            clearingTheBoard();
        } else if (A == "circle" && D == "circle" && G == "circle") {
            circleSound.play();
            alert('circle have won');
            resetValues();
            clearingTheBoard();
        } else if (B == "circle" && E == "circle" && H == "circle") {
            circleSound.play();
            alert('circle have won');
            resetValues();
            clearingTheBoard();
        } else if (C == "circle" && F == "circle" && I == "circle" ) {
            circleSound.play();
            alert('circle have won');
            resetValues();
            clearingTheBoard();
        }  else if (typeof A === "string" && 
        typeof B === "string" &&
        typeof C === "string" &&
        typeof D === "string" &&
        typeof E === "string" &&
        typeof F === "string" &&
        typeof G === "string" &&
        typeof H === "string" &&
        typeof I === "string"
        ) {
            draw.play();
            alert('that is a draw');
            resetValues();
            
            clearingTheBoard();
        }
        
    }