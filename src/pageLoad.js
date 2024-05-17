import header from "./header";

// Runs functions to create header, main, and footer elements
const pageLoad = (content) => {
    content.appendChild(header());

    return content;
}

export default pageLoad;