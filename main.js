// Sound teclas EACH
const soundTecla1 = new Audio("./assets/tecla1.mp4");
const soundTecla2 = new Audio("./tecla2.mp3");
const soundTecla3 = new Audio("./tecla3.mp3");
const soundTecla4 = new Audio("./tecla4.mp3");
const soundTecla5 = new Audio("./tecla5.mp3");
const soundTecla6 = new Audio("./tecla6.mp3");
const soundTecla7 = new Audio("./tecla7.mp3");
const soundTecla8 = new Audio("./tecla8.mp3");
const soundTecla9 = new Audio("./tecla9.mp3");
const soundTecla10 = new Audio("./tecla10.mp3");
const soundTecla11 = new Audio("./tecla11.mp3");
const soundTecla12 = new Audio("./tecla12.mp3");
const soundTecla13 = new Audio("./tecla13.mp3");
const soundTecla14 = new Audio("./tecla14.mp3");

const soundTeclaA = new Audio("./teclaA.mp3");
const soundTeclaB = new Audio("./teclaB.mp3");
const soundTeclaC = new Audio("./teclaC.mp3");
const soundTeclaD = new Audio("./teclaD.mp3");
const soundTeclaE = new Audio("./teclaE.mp3");
const soundTeclaF = new Audio("./teclaF.mp3");
const soundTeclaG = new Audio("./teclaG.mp3");
const soundTeclaH = new Audio("./teclaH.mp3");
const soundTeclaI = new Audio("./teclaI.mp3");
const soundTeclaJ = new Audio("./teclaJ.mp3");


document.addEventListener('DOMContentLoaded', function () {
    const teclasBranca = document.querySelectorAll('.teclaBranca');
    const teclasPreta = document.querySelectorAll('.teclaPreta');

    // event listener MOUSE tecla branca
    teclasBranca.forEach(tecla => {
        tecla.addEventListener('mousedown', function () {
            tecla.style.backgroundColor = 'gray';
        });
        tecla.addEventListener('mouseup', function () {
            tecla.style.backgroundColor = '';
        });
        tecla.addEventListener('mouseleave', function () {
            tecla.style.backgroundColor = '';
        });
    });

    // event listener MOUSE tecla preta
    teclasPreta.forEach(tecla => {
        tecla.addEventListener('mousedown', function () {
            tecla.style.backgroundColor = 'gray';
        });
        tecla.addEventListener('mouseup', function () {
            tecla.style.backgroundColor = '';
        });
        tecla.addEventListener('mouseleave', function () {
            tecla.style.backgroundColor = '';
        });
    });
});

