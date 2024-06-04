const find_us = () => {
    const find_us = document.createElement("div");
    find_us.setAttribute("class", "main");
    find_us.setAttribute("id", "find_us");
    find_us.style.display = "none";

    const bg_panel = document.createElement("div");
    bg_panel.setAttribute("class", "bg_panel");

    const address = document.createElement("p");
    address.textContent = "Dummy Bulding, No. X, Dummy street name, Unknown Township, Given State, Pin-Code: XXXX-XXXX";
    bg_panel.appendChild(address);

    const phone_contact = document.createElement("div");
    

    const number = document.createElement("p");
    number.textContent = "XX-XXXXX-XXXXX"
    phone_contact.appendChild(number);

    bg_panel.appendChild(phone_contact);

    find_us.appendChild(bg_panel);

    return find_us;
}

export default find_us;