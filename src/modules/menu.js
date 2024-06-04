const createMenuItem = (grid, item, price) => {
    var menu_item = document.createElement("div");
    menu_item.setAttribute("class", "menu_item");
    menu_item.textContent = item;
    grid.appendChild(menu_item);

    var menu_item_price = document.createElement("div");
    menu_item_price.setAttribute("class", "menu_item price");
    menu_item_price.textContent = price;
    grid.appendChild(menu_item_price);
}

const menu = () => {
    const menu = document.createElement("div");
    menu.setAttribute("class", "main");
    menu.setAttribute("id", "menu");
    menu.style.display = "none";    

    const h2 = document.createElement("h2");
    menu.appendChild(h2);

    const menu_grid = document.createElement("div");
    menu_grid.setAttribute("class", "menu_grid");

    createMenuItem(menu_grid, "menu_item", "price");
    createMenuItem(menu_grid, "menu_item", "price");
    createMenuItem(menu_grid, "menu_item", "price");
    createMenuItem(menu_grid, "menu_item", "price");

    menu.appendChild(menu_grid);

    return menu;
}

export default menu;