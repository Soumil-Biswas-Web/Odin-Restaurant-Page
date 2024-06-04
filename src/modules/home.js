const home = () => {
    // Create main panel
    const home = document.createElement("div");
    home.setAttribute("class", "main");
    home.setAttribute("id", "home");

    // Create box
    const bg_panel = document.createElement("div");
    bg_panel.setAttribute("class", "bg_panel");

    // Items inside box
    const h1 = document.createElement("h1");
    h1.textContent = "hygge";
    bg_panel.appendChild(h1);

    var p = document.createElement("p");
    p.textContent = "/ˈh(j)uːɡə,ˈhʊɡə/";
    bg_panel.appendChild(p);

    var br = document.createElement("br");
    bg_panel.appendChild(br);

    var p = document.createElement("p");
    p.textContent = "a quality of cosiness and comfortable conviviality that engenders a feeling of contentment or well-being (regarded as a defining characteristic of Danish culture).";
    bg_panel.appendChild(p);

    home.appendChild(bg_panel);

    // Text below Box
    const h3 = document.createElement("h3");
    h3.textContent = "A cafe that speaks of comfort, coziness, conviviality and contentment.";
    home.appendChild(h3);

    return home;
}

export default home;