"use strict";

import routers from "./src/config/routers.js";

const initRoute = (element) => {
    activeRoute(element, '');

    // 새로고침 일어난 경우
    window.addEventListener('DOMContentLoaded', () => activeRoute(element));

    // link 눌려서 hash 변경된 경우
    window.onhashchange = () => activeRoute(element);
}

const historyRoutePush = async (element, hash) => {
    window.history.pushState({}, hash, `#${hash}`);
    activeRoute(element);
}

const activeRoute = async (element) => {
    const hash = location.hash.replace('#', '');
    const View = routers[hash];
    if (!View) {
        // TODO 아래 코드 삭제 후 Not found 페이지 이동으로 변경
        element.innerHTML = `${hash} Not Found!`;
        return;
    }
    const view = new View(element);
    await view.render();
    view.handle();
}

export {
    initRoute,
    historyRoutePush
}