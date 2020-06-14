import '../styles/index.scss';
import 'bootstrap';

var Aos=require('aos');
Aos.init();



import 'jquery';
console.log('webpack starterkit');

// import 'mmenu-light';
// import './mmenu.polyfills';
// import './mmenu';

import MmenuLight from 'mmenu-light';

document.addEventListener("DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector( "#menu" )
        );


        const navigator = menu.navigation({
            title: "منو"
        });
        const drawer = menu.offcanvas({
            position: "right"
        });

        document.querySelector( 'a[href="#menu"]' )
            .addEventListener( 'click', ( evnt ) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);

// new Mmenu(document.querySelector('#menu'));
//
// document.addEventListener('click', function (evnt) {
//     var anchor = evnt.target.closest('a[href^="#/"]');
//     if (anchor) {
//         alert("Thank you for clicking, but that's a demo link.");
//         evnt.preventDefault();
//     }
// });