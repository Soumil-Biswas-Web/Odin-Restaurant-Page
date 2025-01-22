// Function to create Menu grid items
const createMenuItem = (grid, item, price) => {
    let menu_item = document.createElement("div");
    menu_item.setAttribute("class", "menu_item");
    menu_item.textContent = item;
    grid.appendChild(menu_item);

    let menu_item_price = document.createElement("div");
    menu_item_price.setAttribute("class", "menu_item price");
    menu_item_price.textContent = price;
    grid.appendChild(menu_item_price);
}

const menu_items = [
    { section: "Menu Section",
        items: [
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
        ],
    },
    { section: "Menu Section",
        items: [
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
        ],
    },
    { section: "Menu Section",
        items: [
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
        ],
    },
    { section: "Menu Section",
        items: [
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
            {item: "menu_item", price: "price,"},
        ],
    },            
]

const menu = () => {
    // Create Main panel
    const menu = document.createElement("div");
    menu.setAttribute("class", "main");
    menu.setAttribute("id", "menu");
    menu.style.display = "none";    

    for (let menuItem of menu_items) {        
        // Create Menu panel heading
        const h2 = document.createElement("h2");
        h2.textContent = menuItem.section;
        menu.appendChild(h2);
        
        // Create Menu grid
        const menu_grid = document.createElement("div");
        menu_grid.setAttribute("class", "menu_grid");

        for (let itemThing of menuItem.items) {
            // Add menu Items using function        
            createMenuItem(menu_grid, itemThing.item, itemThing.price);
        }
        menu.appendChild(menu_grid);
    }

    return menu;
}

export default menu;