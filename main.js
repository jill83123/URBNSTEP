import './assets/scss/all.scss';

const productImgs = import.meta.glob('./assets/images/products/*.png', {
  eager: true,
  import: 'default',
});
const productImgMap = {};

Object.entries(productImgs).forEach(([modulePath, imgUrl]) => {
  const fileName = modulePath.split('/').pop();
  productImgMap[fileName] = imgUrl;
});

const products = [
  { title: 'PLATFORM 404', price: 'NT$2,600', image: 'product.png' },
  { title: 'PLATFORM 404', price: 'NT$2,600', image: 'product-1.png' },
  { title: 'VM001', price: 'NT$2,600', image: 'product-2.png' },
  { title: 'Melty Kiss', price: 'NT$4,000', image: 'product-3.png' },
  { title: 'BOOMBLOK', price: 'NT$3,200', image: 'product-4.png' },
  { title: 'BOOMBLOK', price: 'NT$3,200', image: 'product-5.png' },
  { title: 'R:UNER', price: 'NT$4,000', image: 'product-6.png' },
  { title: 'Sugar Snap', price: 'NT$4,000', image: 'product-7.png' },
  { title: 'Neofoam', price: 'NT$4,000', image: 'product-8.png' },
];

const productList = document.querySelector('#productList');
const productCardTemp = document.querySelector('#productCardTemp');

if (productList) {
  products.forEach((product) => {
    const clone = productCardTemp.content.cloneNode(true);

    clone.querySelector('.title').textContent = product.title;
    clone.querySelector('.price').textContent = product.price;
    clone.querySelector('.card-img').src = productImgMap[product.image];
    clone.querySelector('.card-img').alt = product.title;

    productList.appendChild(clone);
  });
}

const relatedProducts = products.slice(2, 6);
const relatedProductList = document.querySelector('#relatedProductList');

if (relatedProductList) {
  relatedProducts.forEach((product) => {
    const clone = productCardTemp.content.cloneNode(true);

    clone.querySelector('.title').textContent = product.title;
    clone.querySelector('.price').textContent = product.price;
    clone.querySelector('.card-img').src = productImgMap[product.image];
    clone.querySelector('.card-img').alt = product.title;

    relatedProductList.appendChild(clone);
  });
}
