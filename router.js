"use strict";

import handleHome from '/src/components/Home.js';
import handleApp from '/src/App.js';
import handleProfile from '/src/components/Profile.js';

class View {
    constructor(tmpltUrl, handleClass) {
        this.tmpltUrl = tmpltUrl;
        this.handle = handleClass;
    }
}

const views = {
    '': new View('/src/views/home.html', handleHome),
    'app': new View('/src/views/app.html', handleApp),
    'profile': new View('/src/views/profile.html', handleProfile)
}

const initRoute = (element) => {
    changeRoute(element, '');

    // 새로고침 일어난 경우
    window.addEventListener('DOMContentLoaded', () => changeRoute(element));
    
    // link 눌려서 hash 변경된 경우
    window.onhashchange = () => {
        changeRoute(element);
    }
}

const historyRoutePush = (element, hash) => {
    window.history.pushState({}, hash, `#${hash}`);
    changeRoute(element, hash);
}

const changeRoute = async (element) => {
    const hash = location.hash.replace('#', '');

    await render(element, hash);
    activeHandler(element, hash);
}

const render = async (root, hash) => {
    try {
        const url = views[hash].tmpltUrl;
        if(!url) {
            root.innerHTML = `${hash} Not Found!`;
            return;
        }
        
        const res = await fetch(url);
        root.innerHTML = await res.text();
    } catch(e) {
        console.log(e);
    }
};

const activeHandler = (root, hash) => {
    try {
        const { handle } = views[hash];
        new handle(root);
    } catch(e) {
        console.log(e);
    }
}

export {
    initRoute,
    historyRoutePush
}