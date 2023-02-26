const productsInfo = JSON.parse(products);

const content = document.querySelector('.content');

productsInfo.forEach(element => {
    const id = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h2');
    const description = document.createElement('p');
    const price = document.createElement('p');

    image.src = element.image;
    name.textContent = element.name;
    description.textContent = element.description;
    price.textContent = element.price;

    content.appendChild(id);
    id.appendChild(image);
    id.appendChild(name);
    id.appendChild(description);
    id.appendChild(price);
});