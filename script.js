// Переключение темы
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('.theme-switcher__icon');
const themeText = themeToggle.querySelector('.theme-switcher__text');

// Проверяем сохраненную тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeButton(savedTheme);
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('theme--dark')) {
        body.classList.remove('theme--dark');
        body.classList.add('theme--light');
        localStorage.setItem('theme', 'theme--light');
        updateThemeButton('theme--light');
    } else {
        body.classList.remove('theme--light');
        body.classList.add('theme--dark');
        localStorage.setItem('theme', 'theme--dark');
        updateThemeButton('theme--dark');
    }
});

function updateThemeButton(theme) {
    if (theme === 'theme--dark') {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Светлая тема';
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Темная тема';
    }
}

// Интерактивность для карточек товаров
document.querySelectorAll('.product-card__btn').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productTitle = productCard.querySelector('.product-card__title').textContent;
        
        // Анимация добавления в корзину
        this.textContent = 'Добавлено!';
        this.style.background = '#27ae60';
        
        setTimeout(() => {
            this.textContent = 'В корзину';
            this.style.background = '';
        }, 2000);
        
        console.log(`Товар "${productTitle}" добавлен в корзину`);
    });
});

// Интерактивность для карточек проектов
document.querySelectorAll('.project-card__btn').forEach(button => {
    button.addEventListener('click', function() {
        const projectCard = this.closest('.project-card');
        const projectTitle = projectCard.querySelector('.project-card__title').textContent;
        
        // Временная обратная связь
        const originalText = this.textContent;
        this.textContent = 'Открывается...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
            alert(`Проект "${projectTitle}" будет открыт в новом окне`);
        }, 1000);
    });
});