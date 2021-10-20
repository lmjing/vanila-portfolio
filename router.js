const homeTemplate = require("./src/views/home.hbs");
const appTemplate = require("./src/views/app.hbs");

const Home = homeTemplate();
const App = appTemplate();

import handleHome from './src/components/Home.js';

const routes = {
    '/': Home,
    '/app': App
}
const handles = {
    '/': new handleHome(),
}

const initRoute = (element) => {
    renderHTML(element, routes['/'], handles['/']);

    window.onpopstate = () => {
        const pathName = window.location.pathname;
        renderHTML(element, routes[pathName], handles[pathName]);
    }
}

const historyRoutePush = (element, pathName) => {
    window.history.pushState(element, pathName);
    renderHTML(element, routes[pathName], handles[pathName]);
}

const renderHTML = (element, route, handle) => {
    element.innerHTML = route;
    console.log(handle);
    handle.init();
}

export {
    initRoute,
    historyRoutePush
}