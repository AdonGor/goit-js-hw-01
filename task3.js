const ADMIN_PASSWORD = '123456';
let message = prompt('введите пароль');

if(ADMIN_PASSWORD === message) {
    message = 'Добро пожаловать!';
}
else if(message === null) {
    message = 'Отменено пользователем!';
}
else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
console.log(`${message}`);