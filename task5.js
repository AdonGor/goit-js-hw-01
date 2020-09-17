let countryInput = prompt ('введите название страны');
const normalizedcountryInput = countryInput.toLowerCase();
let deliverPrice = 0;

switch(normalizedcountryInput) {
    case 'china':
        deliverPrice = 100;
        break;
    case 'chili':
        deliverPrice = 250;
        break;
    case 'avstralia':
        deliverPrice = 170;
        break;
    case 'india':
        deliverPrice = 80;
        break; 
    case 'yamajka':
        deliverPrice = 120;
        break;   
    default:
        alert('В вашей стране доставка не доступна');    
}
if(deliverPrice > 0) {
    alert(`Доставка в ${countryInput} будет стоить ${deliverPrice} кредитов`);
}