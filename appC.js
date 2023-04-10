
function playMasterrr () {
    clearingTheBoard();
    clearScore();
    clearingTheBoard();
    myInterval = setInterval(playMaster, 100);
}
function playMaster () {
    squareI.classList.add('elX');
        squareI.classList.remove('elO');
        num = 1;
        I = "circle";
        checkForWin();

        if (E === "cross" && C != "cross") {
        squareC.classList.add('elX');
        squareC.classList.remove('elO');
        num = 1;
        C = "circle";
        checkForWin();

        }
        if (pip == 1) {
            squareA.classList.add('elX');
            squareA.classList.remove('elO');
            num = 1;
            A = "circle";
            checkForWin();
            }
             if (E == "cross" && F == "cross") {
            squareG.classList.add('elX');
        squareG.classList.remove('elO');
        num = 1;
        G = "circle";
        checkForWin();

        } if (E == "cross" && F == "cross" && B == "cross") {
            squareH.classList.add('elX');
        squareH.classList.remove('elO');
        num = 1;
        H = "circle";
        console.log(q);
        checkForWin();

        } if (E == "cross" && F == "cross" && A == "cross" && B == "cross") {
            squareG.classList.add('elX');
        squareG.classList.remove('elO');
        num = 1;
        G = "circle";
        console.log(q);
        checkForWin();

        } if (E == "cross" && F == "cross" && G == "cross" && B == "cross") {
            squareA.classList.add('elX');
        squareA.classList.remove('elO');
        num = 1;
        A = "circle";
        console.log(q);
        checkForWin();

        }  if (E == "cross" && D == "cross") {
            squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num = 1;
        F = "circle";
        console.log(q);
        checkForWin();

        }  if (E == "cross" && D == "cross" && A == "circle") {
        squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num = 1;
        F = "circle";
        console.log(q);
        checkForWin();

        }
        if (B == "cross" && E == "cross") {
            squareH.classList.add('elX');
        squareH.classList.remove('elO');
        num = 1;
        H = "circle";
        console.log(q);
        checkForWin();

        } if (B == "cross" && E == "cross" && F == "cross") {
            squareD.classList.add('elX');
        squareD.classList.remove('elO');
        num = 1;
        D = "circle";
        console.log(q);
        checkForWin();

        } if (E == "cross" && H == "cross") {
            squareB.classList.add('elX');
        squareB.classList.remove('elO');
        num = 1;
        B = "circle";
        console.log(q);
        checkForWin();

        } if (E == "cross" && H == "cross" && A == "cross") {
            squareD.classList.add('elX');
        squareD.classList.remove('elO');
        num = 1;
        D = "circle";
        checkForWin();

        } if (A == "cross" && B == "cross" && E == "cross") {
            squareG.classList.add('elX');
        squareG.classList.remove('elO');
        num = 1;
        G = "circle";
        checkForWin();

        } if (A == "cross" && G == "cross" && E == "cross" && H == "cross") {
            squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num = 1;
        F = "circle";
        checkForWin()
        } if (B == "cross" && G == "cross" && E == "cross") {
            squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num = 1;
        F = "circle";
        checkForWin()
        } if (A == "cross" && F == "cross" && E == "cross" && H == "cross") {
            squareG.classList.add('elX');
        squareG.classList.remove('elO');
        num = 1;
        G = "circle";
        checkForWin()
        } if (A == "cross" && F == "cross" && E == "cross") {
            if (pip == 1) {
        squareB.classList.add('elX');
        squareB.classList.remove('elO');
        num = 1;
        B = "circle";
        checkForWin()
            } else if (pip == 2) {
        squareH.classList.add('elX');
        squareH.classList.remove('elO');
        num = 1;
        H = "circle";
        checkForWin()
            }  
        } if (G == "cross" && E == "cross" && H == "cross") {
            squareA.classList.add('elX');
        squareA.classList.remove('elO');
        num = 1;
        A = "circle";
        checkForWin()
        } if (G == "cross" && E == "cross") {
            squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num = 1;
        F = "circle";
        checkForWin()
        } if (A == "cross" && E == "cross") {
            squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num = 1;
        F = "circle";
        checkForWin()
        } if (H == "cross" && C != "cross") {
        squareC.classList.add('elX');
        squareC.classList.remove('elO');
        num = 1;
        C = "circle";
        checkForWin()
        } if (H == "cross" && C == "cross") {
            squareE.classList.add('elX');
            squareE.classList.remove('elO');
            num = 1;
            E = "circle";
            checkForWin()
            } 
            if (H == "cross" && C == "cross" && A == "cross") {
                squareD.classList.add('elX');
                squareD.classList.remove('elO');
                num = 1;
                D = "circle";
                checkForWin()
                } 
        if (B == "cross" && C != "cross") {
        squareC.classList.add('elX');
        squareC.classList.remove('elO');
        num = 1;
        C = "circle";
        checkForWin();
        } if (B == "cross" && C == "cross") {
            squareH.classList.add('elX');
            squareH.classList.remove('elO');
            num = 1;
            H = "circle";
            checkForWin();
            }
         if (D == "cross" && A != "cross") {
        squareA.classList.add('elX');
        squareA.classList.remove('elO');
        num = 1;
        A = "circle";
        checkForWin(); 
        } if (D == "cross" && A == "cross") {
            squareF.classList.add('elX');
            squareF.classList.remove('elO');
            num = 1;
            F = "circle";
            checkForWin();  
        }
        if (F == "cross" && G != "cross") {
        squareG.classList.add('elX');
        squareG.classList.remove('elO');
        num = 1;
        G = "circle";
        checkForWin();         
        } if (F == "cross" && G == "cross") {
        squareA.classList.add('elX');
        squareA.classList.remove('elO');
        num = 1;
        A = "circle";
        checkForWin();   
        }
        if (B == "cross" && G == "cross") {
        squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num = 1;
        F = "circle";
        checkForWin();
        }
        if (B == "cross" && H == "cross") {
        squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num = 1;
        F = "circle";
        checkForWin();
        }
        if (B == "cross" && A == "cross") { 
        squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num = 1;
        F = "circle";
        checkForWin();
        } if (A == "cross" && C != "cross") {
        squareC.classList.add('elX');
        squareC.classList.remove('elO');
        num = 1;
        C = "circle";
        checkForWin();
        } if (G == "cross") {
        squareC.classList.add('elX');
        squareC.classList.remove('elO');
        num = 1;
        C = "circle";
        checkForWin();
        } if (I == "cross") {
        squareC.classList.add('elX');
        squareC.classList.remove('elO');
        num = 1;
        C = "circle";
        checkForWin();
        } if (C == "cross") {
        squareG.classList.add('elX');
        squareG.classList.remove('elO');
        num = 1;
        G = "circle";
        checkForWin();
    } if (C == "cross" && E == "cross") {
        squareH.classList.add('elX');
        squareH.classList.remove('elO');
        num = 1;
        H = "circle";
        checkForWin();
    } if (A == "cross" && G == "cross") {
        squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num = 1;
        F = "circle";
        checkForWin();
    } if (A == "cross" && C == "cross") {
        squareE.classList.add('elX');
        squareE.classList.remove('elO');
        num = 1;
        E = "circle";
        checkForWin();
    } if (C == "cross" && F == "cross") {
        squareH.classList.add('elX');
        squareH.classList.remove('elO');
        num = 1;
        H = "circle";
        checkForWin();
    } if (H == "cross" && G == "cross") {
        squareF.classList.add('elX');
        squareF.classList.remove('elO');
        num = 1;
        F = "circle";
        checkForWin();
    } if (A == "cross" && F == "cross" && H == "cross") {
        squareE.classList.add('elX');
        squareE.classList.remove('elO');
        num = 1;
        E = "circle";
        checkForWin();
    }
} 