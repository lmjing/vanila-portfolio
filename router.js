"use strict";

import handleHome from '/src/components/Home.js';
import handleApp from '/src/App.js';
import handleProfile from '/src/components/Profile.js';

class View {
    constructor(route, handleClass) {
        this.route = route;
        this.handle = handleClass;
    }
}

const views = {
    '/': new View('/src/views/home.html', handleHome),
    '/app': new View('/src/views/app.html', handleApp),
    '/profile': new View('/src/views/profile.html', handleProfile)
}

const initRoute = (element) => {
    changeRoute(element, '/');

    window.onpopstate = () => {
        const path = window.location.pathname;
        changeRoute(element, path);
    }
}

const historyRoutePush = (element, path) => {
    window.history.pushState({}, path);
    changeRoute(element, path);
}

const changeRoute = async (element, path) => {
    await render(element, path);
    activeHandler(element, path);
}

const render = async (root, path) => {
    try {
        const url = views[path].route;
        if(!url) {
            root.innerHTML = `${path} Not Found!`;
            return;
        }
        
        const res = await fetch(url);
        root.innerHTML = await res.text();
    } catch(e) {
        console.log(e);
    }
};

const activeHandler = (root, path) => {
    try {
        const { handle } = views[path];
        new handle(root);
    } catch(e) {
        console.log(e);
    }
}

export {
    initRoute,
    historyRoutePush
}