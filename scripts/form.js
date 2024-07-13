document.addEventListener('DOMContentLoaded', function() {
    const productArray = [
        { name: 'Product 1' },
        { name: 'Product 2' },
        { name: 'Product 3' }
    ];

    const productSelect = document.getElementById('productName');

    productArray.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
