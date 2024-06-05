import map from './images/image.png';
import phone_svg from './images/phone-in-talk-outline.svg';

const find_us = () => {
    // Create Main Panel
    const find_us = document.createElement("div");
    find_us.setAttribute("class", "main");
    find_us.setAttribute("id", "find_us");
    find_us.style.display = "none";

    // Create Box
    const bg_panel = document.createElement("div");
    bg_panel.setAttribute("class", "bg_panel");

    // Add address
    const address = document.createElement("p");
    address.textContent = "Dummy Bulding, No. X, Dummy street name, Unknown Township, Given State, Pin-Code: XXXX-XXXX";
    bg_panel.appendChild(address);

    // Add Contact details
    const phone_contact = document.createElement("div");
    phone_contact.setAttribute("id", "phone_contact");
    // Add phone svg image
    phone_contact.innerHTML = phone_svg;

    const number = document.createElement("p");
    number.textContent = "XX-XXXXX-XXXXX"
    phone_contact.appendChild(number);

    bg_panel.appendChild(phone_contact);

    // Add the map image
    const locationMap = new Image();
    locationMap.src = map;
    bg_panel.appendChild(locationMap);

    find_us.appendChild(bg_panel);

    return find_us;
}

export default find_us;