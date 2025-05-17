 // Функция для получения корзины из localStorage или создания новой
  function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  // Функция для сохранения корзины
  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Обработчик для кнопок "В корзину"
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const carId = button.getAttribute('data-car-id');
      const carName = button.getAttribute('data-car-name');
      const carPrice = button.getAttribute('data-car-price');
      const carImage = button.getAttribute('data-car-image');

      const cart = getCart();

      // Проверка, есть ли уже этот товар в корзине
      const existingItemIndex = cart.findIndex(item => item.id === carId);
      if (existingItemIndex !== -1) {
        // Если есть, увеличиваем количество
        cart[existingItemIndex].quantity += 1;
      } else {
        // Если нет, добавляем новый товар
        cart.push({
          id: carId,
          name: carName,
          price: carPrice,
          image: carImage,
          quantity: 1
        });
      }

      saveCart(cart);
      alert(`${carName} добавлено в корзину`);
    });
  });