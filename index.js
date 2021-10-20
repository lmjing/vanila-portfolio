'use strict';

import { historyRoutePush, initRoute } from "./router.js";

const appContent = document.getElementById('app-content');
initRoute(appContent);

window.onload = () => {
    const historyLinker = document.querySelectorAll('.history');

    historyLinker.forEach(el => {
        el.addEventListener('click', (event) => {
            const path = event.target.getAttribute('route');
            historyRoutePush(appContent, path);
        })
    })

}