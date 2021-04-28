var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function(){
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
         header.style.height = 'auto';
    }
    else{
         header.style.height = null;
        }
}

var menuItems = document.querySelectorAll('.nav .sub-nav a[href*="/SinhSinhRestaurant"]');
for (let index = 0; index < menuItems.length; index++) {
    var menuItem = menuItems[index];

    menuItem.onclick = function () {
        header.style.height = null;
    }
}