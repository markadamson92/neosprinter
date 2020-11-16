$(document).ready(function() {
    $('#autoWidth, #autoWidth2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth, #autoWidth2').removeClass('cS-hidden');
        } 
    });  
  });

const menu = document.querySelector('.menu');
const menuMain = menu.querySelector('.main-menu');
const goBack = menu.querySelector('.go-back');
const menuTrigger = document.querySelector('.mobile-menu-trigger');
const closeMenu = menu.querySelector('.mobile-menu-close');

let subMenu;

menuTrigger.addEventListener('click', () => {
    toggleMenu();
});

goBack.addEventListener('click', () => {
    hideSubMenu();
});

closeMenu.addEventListener('click', () => {
    toggleMenu();
});

document.querySelector('.menu-overlay').addEventListener('click', () => {
    toggleMenu();
});
function toggleMenu() {
    menu.classList.toggle('active');
    document.querySelector('.menu-overlay').classList.toggle('active');
}

menuMain.addEventListener('click', (e) => {
    if(!menu.classList.contains('active')) {
        return;
    }
    if(e.target.closest('.menu-item-has-children')) {
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
    }
});

function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.sub-menu');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft .5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.current-menu-title').innerHTML = menuTitle;
    menu.querySelector('.mobile-menu-header').classList.add('active');
}

function hideSubMenu() {
    subMenu.style.animation = 'slideRight .5s ease forwards';
    setTimeout(() => {
        subMenu.classList.remove('active');
    }, 300);
    menu.querySelector('.current-menu-title').innerHTML = '';
    menu.querySelector('.mobile-menu-header').classList.remove('active');
}

window.onresize = function () {
    if(this.innerWidth > 1024) {
        if(menu.classList.contains('active')) {
            toggleMenu();
        }
    }
}

/* POPUP MODAL NEWSLETTER */

const newsletter = document.querySelector('.newsletter-popup');
const closePopup = document.querySelector('.close-modal');

window.addEventListener('load', () => {
    setTimeout(() => {
        newsletter.classList.add('show');
    }, 5000);

});

closePopup.addEventListener('click', () => {
    newsletter.classList.remove('show');
});

