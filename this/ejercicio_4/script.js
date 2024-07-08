function changeImage(element) {
    element.src = "https://via.placeholder.com/200/0000FF/808080";
    element.alt = "Nueva Imagen";
}



function showDescription(button) {
    let description = button.nextElementSibling;
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
}



function completeTask(button) {
    let taskItem = button.parentElement;
    let taskText = taskItem.querySelector('span');
    taskText.classList.toggle('completed');
}



function applyDiscount(button) {
    let productCard = button.parentElement;
    let priceElement = productCard.querySelector('.price');
    let currentPrice = parseFloat(priceElement.textContent.replace('$', ''));
    let newPrice = (currentPrice * 0.9).toFixed(2);
    priceElement.textContent = `$${newPrice}`;
}