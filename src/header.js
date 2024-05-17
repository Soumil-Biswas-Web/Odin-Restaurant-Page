// Helper function to create elements with attributes
const createElementWithAttributes = (tag, attributes, textContent) => {
    const element = document.createElement(tag);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

// Creates header div and its elements
const header = () => {
    const header = document.createElement("header");

    // Create and append logo div
    const logo = createElementWithAttributes("div", { id: "logo" });
    header.appendChild(logo);

    // Create and append Navbar and nav buttons
    const navbar = createElementWithAttributes("div", { id: "navbar" });
    
    const buttons = [
        { id: "home_btn", text: "Home" },
        { id: "menu_btn", text: "Menu" },
        { id: "about_btn", text: "About" },
        { id: "find_us_btn", text: "Find Us" }
    ];

    buttons.forEach(buttonAttr => {
        const button = createElementWithAttributes("button", {id: buttonAttr.id}, buttonAttr.text);
        navbar.appendChild(button);
    });

    // Append navbar to header
    header.appendChild(navbar);

    return header;
}

export default header;