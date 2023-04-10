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
let k = document.getElementById('circleScore').innerText;
let w = document.getElementById('crossScore').innerText;
let circleScore = document.getElementById('circleScore');
let crossScore = document.getElementById('crossScore');
let A;
let B;
let C;
let D;
let E;
let F;
let G;
let H;
let I;
let W;
let pip;
let num = 0;
let q = 0;
let scoreCr = 10;
let scoreCi = 10;
function generateRandomElement() {
    q = Math.floor(Math.random() * 9 + 1);
    if (q === 1 && typeof A != "string" && num == 0) {
        squareA.classList.add('elX');
        squareA.classList.remove('elO');
        num++;
        A = "circle";
        checkForWin();
        gene.innerText = "Generate a move";
    }  else if (q === 1 && typeof A != "string" && num == 1) {
        squareA.classList.add('elO');
        squareA.classList.remove('elX');
        num--;
        A = "cross";
        checkForWin();
        gene.innerText = "Generate a move";
    } else if (q === 1 && typeof A == "string") {
        q = Math.floor(Math.random() * 9 + 1);
        checkForWin();
        gene.innerText = "Press it Again";
    }
    else if (q === 2 && typeof B != "string" && num == 0) {
        squareB.classList.add('elX');
        squareB.classList.remove('elO');
        num++;
        B = "circle";
        checkForWin();
        gene.innerText = "Generate a move";
    }  else if (q === 2 && typeof B != "string" && num == 1) {
        squareB.classList.add('elO');
        squareB.classList.remove('elX');
        num--;
        B = "cross";
        checkForWin();
        gene.innerText = "Generate a move";
    } else if (q === 2 && typeof B == "string") {
        q = Math.floor(Math.random() * 9 + 1);
        checkForWin();
        gene.innerText = "Press it Again";
    }
    else if (q === 3 && typeof C != "string" && num == 0) {
        squareC.classList.add('elX');
        squareC.classList.remove('elO');
        num++;
        C = "circle";
        checkForWin();
        gene.innerText = "Generate a move";
    }  else if (q === 3 && typeof C != "string" && num == 1) {
        squareC.classList.add('elO');
        squareC.classList.remove('elX');
        num--;
        C = "cross";
        checkForWin();
        gene.innerText = "Generate a move";
    } else if (q === 3 && typeof C == "string") {
        q = Math.floor(Math.random() * 9 + 1);
        gene.innerText = "Press it Again";
    }
    else if (q === 4 && typeof D != "string" && num == 0) {
        squareD.classList.add('elX');
        squareD.classList.remove('elO');
        num++;
        D = "circle";
        checkForWin();
        gene.innerText = "Generate a move";
    }  else if (q === 4 && typeof D != "string" && num == 1) {
        squareD.classList.add('elO');
        squareD.classList.remove('elX');
        num--;
        D = "cross";
        checkForWin();
        gene.innerText = "Generate a move";
    } else if (q === 4 && typeof D == "string") {
        q = Math.floor(Math.random() * 9 + 1);
        checkForWin();
        gene.innerText = "Press it Again";
    }
    else if (q === 5 && typeof E != "string" && num == 0) {
        squareE.classList.add('elX');
        squareE.classList.remove('elO');
        num++;
        E = "circle";
        checkForWin();
        gene.innerText = "Generate a move";
    }  else if (q === 5 && typeof E != "string" && num == 1) {
        squareE.classList.add('elO');
        squareE.classList.remove('elX');
        num--;
        E = "cross";
        checkForWin();
        gene.innerText = "Generate a move";
    } else if (q === 5 && typeof E == "string") {
        q = Math.floor(Math.random() * 9 + 1);
        checkForWin();
        gene.innerText = "Press it Again";
    }
    else if (q === 6 && typeof F != "string" && num == 0) {
        squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num++;
        F = "circle";
        checkForWin();
        gene.innerText = "Generate a move";
    }  else if (q === 6 && typeof F != "string" && num == 1) {
        squareF.classList.add('elO');
        squareF.classList.remove('elX');
        num--;
        F = "cross";
        checkForWin();
        gene.innerText = "Generate a move";
    } else if (q === 6 && typeof F == "string") {
        q = Math.floor(Math.random() * 9 + 1);
        checkForWin();
        gene.innerText = "Press it Again";
    }
    else if (q === 7 && typeof G != "string" && num == 0) {
        squareG.classList.add('elX');
        squareG.classList.remove('elO');
        num++;
        G = "circle";
        checkForWin();
        gene.innerText = "Generate a move";
    }  else if (q === 7 && typeof G != "string" && num == 1) {
        squareG.classList.add('elO');
        squareG.classList.remove('elX');
        num--;
        G = "cross";
        checkForWin();
        gene.innerText = "Generate a move";
    } else if (q === 7 && typeof G == "string") {
        q = Math.floor(Math.random() * 9 + 1);
        checkForWin();
        gene.innerText = "Press it Again";
    }
    else if (q === 8 && typeof H != "string" && num == 0) {
        squareH.classList.add('elX');
        squareH.classList.remove('elO');
        num++;
        H = "circle";
        checkForWin();
        gene.innerText = "Generate a move";
    }  else if (q === 8 && typeof H != "string" && num == 1) {
        squareH.classList.add('elO');
        squareH.classList.remove('elX');
        num--;
        H = "cross";
        checkForWin();
        gene.innerText = "Generate a move";
    } else if (q === 8 && typeof H == "string") {
        q = Math.floor(Math.random() * 9 + 1);
        checkForWin();
        gene.innerText = "Press it Again";
    }
    else if (q === 9 && typeof I != "string" && num == 0) {
        squareI.classList.add('elX');
        squareI.classList.remove('elO');
        num++;
        I = "circle";
        checkForWin();
        gene.innerText = "Generate a move";
    }  else if (q === 9 && typeof I != "string" && num == 1) {
        squareI.classList.add('elO');
        squareI.classList.remove('elX');
        num--;
        I = "cross";
        checkForWin();
        gene.innerText = "Generate a move";
    } else if (q === 9 && typeof I == "string") {
        q = Math.floor(Math.random() * 9 + 1);
        checkForWin();
        gene.innerText = "Press it Again";
    }
}
function resetValues() {
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
function addA() {
    if (typeof A != "string") {
        if (num == 0) {
            squareA.classList.add('elX');
            squareA.classList.remove('elO');
            num++;
            console.log(num);
            A = "circle";
        } else {
            squareA.classList.add('elO');
            squareA.classList.remove('elX');
            num--;
            console.log(num);
            A = "cross";
        }
        checkForWin();
    }  
} 

function addB() {
    if (typeof B != "string") {
        if (num == 0) {
            squareB.classList.add('elX');
            squareB.classList.remove('elO');
            num++;
            console.log(num);
            B = "circle";
        } else {
            squareB.classList.add('elO');
            squareB.classList.remove('elX');
            num--;
            console.log(num);
            B = "cross";
        }
        checkForWin();
     }
    
    
}
function addC() {
    if (typeof C != "string") { 
        if (num == 0) {
            squareC.classList.add('elX');
            squareC.classList.remove('elO');
            num++;
            console.log(num);
            C = "circle";
        } else {
            squareC.classList.add('elO');
            squareC.classList.remove('elX');
            num--;
            console.log(num);
            C = "cross";
        }
        checkForWin();
    }
    
    
}
function addD() {
    if (typeof D != "string") {
        if (num == 0) {
            squareD.classList.add('elX');
            squareD.classList.remove('elO');
            num++;
            console.log(num);
            D = "circle";
        } else {
            squareD.classList.add('elO');
            squareD.classList.remove('elX');
            num--;
            console.log(num);
            D = "cross";
        }
        checkForWin();
     }
    
    
}
function addE() {
    if (typeof E != "string") {
        if (num == 0) {
            squareE.classList.add('elX');
            squareE.classList.remove('elO');
            num++;
            console.log(num);
            E = "circle";
        } else {
            squareE.classList.add('elO');
            squareE.classList.remove('elX');
            num--;
            console.log(num);
            E = "cross";
        }
        checkForWin();
     }
    
    
}
function addF() {
    if (typeof F != "string") {
        if (num == 0) {
            squareF.classList.add('elX');
            squareF.classList.remove('elO');
            num++;
            console.log(num);
            F = "circle";
        } else {
            squareF.classList.add('elO');
            squareF.classList.remove('elX');
            num--;
            console.log(num);
            F = "cross";
        }
        checkForWin();
     }
    
    
}
function addG() {
    if (typeof G != "string") {
        if (num == 0) {
            squareG.classList.add('elX');
            squareG.classList.remove('elO');
            num++;
            console.log(num);
            G = "circle";
        } else {
            squareG.classList.add('elO');
            squareG.classList.remove('elX');
            num--;
            console.log(num);
            G = "cross";
        }
        checkForWin();
     }
    
    
}
function addH() {
    if (typeof H != "string") {
        if (num == 0) {
            squareH.classList.add('elX');
            squareH.classList.remove('elO');
            num++;
            console.log(num);
            H = "circle";
        } else {
            squareH.classList.add('elO');
            squareH.classList.remove('elX');
            num--;
            console.log(num);
            H = "cross";
        }
        checkForWin();
     }
    
    
}
function addI() {
    if (typeof I != "string") { 
        if (num == 0) {
            squareI.classList.add('elX');
            squareI.classList.remove('elO');
            num++;
            console.log(num);
            I = "circle";
        } else {
            squareI.classList.add('elO');
            squareI.classList.remove('elX');
            num--;
            console.log(num);
            I = "cross";
        }
        checkForWin();
    }
    
    
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
function changetheinnerCI () {
    k++;
    circleScore.innerText = k;
    console.log(k);
}
function changetheinnerCI () {
    w++;
    crossScore.innerText = w;
    console.log(w);
}
function checkForWin() {
    if (A == "circle" && B == "circle" && C == "circle") {
        circleSound.play();
        alert('circle have won');
        clearingTheBoard();
    k++;
    circleScore.innerText = k;
    console.log(k);
    circleScoree.innerText = k;
    } else if (D == "circle" && E == "circle" && F == "circle") {
        circleSound.play();
        alert('circle have won');
        clearingTheBoard();
        k++;
    circleScore.innerText = k;
    circleScoree.innerText = k;
    } else if (G == "circle" && H == "circle" && I == "circle") {
        circleSound.play();
        alert('circle have won');
        clearingTheBoard();
        k++;
    circleScore.innerText = k;
    circleScoree.innerText = k;
    } else if (A == "circle" && E == "circle" && I == "circle") {
        circleSound.play();
        alert('circle have won');
        clearingTheBoard();
        k++;
    circleScore.innerText = k;
    circleScoree.innerText = k;
    } else if (G == "circle" && E == "circle" && C == "circle") {
        circleSound.play();
        alert('circle have won');
        clearingTheBoard();
        k++;
        circleScoree.innerText = k;
    circleScore.innerText = k;
    }else if (A == "cross" && B == "cross" && C == "cross") {
        crosSound.play();
        alert('cross have won');
        clearingTheBoard();
        w++;
    crossScore.innerText = w;
    croossScoree.innerText = w;
    } else if (D == "cross" && E == "cross" && F == "cross") {
        crosSound.play();
        alert('cross have won');
        clearingTheBoard();
        w++;
        crossScore.innerText = w;
        croossScoree.innerText = w;
    } else if (G == "cross" && H == "cross" && I == "cross") {
        crosSound.play();
        alert('cross have won');
        clearingTheBoard();
        w++;
    crossScore.innerText = w;
    croossScoree.innerText = w;
    } else if (A == "cross" && E == "cross" && I == "cross") {
        crosSound.play();
        alert('cross have won');
        clearingTheBoard();
        w++;
    crossScore.innerText = w;
    croossScoree.innerText = w;
    } else if (G == "cross" && E == "cross" && C == "cross") {
        crosSound.play();
        alert('cross have won');
        clearingTheBoard();
        w++;
    crossScore.innerText = w;
    croossScoree.innerText = w;
    } else if (A == "cross" && D == "cross" && G == "cross") {
        crosSound.play();
        alert('cross have won');
        clearingTheBoard();
        w++;
    crossScore.innerText = w;
    croossScoree.innerText = w;
    } else if (B == "cross" && E == "cross" && H == "cross") {
        crosSound.play();
        alert('cross have won');
        clearingTheBoard();
        w++;
    crossScore.innerText = w;
    circleScoree.innerText = k;
    croossScoree.innerText = w;
    } else if (C == "cross" && F == "cross" && I == "cross" ) {
        crosSound.play();
        alert('cross have won');
        clearingTheBoard();
        w++;
    crossScore.innerText = w;
    circleScoree.innerText = k;
    croossScoree.innerText = w;
    } else if (A == "circle" && D == "circle" && G == "circle") {
        circleSound.play();
        alert('circle have won');
        clearingTheBoard();
        k++;
    circleScore.innerText = k;
    circleScoree.innerText = k;
    } else if (B == "circle" && E == "circle" && H == "circle") {
        circleSound.play();
        alert('circle have won');
        clearingTheBoard();
        k++;
    circleScore.innerText = k;
    circleScoree.innerText = k;
    } else if (C == "circle" && F == "circle" && I == "circle" ) {
        circleSound.play();
        alert('circle have won');
        clearingTheBoard();
    k++;
    circleScore.innerText = k;
    circleScoree.innerText = k;
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
    k++;
    circleScore.innerText = k;
    circleScoree.innerText = k;
    croossScoree.innerText = w;
    w++;
    crossScore.innerText = w;
    croossScoree.innerText = w;
    clearingTheBoard();
    }
    
}
function clearScore () {
    k = 0;
    circleScore.innerText = k;
    circleScoree.innerText = k;
    w = 0;
    crossScore.innerText = w;
    croossScoree.innerText = w;
    
}


