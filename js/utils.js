// Inicializar AOS
AOS.init({
    duration: 800,
    once: false,
    easing: 'ease-out-quad'
});

// Filtro de categorias
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Atualizar botão ativo
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('bg-amber-100', 'font-medium');
            btn.classList.add('font-normal');
        });
        button.classList.add('bg-amber-100', 'font-medium');
        button.classList.remove('font-normal');

        // Filtrar itens
        const category = button.dataset.category;
        document.querySelectorAll('.category-section').forEach(section => {
            if (category === 'all' || section.dataset.category === category) {
                section.style.display = 'block';
                section.setAttribute('data-aos', 'zoom-in');
                AOS.refreshHard();
            } else {
                section.style.display = 'none';
            }
        });
    });
});

// Mostrar todos os itens inicialmente
document.querySelector('.category-btn[data-category="all"]').click();