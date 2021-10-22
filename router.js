"use strict";

const homeTemplate = require("./src/views/home.hbs");
const appTemplate = require("./src/views/app.hbs");
const profileTemplate = require("./src/views/profile.hbs");

import handleHome from './src/components/Home';
import handleApp from './src/App';
import handleProfile from './src/components/Profile';

class Route {
    constructor(template, handleClass) {
        this.template = template();
        this.handle = handleClass;
    }
}

const routes = {
    '/': new Route(homeTemplate, handleHome),
    '/app': new Route(appTemplate, handleApp),
    '/profile': new Route(profileTemplate, handleProfile)
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