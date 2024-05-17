import header from "./header";
import home from "./home";
import menu from "./menu";
import about from "./about";
import find_us from "./findUs";
import footer from "./footer";

// Runs functions to create header, main, and footer elements
const pageLoad = (content) => {
    content.appendChild(header());

    content.appendChild(home());

    content.appendChild(menu());

    content.appendChild(about());

    content.appendChild(find_us());

    content.appendChild(footer());
    
    return content;
}

export default pageLoad;