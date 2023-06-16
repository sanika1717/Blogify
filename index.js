(() => {
    const openNavMenu = document.querySelector(".open-nav-menu"),
        closeNavMenu = document.querySelector(".close-nav-menu"),
        navMenu = document.querySelector(".main-menu"),
        menuOverlay = document.querySelector(".menu-overlay");
    mediaSize = 991;



    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    //    This line closes the nav by clicking outside
    menuOverlay.addEventListener("click", toggleNav)



    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle(".hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") &&
            window.innerWidth <= mediaSize) {

            // this will prevent bdefault anchor click behavior  
            event.preventDefault();  
            const menuItemChild = event.target.parentElement;
            // if menuItemChild is opened, collpse it

            if (menuItemChild.classList.contains("active")) {
                collapseSubMenu();
            }
            else {
                // this line will collapse opened tray
                if (navMenu.querySelector(".menu-item-child.active")) {
                    collapseSubMenu();
                }

                // expands sub menu

                menuItemChild.classList.add("active");
                const subMenu = menuItemChild.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }

    });

    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-child.active .sub-menu")
            .removeAttribute("style");
        navMenu.querySelector(".menu-item-child.active")
            .classList.remove("active");
    }

    function resizeFix(){
        // This line will tell the navMenu to close if it open, 
        if(navMenu.classList.contains("open")) {
            toggleNav();
        }

// if menu-item-child is expanded, collapse it
if(navMenu.querySelector(".menu-item-child.active")){
    collapseSubMenu();
}

    }

    window.addEventListener("resize", function(){
        if(this.innerWidth > mediaSize){
            resizeFix();

        }
    })

})();