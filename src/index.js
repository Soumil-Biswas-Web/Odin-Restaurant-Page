import pageLoad from './modules/pageLoad';
import './style.css';
import tabSwitcher from "./modules/hideButtons";

// Load Content Page
const init = () => {
    var content = document.createElement("div");
    content.setAttribute("id", "content");
    content = pageLoad(content); 
    document.body.appendChild(content);
}

// Driver Code
console.log("Hello there.");

init();

console.log("DOM created");

// Execute after DOM is initialized

/*document.addEventListener('DOMContentLoaded', () => {
    tabSwitcher();
});*/

setTimeout(() => {
    tabSwitcher();
}, 0);
