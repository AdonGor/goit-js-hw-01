const priceButtleDroid = 3000;
let credits = 30000;
let numberOfDroids = prompt('Put numbers of droids for buy');
let totalPrice = 0;

if(numberOfDroids === null) {
    numberOfDroids = 'Отменено пользователем!';
    alert(numberOfDroids);
} else {
    numberOfDroids = Number(numberOfDroids);
    totalPrice = numberOfDroids * priceButtleDroid;
    if(totalPrice > credits) {
    alert('Недостаточно средств на счету!')
    } else {
        alert(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов`)
    }
}
