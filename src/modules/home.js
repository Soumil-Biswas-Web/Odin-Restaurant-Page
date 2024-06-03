const home = () => {
    const home = document.createElement("div");
    home.setAttribute("class", "main");
    home.setAttribute("id", "home");
    const bg_panel = document.createElement("div");
    bg_panel.setAttribute("class", "bg_panel");
    const h1 = document.createElement("h1");
    h1.textContent = "hygge";
    bg_panel.appendChild(h1);

    home.appendChild(bg_panel);
    return home;
}

export default home;