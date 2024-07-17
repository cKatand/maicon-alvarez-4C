let count = 0;

function countCard() {
  const cardInput = document.getElementById('card-input');
  const card = cardInput.value.toUpperCase();
  cardInput.value = '';

  let countChange;
  switch (card) {
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
      countChange = 1;
      break;
    case '7':
    case '8':
    case '9':
      countChange = 0;
      break;
    case '10':
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      countChange = -1;
      break;
    default:
      alert('Valor de carta no valido. Porfavor ingrese un numero (2-10) o una letra (J, Q, K, A).');
      return;
  }

  count += countChange;
  const result = `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
  document.getElementById('result').textContent = result;
}