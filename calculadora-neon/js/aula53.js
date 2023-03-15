// Fazer uma calculadora!! Desafio com um array de funções
const display_previus = document.querySelector(".display-previus");
const display_current = document.querySelector(".display-current");
const buttons = [...document.querySelectorAll('.container-buttons > button')];

// console.log(buttons)
let numbers_1 = '';
let numbers_2 = '';
let numbers_3 = '';
let op = [];
// console.log(typeof numbers_1.length);


const operators = [
    () => {
        console.log('entrou na função')
        let res = Number(numbers_2) + Number(numbers_1);
        display_current.innerHTML = res;
        numbers_3 = res;
        numbers_2 = '';
        numbers_1 = '';
    },
    () => {
        let res = Number(numbers_2) - Number(numbers_1);
        display_current.innerHTML = res;
        numbers_3 = res;
        numbers_2 = '';
        numbers_1 = '';
    },
    () => {
        let res = Number(numbers_2) * Number(numbers_1);
        display_current.innerHTML = res;
        numbers_3 = res;
        numbers_2 = '';
        numbers_1 = '';
    },
    () => {
        let res = Number(numbers_2) / Number(numbers_1);
        display_current.innerHTML = res;
        numbers_3 = res;
        numbers_2 = '';
        numbers_1 = '';
    },
    () => {
        let res = Number(numbers_2) % Number(numbers_1);
        display_current.innerHTML = res;
        numbers_3 = res;
        numbers_2 = '';
        numbers_1 = '';
    }
];

function operator() {

    // console.log(typeof op)
    switch (op[0]) {
        case "+":
            console.log('vai somar')
            operators[0]();
            break;
        case "-":
            console.log('vai subtrair')
            operators[1]();
            break;
        case "X":
            console.log('vai Multiplicar')
            operators[2]();
            break;
        case "/":
            console.log('vai dividir')
            operators[3]();
            break;
        case "%":
            console.log('vai resto da div')
            operators[4]();
            break;

        default:
            console.log('error')
    }

    if (op[1] == "=") {
        op = [];
    } else {
        op.shift()
        console.log(op)
    }
    // console.log(op)

    console.log('sera que continua')
}

buttons.map((element, index) => {
    element.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            console.log('continue');
        } else {
            display_previus.innerHTML += e.target.innerText;
        }


        if (e.target.innerText == "AC") {
            display_current.innerText = "";
            display_previus.innerText = "";
            numbers_1 = "";
            numbers_2 = "";
            numbers_3 = "";
        } else {
            if (e.target.className == "num") {
                numbers_1 += e.target.innerText;
                // console.log(e.target.className);

            } else {
                op.push(e.target.innerText);

                if (numbers_2.length == 0 && numbers_3.length == 0) {
                    numbers_2 = numbers_1;
                    numbers_1 = '';
                } else if (typeof (numbers_3) == "number") {
                    numbers_2 = numbers_3;
                    numbers_3 = '';
                }
                else {
                    operator();
                }

            }
        }

    })
})
