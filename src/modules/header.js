// Creates header div and its elements
const header = () => {
    const header = document.createElement("header");

    // Create and append logo div
    const logo = document.createElement("div");
    logo.setAttribute("id", "logo")
    logo.textContent = "HYGGE";
    header.appendChild(logo);

    // Create and append Navbar and nav buttons
    const navbar = document.createElement("div");
    navbar.setAttribute("id", "navbar");
    
    const home_btn = document.createElement("button");
    home_btn.setAttribute("id", "home_btn");
    home_btn.textContent = "Home";
    navbar.appendChild(home_btn);

    const menu_btn = document.createElement("button");
    menu_btn.setAttribute("id", "menu_btn");
    menu_btn.textContent = "Menu";
    navbar.appendChild(menu_btn);

    const find_us_btn = document.createElement("button");
    find_us_btn.setAttribute("id", "find_us_btn");
    find_us_btn.textContent = "Fnd Us";
    navbar.appendChild(find_us_btn);

    // Append navbar to header
    header.appendChild(navbar);

    console.log("navbar lodaed.");
    return header;
}

export default header;