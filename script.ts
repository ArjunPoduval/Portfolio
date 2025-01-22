document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.chess-menu a');
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#ffd700';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = 'gold';
        });
    });
});
