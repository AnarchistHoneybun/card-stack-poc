document.addEventListener('DOMContentLoaded', () => {
    const cardStack = document.querySelector('.card-stack');
    const cards = Array.from(document.querySelectorAll('.card'));
    const labelWidth = 50; // Width of the vertical label
    
    function adjustCardSizes() {
        const stackWidth = cardStack.offsetWidth;
        const totalLabelWidth = cards.length * labelWidth;
        const expandedWidth = stackWidth - totalLabelWidth + labelWidth; // Add one label width back for the expanded card
        
        cards.forEach((card, index) => {
            if (index === 0) {
                card.style.width = `${expandedWidth}px`;
            } else {
                card.style.width = `${labelWidth}px`;
            }
        });
    }

    function expandCard(card) {
        const stackWidth = cardStack.offsetWidth;
        const totalLabelWidth = cards.length * labelWidth;
        const expandedWidth = stackWidth - totalLabelWidth + labelWidth; // Add one label width back for the expanded card

        cards.forEach(c => {
            if (c === card) {
                c.style.width = `${expandedWidth}px`;
            } else {
                c.style.width = `${labelWidth}px`;
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