// TECLADO
document.addEventListener('keydown', function (event) {
    // id tecla pressionada
    const teclaPressionada = event.key;

    // tecla pressionada ID tecla do piano
    switch (teclaPressionada) {
        // TECLAS BRANCAS
        case 'q':case 'Q':

            const tecla1 = document.getElementById('tecla1');
            tecla1.style.backgroundColor = '#c5c5c5';
            if (soundTecla1) {
                if (soundTecla1.paused === false) {
                    soundTecla1.currentTime = 0;
                }
                soundTecla1.play();
            }

            break;
        case 'w':case 'W':

            const tecla2 = document.getElementById('tecla2');
            tecla2.style.backgroundColor = '#c5c5c5';
            if (soundTecla2) {
                if (soundTecla2.paused === false) {
                    soundTecla2.currentTime = 0;
                }
                soundTecla2.play();
            }

            break;
        case 'e':case 'E':

            const tecla3 = document.getElementById('tecla3');
            tecla3.style.backgroundColor = '#c5c5c5';
            if (soundTecla3) {
                if (soundTecla3.paused === false) {
                    soundTecla3.currentTime = 0;
                }
                soundTecla3.play();
            }

            break;
        case 'r':case 'R':

            const tecla4 = document.getElementById('tecla4');
            tecla4.style.backgroundColor = '#c5c5c5';
            if (soundTecla4) {
                if (soundTecla4.paused === false) {
                    soundTecla4.currentTime = 0;
                }
                soundTecla4.play();
            }

            break;
        case 't':case 'T':

            const tecla5 = document.getElementById('tecla5');
            tecla5.style.backgroundColor = '#c5c5c5';
            if (soundTecla5) {
                if (soundTecla5.paused === false) {
                    soundTecla5.currentTime = 0;
                }
                soundTecla5.play();
            }

            break;
        case 'y':case 'Y':
            const tecla6 = document.getElementById('tecla6');
            tecla6.style.backgroundColor = '#c5c5c5';
            if (soundTecla6) {
                if (soundTecla6.paused === false) {
                    soundTecla6.currentTime = 0;
                }
                soundTecla6.play();
            }

            break;

        case 'u':case 'U':

            const tecla7 = document.getElementById('tecla7');
            tecla7.style.backgroundColor = '#c5c5c5';
            if (soundTecla7) {
                if (soundTecla7.paused === false) {
                    soundTecla7.currentTime = 0;
                }
                soundTecla7.play();
            }

            break;
        case 'v':case 'V':

            const tecla8 = document.getElementById('tecla8');
            tecla8.style.backgroundColor = '#c5c5c5';
            if (soundTecla8) {
                if (soundTecla8.paused === false) {
                    soundTecla8.currentTime = 0;
                }
                soundTecla8.play();
            }

            break;
        case 'b':case 'B':

            const tecla9 = document.getElementById('tecla9');
            tecla9.style.backgroundColor = '#c5c5c5';
            if (soundTecla9) {
                if (soundTecla9.paused === false) {
                    soundTecla9.currentTime = 0;
                }
                soundTecla9.play();
            }

            break;
        case 'n':case 'N':

            const tecla10 = document.getElementById('tecla10');
            tecla10.style.backgroundColor = '#c5c5c5';
            if (soundTecla10) {
                if (soundTecla10.paused === false) {
                    soundTecla10.currentTime = 0;
                }
                soundTecla10.play();
            }

            break;
        case 'm':case 'M':

            const tecla11 = document.getElementById('tecla11');
            tecla11.style.backgroundColor = '#c5c5c5';
            if (soundTecla11) {
                if (soundTecla11.paused === false) {
                    soundTecla11.currentTime = 0;
                }
                soundTecla11.play();
            }

            break;
        case ',':

            const tecla12 = document.getElementById('tecla12');
            tecla12.style.backgroundColor = '#c5c5c5';
            if (soundTecla12) {
                if (soundTecla12.paused === false) {
                    soundTecla12.currentTime = 0;
                }
                soundTecla12.play();
            }

            break;
        case '.':

            const tecla13 = document.getElementById('tecla13');
            tecla13.style.backgroundColor = '#c5c5c5';
            if (soundTecla13) {
                if (soundTecla13.paused === false) {
                    soundTecla13.currentTime = 0;
                }
                soundTecla13.play();
            }

            break;
        case ';':

            const tecla14 = document.getElementById('tecla14');
            tecla14.style.backgroundColor = '#c5c5c5';
            if (soundTecla14) {
                if (soundTecla14.paused === false) {
                    soundTecla14.currentTime = 0;
                }
                soundTecla14.play();
            }

            break;



        // TECLAS PRETAS
        case '2':

            const teclaA = document.getElementById('teclaA');
            teclaA.style.backgroundColor = '#000';
            if (soundTeclaA) {
                if (soundTeclaA.paused === false) {
                    soundTeclaA.currentTime = 0;
                }
                soundTeclaA.play();
            }

            break;

        case '3':

            const teclaB = document.getElementById('teclaB');
            teclaB.style.backgroundColor = '#000';
            if (soundTeclaB) {
                if (soundTeclaB.paused === false) {
                    soundTeclaB.currentTime = 0;
                }
                soundTeclaB.play();
            }

            break;

        case '5':

            const teclaC = document.getElementById('teclaC');
            teclaC.style.backgroundColor = '#000';
            if (soundTeclaC) {
                if (soundTeclaC.paused === false) {
                    soundTeclaC.currentTime = 0;
                }
                soundTeclaC.play();
            }

            break;

        case '6':

            const teclaD = document.getElementById('teclaD');
            teclaD.style.backgroundColor = '#000';
            if (soundTeclaD) {
                if (soundTeclaD.paused === false) {
                    soundTeclaD.currentTime = 0;
                }
                soundTeclaD.play();
            }

            break;

        case '7':

            const teclaE = document.getElementById('teclaE');
            teclaE.style.backgroundColor = '#000';
            if (soundTeclaE) {
                if (soundTeclaE.paused === false) {
                    soundTeclaE.currentTime = 0;
                }
                soundTeclaE.play();
            }

            break;

        case 'G':case 'g':

            const teclaF = document.getElementById('teclaF');
            teclaF.style.backgroundColor = '#000';
            if (soundTeclaF) {
                if (soundTeclaF.paused === false) {
                    soundTeclaF.currentTime = 0;
                }
                soundTeclaF.play();
            }

            break;

        case 'H':case 'h':

            const teclaG = document.getElementById('teclaG');
            teclaG.style.backgroundColor = '#000';
            if (soundTeclaG) {
                if (soundTeclaG.paused === false) {
                    soundTeclaG.currentTime = 0;
                }
                soundTeclaG.play();
            }

            break;

        case 'K':case 'k':

            const teclaH = document.getElementById('teclaH');
            teclaH.style.backgroundColor = '#000';
            if (soundTeclaH) {
                if (soundTeclaH.paused === false) {
                    soundTeclaH.currentTime = 0;
                }
                soundTeclaH.play();
            }

            break;

        case 'L':case 'l':

            const teclaI = document.getElementById('teclaI');
            teclaI.style.backgroundColor = '#000';
            if (soundTeclaI) {
                if (soundTeclaI.paused === false) {
                    soundTeclaI.currentTime = 0;
                }
                soundTeclaI.play();
            }

            break;

        case 'Ç':case 'ç':

            const teclaJ = document.getElementById('teclaJ');
            teclaJ.style.backgroundColor = '#000';
            if (soundTeclaJ) {
                if (soundTeclaJ.paused === false) {
                    soundTeclaJ.currentTime = 0;
                }
                soundTeclaJ.play();
            }

            break;


    }
});

