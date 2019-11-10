// На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER)
// И постоје 2 дугмета за наручивање одмах 

// 1. Дугмићи за наручивање повећавају бројач
// 2. Дугмићи за наручивање одмах ресетују бројач на нула и исписују додатну поруку 
//(Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
// Напомена:  X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

let count = 0;
let countButtons = document.getElementsByClassName('btn-order');
console.log(countButtons);
const displayCount = document.getElementById('counter');
for (let button of countButtons) {

    console.log(button);

    button.addEventListener('click', function () {
        count++;
        displayCount.innerHTML = count;
    })
};
var d = new Date();
let orderNowButtons = document.getElementsByClassName('btn-order-now');
console.log(orderNowButtons);
for (let button2 of orderNowButtons) {

    console.log(button2);

    button2.addEventListener('click', function () {

        count = 0;
        displayCount.innerHTML = 0;
        window.alert(`Narucili ste ${count} pica, ${d}`);
    })
};