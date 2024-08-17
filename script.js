document.addEventListener('DOMContentLoaded', () => {
    const cardStack = document.querySelector('.card-stack');
    const cards = Array.from(document.querySelectorAll('.card'));
    const expandedWidth = 500; // Expanded width in pixels
    
    function adjustCardSizes() {
        const stackWidth = cardStack.offsetWidth;
        const remainingWidth = stackWidth - expandedWidth;
        const shrinkWidth = remainingWidth / (cards.length - 1);

        cards.forEach((card, index) => {
            if (index === 0) {
                card.style.width = `${expandedWidth}px`;
            } else {
                card.style.width = `${shrinkWidth}px`;
            }
        });
    }

    function expandCard(card) {
        const stackWidth = cardStack.offsetWidth;
        const remainingWidth = stackWidth - expandedWidth;
        const shrinkWidth = remainingWidth / (cards.length - 1);

        cards.forEach(c => {
            if (c === card) {
                c.style.width = `${expandedWidth}px`;
            } else {
                c.style.width = `${shrinkWidth}px`;
            }
        });
    }

    adjustCardSizes();
    window.addEventListener('resize', adjustCardSizes);

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => expandCard(card));
        card.addEventListener('mouseleave', adjustCardSizes);
    });
});