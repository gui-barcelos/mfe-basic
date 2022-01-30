import faker from 'faker';

const mount = (element) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

    element.innerHTML = cartText;
};

// Situation #1
// We're running this file in dev and in isolation
// We want to immediately render the app
if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#dev-cart-container');
    if (element) {
        mount(element);
    }
}

// Situation #2
// We're running this file in dev or production through the container app
// We want to defer the rendering of the app to the container
export { mount };