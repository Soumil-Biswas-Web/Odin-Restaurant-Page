const tabSwitcher = () => {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const findUs = document.querySelector("#find_us");

    if (!home || !menu || !findUs) {
        console.error("One or more tab content elements are missing.");
        return;
    }

    const pageArray = [home, menu, findUs];

    const hideButtons = (div_name) => {
        console.log(pageArray);
        for (var page of pageArray){
            if (page.id === div_name){
                page.style.display = 'flex';
            }
            else {
                page.style.display = 'none';
            }
        }
    }

    const home_btn = document.querySelector("#home_btn");
    const menu_btn = document.querySelector("#menu_btn");
    const findUs_btn = document.querySelector("#find_us_btn");

    if (!home_btn || !menu_btn || !findUs_btn) {
        console.error("One or more tab buttons are missing.");
        return;
    }

    home_btn.addEventListener("click", () => hideButtons("home"));
    menu_btn.addEventListener("click", () => hideButtons("menu"));
    findUs_btn.addEventListener("click", () => hideButtons("find_us"));
}

export default tabSwitcher;