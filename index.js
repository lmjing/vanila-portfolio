'use strict';

// import { historyRoutePush, initRoute } from "./router.js";
import { initRoute } from "./router.js";

const appContent = document.getElementById('container');
initRoute(appContent);

// window.onload = () => {
    // const historyLinker = document.querySelectorAll('.history');

    // historyLinker.forEach(el => {
    //     el.addEventListener('click', (event) => {
    //         const path = event.target.getAttribute('route');
    //         historyRoutePush(appContent, path);
    //     })
    // })

// }