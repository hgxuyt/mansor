const today = new Date();
  const day = today.getDay(); // 0 - Воскресенье, 1 - Понедельник, ..., 6 - Суббота

  const hoursMap = {
    1: "Пн: 09:00 - 18:00",
    2: "Вт: 09:00 - 18:00",
    3: "Ср: 09:00 - 18:00",
    4: "Чт: 09:00 - 18:00",
    5: "Пт: 09:00 - 18:00",
    6: "Сб: 10:00 - 14:00",
    0: "Воскресенье: выходной"
  };
  document.getElementById('working-hours').textContent = hoursMap[day];
document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const symbol = button.querySelector('.symbol');

    if (content.classList.contains('open')) {
      content.style.maxHeight = null;
      content.classList.remove('open');
      symbol.textContent = '+';
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add('open');
      symbol.textContent = '−';
    }
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
    const modalContainer = document.querySelector('.modal-container'); // Добавляем селектор контейнера

    // Открытие модального окна по клику на кнопку
    menuButton.addEventListener('click', function () {
        modal.style.display = 'block';
        modalContainer.style.overflow = 'hidden'; // Запрещаем скроллинг
    });

    // Закрытие модального окна по клику на "x"
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        modalContainer.style.overflow = 'auto'; // Восстанавливаем скроллинг
    });

    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalContainer.style.overflow = 'auto'; // Восстанавливаем скроллинг
        }
    });
});

document.getElementById('openButton').addEventListener('click', function() {
  document.getElementById('searchContainer').style.display = 'flex';
});

document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('searchContainer').style.display = 'none';
});





