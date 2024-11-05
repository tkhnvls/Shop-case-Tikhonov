document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nav-link[data-category]');
    const productList = document.getElementById('product-list');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const selectedCategory = tab.getAttribute('data-category');
            const panes = productList.querySelectorAll('.tab-pane');

            panes.forEach(pane => {
                if (pane.getAttribute('data-category') === selectedCategory) {
                    pane.classList.add('show', 'active');
                } else {
                    pane.classList.remove('show', 'active');
                }
            });
        });
    });
});