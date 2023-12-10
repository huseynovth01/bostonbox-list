// vribale with welector
const list = document.querySelector("#infinite-list");
var itemNumber = 0
var totalItems=100

// Add 20 items.
function loadItems() {
    for (let i = 0; i < 100; i++) {
        itemNumber ++
        const element = document.createElement('li')
        element.innerText = `${itemNumber} - indexli li elementi`;
        list.appendChild(element)
    }
}

// Detect when scrolled to bottom.
// scrollTop; // scrollHeight; // clientHeight
list.addEventListener("scroll", () => {
    console.log(list.scrollTop, "scrollTop");
    console.log(list.scrollHeight, "scrollHeight");
    console.log(list.clientHeight, "clientHeight");
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        loadItems();
    }
});

// Initially load some items.
loadItems()

// const list = document.querySelector("#infinite-list");
// var itemNumber = 0;
// var totalItems = 100; // Belirli bir sınır

// function loadItems() {
//     const itemsToAdd = 20;
//     for (let i = 0; i < itemsToAdd && itemNumber < totalItems; i++, itemNumber++) {
//         const element = document.createElement('li');
//         element.innerText = `${itemNumber + 1} - indexli li elementi`;
//         list.appendChild(element);
//     }
// }

// list.addEventListener("scroll", () => {
//     if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
//         loadItems();
//     }
// });

// loadItems();