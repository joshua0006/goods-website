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
                            data-product-name="${product.name}" 
                            data-product-img="${product.img}" 
                            data-product-subName="${product.subName}">
                        <img src="${product.img}" alt="product-image" height="350px" width="300px">
                        <div class="product-details">
                            <p><strong> ${product.subName}</strong></p>
                            <p> ${product.name}</p>    
                        </div>
                    </div>`;
};
function renderProducts(productArray) {
    html = '';
    productArray.forEach(product => {
        buildHTML(product);
    });
    mainContainer.innerHTML = html;
};

mainContainer.addEventListener('click', event => {
    const product = event.target.closest('.product-container');
    if (product) {
        const floatingProduct = document.createElement('div');
        floatingProduct.classList.add('floating-product');
        floatingProduct.innerHTML = `
            <div class="zoom-details">
                <img src="${product.dataset.productImg}" alt="product-image">
                <div class="details">
                    <p><strong>${product.dataset.productSubname}</strong></p>
                    <p>${product.dataset.productName}</p>
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
        product.removeEventListener('click', productClickListener); // Remove existing listener if needed
        product.addEventListener('click', productClickListener);
    });
}
