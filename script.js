document.querySelectorAll('.rating').forEach(rating => {
    const stars = rating.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            stars.forEach(s => {
                s.classList.toggle('selected', parseInt(s.getAttribute('data-value')) <= value);
            });

            // Aqui você pode salvar a nota se quiser, por exemplo:
            console.log(`Nota para ${rating.dataset.anime}: ${value} estrelas`);
        });
    });
});
