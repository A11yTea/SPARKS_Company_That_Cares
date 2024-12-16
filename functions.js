document.addEventListener("DOMContentLoaded", () => {
    // Target specific menu items that have submenus
    const menuItemsWithSubmenus = [
        { menuId: "our-services", submenuId: null },
        { menuId: "interested-in-us", submenuId: null } // Null handles multiple subitems directly inside
    ];

    menuItemsWithSubmenus.forEach(({ menuId, submenuId }) => {
        const menu = document.getElementById(menuId);
        const submenu = submenuId ? document.getElementById(submenuId) : menu.querySelector(".subitems");

        if (submenu) {
            // Show submenu on hover
            menu.addEventListener("mouseenter", () => {
                submenu.style.display = "flex"; // Show submenu
            });

            // Hide submenu on mouse leave
            menu.addEventListener("mouseleave", () => {
                submenu.style.display = "none"; // Hide submenu
            });
        }
    });
});

function activateLink(url) {
    window.location.href = url;
}