document.addEventListener('keyup', function (event) {
    // id tecla solta
    const teclaSolta = event.key;

    // volta cor padrão da tecla
    switch (teclaSolta) {
        case 'q':case 'Q':

            const tecla1 = document.getElementById('tecla1');
            tecla1.style.backgroundColor = '';

            break;
        case 'w':case 'W':

            const tecla2 = document.getElementById('tecla2');
            tecla2.style.backgroundColor = '';

            break;
        case 'e':case 'E':

            const tecla3 = document.getElementById('tecla3');
            tecla3.style.backgroundColor = '';

            break;
        case 'r':case 'R':

            const tecla4 = document.getElementById('tecla4');
            tecla4.style.backgroundColor = '';

            break;
        case 't':case 'T':

            const tecla5 = document.getElementById('tecla5');
            tecla5.style.backgroundColor = '';

            break;
        case 'y':case 'Y':

            const tecla6 = document.getElementById('tecla6');
            tecla6.style.backgroundColor = '';

            break;
        case 'u':case 'U':

            const tecla7 = document.getElementById('tecla7');
            tecla7.style.backgroundColor = '';

            break;
        case 'v':case 'V':

            const tecla8 = document.getElementById('tecla8');
            tecla8.style.backgroundColor = '';

            break;
        case 'b':case 'B':

            const tecla9 = document.getElementById('tecla9');
            tecla9.style.backgroundColor = '';

            break;
        case 'n':case 'N':

            const tecla10 = document.getElementById('tecla10');
            tecla10.style.backgroundColor = '';

            break;
        case 'm':case 'M':

            const tecla11 = document.getElementById('tecla11');
            tecla11.style.backgroundColor = '';

            break;
        case ',':

            const tecla12 = document.getElementById('tecla12');
            tecla12.style.backgroundColor = '';

            break;
        case '.':

            const tecla13 = document.getElementById('tecla13');
            tecla13.style.backgroundColor = '';

            break;
        case ';':

            const tecla14 = document.getElementById('tecla14');
            tecla14.style.backgroundColor = '';

            break;



        // TECLAS PRETAS
        case '2':

            const teclaA = document.getElementById('teclaA');
            teclaA.style.backgroundColor = '';

            break;

        case '3':

            const teclaB = document.getElementById('teclaB');
            teclaB.style.backgroundColor = '';

            break;

        case '5':

            const teclaC = document.getElementById('teclaC');
            teclaC.style.backgroundColor = '';

            break;

        case '6':

            const teclaD = document.getElementById('teclaD');
            teclaD.style.backgroundColor = '';

            break;

        case '7':

            const teclaE = document.getElementById('teclaE');
            teclaE.style.backgroundColor = '';

            break;

        case 'G':case 'g':

            const teclaF = document.getElementById('teclaF');
            teclaF.style.backgroundColor = '';

            break;

        case 'H':case 'h':

            const teclaG = document.getElementById('teclaG');
            teclaG.style.backgroundColor = '';

            break;

        case 'K':case 'k':

            const teclaH = document.getElementById('teclaH');
            teclaH.style.backgroundColor = '';

            break;

        case 'L':case 'l':

            const teclaI = document.getElementById('teclaI');
            teclaI.style.backgroundColor = '';

            break;

        case 'Ç':case 'ç':

            const teclaJ = document.getElementById('teclaJ');
            teclaJ.style.backgroundColor = '';

            break;

    }
});