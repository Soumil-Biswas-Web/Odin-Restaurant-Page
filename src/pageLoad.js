import header from "./header";

// Runs functions to create header, main, and footer elements
const pageLoad = (content) => {
    content.appendchild(header());

    return content;
}

export default pageLoad;