import faker from 'faker';

const mount = (element) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    element.innerHTML = products;
};

// Situation #1
// We're running this file in dev and in isolation
// We want to immediately render the app
if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#dev-products-container');
    if (element) {
        mount(element);
    }
}

// Situation #2
// We're running this file in dev or production through the container app
// We want to defer the rendering of the app to the container
export { mount };