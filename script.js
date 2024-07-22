const mainContainer = document.querySelector('main');
const allProductButton = document.querySelector('.all-products');
const vitaminsButton = document.querySelector('.vitamins');
const perfumesButton = document.querySelector('.perfumes');

renderProducts(productList);

allProductButton.addEventListener('click', () => {
    renderProducts(productList);
});

vitaminsButton.addEventListener('click', () => {
    const filteredProducts = productList.filter(product => product.class === 'vitamins');
    renderProducts(filteredProducts);
});

perfumesButton.addEventListener('click', () => {
    const filteredProducts = productList.filter(product => product.class === 'perfumes');
    renderProducts(filteredProducts);
});


function buildHTML(product){
    html += `   <div class="product-container"
                    data-product-shipsFrom="${product['Ships From']}"
                    data-product-stock="${product.stock}" 
                    data-product-brand="${product.Brand}">
                    <img src="${product.img}" alt="product-image" height="350px" width="300px">
                    <div class="product-details">
                        <p><strong>${product.subName}</strong></p>
                        <p>${product.name}</p>    
                    </div>
                </div>
`;
};
function renderProducts(productArray) {
    html = '';
    productArray.forEach(product => {
        buildHTML(product);
    });
    mainContainer.innerHTML = html;
};

mainContainer.addEventListener('click', event => {
    console.log(productList);
    const product = event.target.closest('.product-container');
    if (product) {
        const imgSrc = product.querySelector('img').src;
        const productName = product.querySelector('.product-details p:nth-child(2)').textContent;
        const floatingProduct = document.createElement('div');
        const isStock = product.dataset.productStock ? "available" : "not available";
        floatingProduct.classList.add('floating-product');
        floatingProduct.innerHTML = `
            <div class="zoom-details">
                <img src="${imgSrc}" alt="product-image">
                <div class="details">
                    <p><strong>${productName}</strong></p>
                    <p>Stock: ${isStock}</p>
                    <p>Brand: ${product.dataset.productBrand}</p> 
                </div>
                <p class="close-floating">x</p>
            </div>
        `;
   
        const closeFloating = floatingProduct.querySelector('.close-floating');
        closeFloating.addEventListener('click', () => {
            floatingProduct.remove();
        });

        document.body.appendChild(floatingProduct);
    }
});


function reattachProductListeners() {
    const productContainer = document.querySelectorAll('.product-container');
    productContainer.forEach(product => {
        product.removeEventListener('click', productClickListener); 
        product.addEventListener('click', productClickListener);
    });
}
