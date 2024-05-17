import header from "./header";
import footer from "./footer";

// Runs functions to create header, main, and footer elements
const pageLoad = (content) => {
    content.appendChild(header());

    content.appendChild(footer());
    return content;
}

export default pageLoad;