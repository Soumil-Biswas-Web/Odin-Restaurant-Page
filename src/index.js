import pageLoad from './modules/pageLoad';
import './style.css';

// Load Content Page
const init = () => {
    var content = document.createElement("div");
    content.setAttribute("id", "content");
    content = pageLoad(content);    
    return content;
}

// Driver Code
console.log("Hello there.");

document.body.appendChild(init());