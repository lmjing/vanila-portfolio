"use strict";

const homeTemplate = require("./src/views/home.hbs");
const appTemplate = require("./src/views/app.hbs");

import handleHome from './src/components/Home';
import handleApp from './src/App';

class Route {
    constructor(template, handleClass) {
        this.template = template();
        this.handle = handleClass;
    }
}

const routes = {
    '/': new Route(homeTemplate, handleHome),
    '/app': new Route(appTemplate, handleApp),
}

const initRoute = (element) => {
    changeRoute(element, routes['/']);

    window.onpopstate = () => {
        const pathName = window.location.pathname;
        changeRoute(element, routes[pathName]);
    }
}

const historyRoutePush = (element, pathName) => {
    window.history.pushState({}, pathName);
    changeRoute(element, routes[pathName]);
}

const changeRoute = (element, route) => {
    element.innerHTML = route.template;
    new route.handle(element);
}

export {
    initRoute,
    historyRoutePush
}