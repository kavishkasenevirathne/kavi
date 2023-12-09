document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById('menu');

    // Hide the menu by default
    menu.style.display = 'none';

    // Toggle menu visibility when the menu icon is clicked
    document.querySelector('.menu-icon').addEventListener('click', function () {
        // Toggle menu and menu items visibility
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';

        // Toggle the visibility of individual menu items
        var menuItems = menu.getElementsByTagName('a');
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = (menuItems[i].style.display === 'none' || menuItems[i].style.display === '') ? 'block' : 'none';
        }
    });
});
