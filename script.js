const mainContainer = document.querySelector('main');

const productList = [
    {
        name: 'Kirkland Signature Vitamin C 1000mg 500 tablets',
        img: 'images/product-image/kirkland-vitaminc-1000mg.jpg',
        stock: true,
        id: 1

    },
    {
        name: 'Youtheory Collagen + biotin Enhanced formula 390 tablets',
        img: 'images/product-image/collagen.jfif',
        stock: false,
        id: 2
    },{
        name: 'Kirkland Signature Vitamin C 1000mg 500 tablets',
        img: 'images/product-image/kirkland-vitaminc-1000mg.jpg',
        stock: true,
        id: 1

    },
    {
        name: 'Youtheory Collagen + biotin Enhanced formula 390 tablets',
        img: 'images/product-image/collagen.jfif',
        stock: false,
        id: 2
    },{
        name: 'Youtheory Collagen + biotin Enhanced formula 390 tablets',
        img: 'images/product-image/collagen.jfif',
        stock: false,
        id: 2
    },{
        name: 'Kirkland Signature Vitamin C 1000mg 500 tablets',
        img: 'images/product-image/kirkland-vitaminc-1000mg.jpg',
        stock: true,
        id: 1

    },
    {
        name: 'Youtheory Collagen + biotin Enhanced formula 390 tablets',
        img: 'images/product-image/collagen.jfif',
        stock: false,
        id: 2
    }
];

let html = '';

productList.forEach((product) => {
    html += `   <div class="product-container" data-product-name=${product.name} data-product-img=${product.img}>
                    <img src="${product.img}" alt="product-image" height="350px" width="300px">
                    <div class="product-details">
                        <p> ${product.name}</p>
                        <p>stock available: ${product.stock ? 'yes' : 'no'}</p>
                    </div>
                </div>`;
});

mainContainer.innerHTML = html;
const productContainer = document.querySelectorAll('.product-container');

productContainer.forEach(product => {
    product.addEventListener('click', () => {
        console.log();
        const floatingProduct = document.createElement('div');
        floatingProduct.classList.add('floating-product');
        floatingProduct.innerHTML = `
            <div class="zoom-details">
                <img src="${product.dataset.productImg}" alt="product-image">
                <div class="details">
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
    });
    
})


