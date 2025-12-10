document.addEventListener('DOMContentLoaded', function() {
    
    const projectsData = {
        1: {
            title: "Личный сайт",
            category: "HTML, CSS",
            date: "2025-10-04",
            description: "Проект, разработанный с фокусом на адаптивность и современные веб-стандарты. Использование HTML5 и CSS3 обеспечивает кроссбраузерную совместимость, интерактивные элементы и визуально привлекательные анимации.",
            features: [
                "Адаптивный и отзывчивый дизайн",
                "Современная и семантическая верстка",
                "Кроссбраузерная совместимость",
                "Оптимизация производительности",
                "Визуально привлекательные анимации и эффекты"
            ],
            liveLink: "https://example.com/project1",
            sourceLink: "https://github.com/awak8n/11-12-front-and-back",
            images: ["fns_1.jpg",]
        },
        2: {
            title: "Todo-приложение",
            category: "JavaScript",
            date: "2025-09-20",
            description: "Инструмент для организации задач, позволяющий пользователям добавлять, править, удалять и отслеживать выполнение пунктов списка дел. Прогресс сохраняется автоматически в памяти браузера.",
            features: [
                "Добавление и удаление задач",
                "Отметка выполненных задач",
                "Локальное хранение данных",
                "Фильтрация задач",
                "Адаптивный интерфейс"
            ],
            liveLink: "https://example.com/project2",
            sourceLink: "https://github.com/awak8n/11-12-front-and-back",
            images: ["sample-todo-app.png", ]
        },
        3: {
            title: "Интернет-магазин",
            category: "React",
            date: "2025-08-15",
            description: "Магазин разработан на React с использованием современных хуков и контекста. В данный момент на сайте ведутся технические работы, некоторые функции могут быть недоступны  ",
            features: [
                "Система корзины покупок",
                "Оформление заказов",
                "Фильтрация товаров",
                "Поиск по каталогу",
                "Адаптивный дизайн"
            ],
            liveLink: "https://example.com/project3",
            sourceLink: "https://github.com/awak8n/11-12-front-and-back",
            images: ["c67ee31b0898a987bcbce5a2086ec2db.jpg"]
        },
        4: {
            title: "Портфолио",
            category: "Bootstrap",
            date: "2025-07-10",
            description: "Портфолио сделанное с использованием фреймворка Bootstrap, является самым современным решение ",
            features: [
                "Bootstrap",
                "Адаптивная сетка",
                "Компоненты Bootstrap",
                "Оптимизация загрузки портфолио",
                "Совместимость с любым браузером"
            ],
            liveLink: "https://example.com/project4",
            sourceLink: "https://github.com/awak8n/11-12-front-and-back",
            images: ["41a95a177155071.64d18b45f1484.png"]
        },
        5: {
            title: "Приложение для тренировок",
            category: "JavaScript",
            date: "16-11-2025",
            description: "Приложение для планирования тренировки, платная подписка дает возможность выбрать дизайн ",
            features: [
                "Система отслеживания прогресса и спортивных результатов",
                "Календарь тренировок с напоминаниями",
                "Гибкая система подписки",
                "Интуитивно понятный интерфейс",
                "Быстрая работа и плавные анимации"
            ],
            liveLink: "https://example.com/project5",
            sourceLink: "https://github.com/awak8n/11-12-front-and-back",
            images: ["1693c1159858995.63a763a7132cd.jpg"]
        },
        6: {
            title: "Браузерная игра",
            category: "React",
            date: "20-11-2025",
            description: "Благодаря виртуальному DOM и эффективному ререндерингу, игра сохраняет отзывчивость даже при сложной анимации и большом количестве динамических элементов на сцене ",
            features: [
                "Увлекательный геймплей в реальном времени",
                "Несколько уровней сложности для разных категорий игроков",
                "Динамическая генерация контента для каждого сеанса",
                "Таблица лидеров для соревнований",
                "Достижения и награды"
            ],
            liveLink: "https://example.com",
            sourceLink: "https://github.com/awak8n/11-12-front-and-back",
            images: ["чат.jpg"]
        }
    };

    
    const projectModal = document.getElementById('projectModal');
    const closeProjectModal = document.getElementById('closeProjectModal');
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalCategory = document.getElementById('modalProjectCategory');
    const modalDate = document.getElementById('modalProjectDate');
    const modalDescription = document.getElementById('modalProjectDescription');
    const modalFeatures = document.getElementById('modalProjectFeatures');
    const modalMainImage = document.getElementById('modalMainImage');

    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-full');

    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            
            filterBtns.forEach(b => b.classList.remove('active'));
            
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    
    const viewDetailsBtns = document.querySelectorAll('.btn-view-details');
    
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectsData[projectId];
            
            if (project) {
                
                modalTitle.textContent = project.title;
                modalCategory.textContent = project.category;
                modalDate.textContent = project.date;
                modalDescription.textContent = project.description;
                
                
                modalFeatures.innerHTML = '';
                project.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    modalFeatures.appendChild(li);
                });
                
                
                modalMainImage.src = `../images/${project.images[0]}`;
                modalMainImage.alt = project.title;
                
                
                const projectLinks = document.querySelector('.project-links');
                projectLinks.innerHTML = '';
                
                
                if (project.liveLink && project.liveLink !== '#') {
                    const liveBtn = document.createElement('a');
                    liveBtn.href = project.liveLink;
                    liveBtn.target = '_blank';
                    liveBtn.rel = 'noopener noreferrer';
                    liveBtn.className = 'btn btn-primary';
                    liveBtn.innerHTML = 'Рабочая версия';
                    projectLinks.appendChild(liveBtn);
                }
                
                
                if (project.sourceLink && project.sourceLink !== '#') {
                    const sourceBtn = document.createElement('a');
                    sourceBtn.href = project.sourceLink;
                    sourceBtn.target = '_blank';
                    sourceBtn.rel = 'noopener noreferrer';
                    sourceBtn.className = 'btn btn-outline';
                    sourceBtn.innerHTML = 'Исходный код';
                    projectLinks.appendChild(sourceBtn);
                }
                
                
                projectModal.classList.add('active');
            }
        });
    });

    
    function closeProjectModalFunc() {
        projectModal.classList.remove('active');
    }

    closeProjectModal.addEventListener('click', closeProjectModalFunc);

    
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModalFunc();
        }
    });

    
    document.addEventListener('click', function(e) {
        if (e.target.closest('.thumbnail')) {
            const thumbnail = e.target.closest('.thumbnail');
            const imageIndex = thumbnail.getAttribute('data-image');
            
            
            document.querySelectorAll('.thumbnail').forEach(t => {
                t.classList.remove('active');
            });
            
            
            thumbnail.classList.add('active');
            
            
        }
    });

  
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const isVisible = navList.style.display === 'flex';
            navList.style.display = isVisible ? 'none' : 'flex';
            
            if (!isVisible) {
                navList.style.flexDirection = 'column';
                navList.style.position = 'absolute';
                navList.style.top = '100%';
                navList.style.left = '0';
                navList.style.right = '0';
                navList.style.background = 'var(--background)';
                navList.style.padding = '1rem';
                navList.style.boxShadow = 'var(--shadow-lg)';
                navList.style.gap = '1rem';
            }
        });
    }

    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    
    document.querySelectorAll('.project-card-full').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});