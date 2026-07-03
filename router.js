document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".nav-item");
    const pages = document.querySelectorAll(".page");

    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            let selectedMenuItem = event.currentTarget;
            let pageData = selectedMenuItem.dataset.page;

            pages.forEach(page => {
                page.classList.add("disabled");
            });

            const activePage = document.getElementById(pageData);
            if (activePage) {
                activePage.classList.remove("disabled");
            }

            menuItems.forEach(item => {
                item.querySelector('.nav-link').classList.remove('active', 'bg-dark', 'text-white');
                item.querySelector('.nav-link').classList.add('text-dark');
            });
            selectedMenuItem.querySelector('.nav-link').classList.add('active', 'bg-dark', 'text-white');
            selectedMenuItem.querySelector('.nav-link').classList.remove('text-dark');
        });
    });
});