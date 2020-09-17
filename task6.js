let inputNumber = 0;
let total = 0;

do {
    // if (inputNumber !== Number) {
    //     alert('Было введено не число, попробуйте еще раз');
    // }
    inputNumber = prompt('введите число');
    inputNumber = Number(inputNumber);
    total += inputNumber;
    alert(`${total}`);
} while (inputNumber > 0);
alert(`Общая сумма чисел равна ${total}`);

