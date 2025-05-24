document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const modal = document.getElementById('menumodal');
    const closeModal = document.getElementById('closeModal');

    if (menuButton && modal && closeModal) {
        menuButton.addEventListener('click', function () {
            modal.style.display = 'block';
        });

        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

// Инициализация корзины из localStorage или пустого массива
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Функция для сохранения корзины
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCartItems(); // обновляем отображение корзины
}

// Функция для отображения товаров в корзине
function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalSpan = document.getElementById('cart-total');

  cartItemsContainer.innerHTML = ''; // очистка

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
    totalSpan.textContent = '0';
    return;
  }

  let totalSum = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item'; // можно стилизовать через CSS
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="100">
      <div class="item-details">
        <h3>${item.name}</h3>
        <p>Цена: ${item.price} руб.</p>
        <p>Количество: ${item.quantity}</p>
        <button data-id="${item.id}" class="decrease">-</button>
        <button data-id="${item.id}" class="increase">+</button>
        <button data-id="${item.id}" class="remove">Удалить</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemDiv);
    totalSum += item.price * item.quantity;
  });

  totalSpan.textContent = totalSum;
  attachCartButtons();
}

// Обработчики для кнопок в корзине
function attachCartButtons() {
  document.querySelectorAll('.decrease').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      const item = cart.find(i => i.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          cart = cart.filter(i => i.id !== id);
        }
        saveCart();
      }
    };
  });
  document.querySelectorAll('.increase').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      const item = cart.find(i => i.id === id);
      if (item) {
        item.quantity++;
        saveCart();
      }
    };
  });
  document.querySelectorAll('.remove').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      cart = cart.filter(i => i.id !== id);
      saveCart();
    };
  });
}