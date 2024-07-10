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
            tecla1.style.backgroundColor = 'gray';

            break;
        case 'w':case 'W':

            const tecla2 = document.getElementById('tecla2');
            tecla2.style.backgroundColor = 'gray';

            break;
        case 'e':case 'E':

            const tecla3 = document.getElementById('tecla3');
            tecla3.style.backgroundColor = 'gray';

            break;
        case 'r':case 'R':

            const tecla4 = document.getElementById('tecla4');
            tecla4.style.backgroundColor = 'gray';

            break;
        case 't':case 'T':

            const tecla5 = document.getElementById('tecla5');
            tecla5.style.backgroundColor = 'gray';

            break;
        case 'y':case 'Y':
            const tecla6 = document.getElementById('tecla6');
            tecla6.style.backgroundColor = 'gray';
            break;

        case 'u':case 'U':

            const tecla7 = document.getElementById('tecla7');
            tecla7.style.backgroundColor = 'gray';

            break;
        case 'v':case 'V':

            const tecla8 = document.getElementById('tecla8');
            tecla8.style.backgroundColor = 'gray';

            break;
        case 'b':case 'B':

            const tecla9 = document.getElementById('tecla9');
            tecla9.style.backgroundColor = 'gray';

            break;
        case 'n':case 'N':

            const tecla10 = document.getElementById('tecla10');
            tecla10.style.backgroundColor = 'gray';

            break;
        case 'm':case 'M':

            const tecla11 = document.getElementById('tecla11');
            tecla11.style.backgroundColor = 'gray';

            break;
        case ',':

            const tecla12 = document.getElementById('tecla12');
            tecla12.style.backgroundColor = 'gray';

            break;
        case '.':

            const tecla13 = document.getElementById('tecla13');
            tecla13.style.backgroundColor = 'gray';

            break;
        case ';':

            const tecla14 = document.getElementById('tecla14');
            tecla14.style.backgroundColor = 'gray';

            break;



        // TECLAS PRETAS
        case '2':

            const teclaA = document.getElementById('teclaA');
            teclaA.style.backgroundColor = 'black';

            break;

        case '3':

            const teclaB = document.getElementById('teclaB');
            teclaB.style.backgroundColor = 'black';

            break;

        case '5':

            const teclaC = document.getElementById('teclaC');
            teclaC.style.backgroundColor = 'black';

            break;

        case '6':

            const teclaD = document.getElementById('teclaD');
            teclaD.style.backgroundColor = 'black';

            break;

        case '7':

            const teclaE = document.getElementById('teclaE');
            teclaE.style.backgroundColor = 'black';

            break;

        case 'G':case 'g':

            const teclaF = document.getElementById('teclaF');
            teclaF.style.backgroundColor = 'black';

            break;

        case 'H':case 'h':

            const teclaG = document.getElementById('teclaG');
            teclaG.style.backgroundColor = 'black';

            break;

        case 'K':case 'k':

            const teclaH = document.getElementById('teclaH');
            teclaH.style.backgroundColor = 'black';

            break;

        case 'L':case 'l':

            const teclaI = document.getElementById('teclaI');
            teclaI.style.backgroundColor = 'black';

            break;

        case 'Ç':case 'ç':

            const teclaJ = document.getElementById('teclaJ');
            teclaJ.style.backgroundColor = 'black';

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