class ProductService {
fillData() {
    products.forEach(product => {
        // console.log(product)
        const parent: HTMLElement = document.getElementById('parent');
        const child: HTMLParagraphElement = document.createElement('p');
        child.innerText = product.title;
        parent.appendChild(child);
    })
}
}
new ProductService().fillData();
