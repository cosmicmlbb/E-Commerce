const items = [
    {
        name: "Product 1",
        image: "img/tshirt.jpg",
        price: 19.99
    },
    {
        name: "Product 2",
        image: "img/tshirt.jpg",
        price: 29.99
    },
    {
        name: "Product 3",
        image: "img/tshirt.jpg",
        price: 39.99
    },
    {
        name: "Product 4",
        image: "img/tshirt.jpg",
        price: 19.99
    },
    {
        name: "Product 5",
        image: "img/tshirt.jpg",
        price: 19.99
    },
    {
        name: "Product 6",
        image: "img/tshirt.jpg",
        price: 19.99
    },
    {
        name: "Product 7",
        image: "img/tshirt.jpg",
        price: 19.99
    },
    {
        name: "Product 8",
        image: "img/tshirt.jpg",
        price: 19.99
    },
    {
        name: "Product 9",
        image: "img/tshirt.jpg",
        price: 19.99
    },
    {
        name: "Product 10",
        image: "img/tshirt.jpg",
        price: 19.99
    },
    {
        name: "Product 11",
        image: "img/tshirt.jpg",
        price: 19.99
    },
    {
        name: "Product 12",
        image: "img/tshirt.jpg",
        price: 19.99
    },
];

function generateItemHTML(item) {
    return `
        <div class="col-md-2">
            <div class="item-holder">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <h4 class="item-name">${item.name}</h4>
                <div class="item-price" style="margin-top: 15px;">₱${item.price.toFixed(2)}</div>
            </div>
        </div>
    `;
}


const itemContainer = document.getElementById("item-container");
items.forEach((item) => {
    const itemHTML = generateItemHTML(item);
    itemContainer.insertAdjacentHTML("beforeend", itemHTML);
});
