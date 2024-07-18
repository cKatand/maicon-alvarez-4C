let count = 0;

function countCard() {
  const cardInput = document.getElementById('card-input');
  const card = cardInput.value.toUpperCase();
  cardInput.value = '';

  const cards = card.split(',');
  for (const c of cards) {
    let countChange;
    switch (c) {
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
        alert('Invalid card value. Please enter a number (2-10) or a letter (J, Q, K, A).');
        return;
    }
    count += countChange;
  }

  const result = `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
  document.getElementById('result').textContent = result;
}