document.addEventListener("DOMContentLoaded", function () {
  const productModal = document.getElementById("productModal");
  const closeProductModal = document.getElementById("closeProductModal");

  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalloshad = document.getElementById("modalloshad");
  const modalDesc = document.getElementById("modalDesc");
  const modalPrice = document.getElementById("modalPrice");
  const modalBuyBtn = document.getElementById("modalBuyBtn");
  const modaldvigatel = document.getElementById("modaldvigatel");
  

  document.querySelectorAll(".product").forEach(product => {
    product.addEventListener("click", () => {
      const name = product.dataset.name;
      const desc = product.dataset.desc;
      const loshad = product.dataset.loshad;
      const price = parseInt(product.dataset.price);
      const img = product.dataset.img;
      const dvigatel = product.dataset.dvigatel;

      modalImg.src = img;
      modalloshad.textContent = loshad;
      modalTitle.textContent = name;
      modaldvigatel.textContent = dvigatel;
      modalDesc.textContent = desc;
      modalPrice.textContent = price.toLocaleString('ru-RU') + " руб.";

      modalBuyBtn.onclick = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existing = cart.find(item => item.name === name);
        if (existing) {
          existing.quantity++;
        } else {
          cart.push({ name, description: desc, price, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`"${name}" добавлен в корзину`);
        productModal.style.display = "none";
      };

      productModal.style.display = "block";
    });
  });

  closeProductModal.onclick = () => {
    productModal.style.display = "none";
  };

  window.addEventListener('click', function (event) {
    if (event.target === productModal) {
      productModal.style.display = 'none';
    }
  });
});


document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const productName = btn.dataset.name; // например, 'Porsche 911'
    const productPrice = parseFloat(btn.dataset.price); // например, 50000

    // Получить текущий массив товаров из localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Проверить, есть ли уже такой товар (по имени или ID)
    const existing = cart.find(item => item.name === productName);
    if (existing) {
      existing.quantity += 1; // увеличить количество
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    // Сохранить обратно
    localStorage.setItem('cart', JSON.stringify(cart));
  });
});

document.addEventListener("DOMContentLoaded", function () {
 // Get all toggle buttons
  const toggleButtons = document.querySelectorAll(".toggle-button");

  // Add click event listener to each button
  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the parent footer section
      const footerSection = this.closest(".footer-section");

      // Get the content section
      const contentSection = footerSection.querySelector(".section-content");

      // Toggle the hidden attribute
      const isHidden = contentSection.hasAttribute("hidden");

      if (isHidden) {
        contentSection.removeAttribute("hidden");
        this.setAttribute("aria-expanded", "true");
      } else {
        contentSection.setAttribute("hidden", "");
        this.setAttribute("aria-expanded", "false");
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');

  // Открытие модального окна по клику на кнопку
  menuButton.addEventListener('click', function () {
      modal.style.display = 'block';
  });

  // Закрытие модального окна по клику на "x"
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });

  // Закрытие модального окна при клике вне его содержимого
  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});
document.getElementById('openButton').addEventListener('click', function() {
document.getElementById('searchContainer').style.display = 'flex';
});

document.getElementById('closeButton').addEventListener('click', function() {
document.getElementById('searchContainer').style.display = 'none';
});

 // Массив идентификаторов контейнеров
 const scrollContainerIds = ['scrollContainerM', 'scrollContainerX', 'scrollContainerI'];

 scrollContainerIds.forEach(id => {
     const scrollContainer = document.getElementById(id);
     
     // Обработчик события для прокрутки
     scrollContainer.addEventListener('wheel', (event) => {
         event.preventDefault();
         scrollContainer.scrollBy({
             left: event.deltaY < 0 ? -500 : 500,
             behavior: 'smooth'
         });
     });
 });
document.getElementById('m2').onclick = function () {
    window.location.href = 'm/m2/index.html'; // Укажите путь вашего HTML файла
};

// Обработчик для всех кнопок добавления в корзину
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.onclick = () => {
    const id = btn.dataset.carId;
    const name = btn.dataset.carName;
    const price = parseFloat(btn.dataset.carPrice);
    const image = btn.dataset.carImage;

    const existingItem = cart.find(i => i.id === id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id, name, price, image, quantity: 1 });
    }
    saveCart();
  };
});
const products = [
  { id: 1, name: 'Товар 1', price: 1000, img: 'https://via.placeholder.com/150x100?text=Товар+1' },
  { id: 2, name: 'Товар 2', price: 2000, img: 'https://via.placeholder.com/150x100?text=Товар+2' },
  { id: 3, name: 'Товар 3', price: 1500, img: 'https://via.placeholder.com/150x100?text=Товар+3' },
];

const productsDiv = document.getElementById('products');

products.forEach(p => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Цена: ${p.price} руб.</p>
    <button onclick="addToCart(${p.id})">Добавить в корзину</button>
  `;
  productsDiv.appendChild(div);
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ id, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Товар добавлен в корзину');
}