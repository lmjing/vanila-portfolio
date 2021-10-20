const homeTemplate = require("./src/views/home.hbs");
const appTemplate = require("./src/views/app.hbs");

const Home = homeTemplate();
const App = appTemplate();

import handleHome from './src/components/Home';
import handleApp from './src/App';

const routes = {
    '/': Home,
    '/app': App
}
const handles = {
    '/': handleHome,
    '/app': handleApp
}

const initRoute = (element) => {
    changeRoute(element, routes['/'], handles['/']);

    window.onpopstate = () => {
        const pathName = window.location.pathname;
        changeRoute(element, routes[pathName], handles[pathName]);
    }
}

const historyRoutePush = (element, pathName) => {
    window.history.pushState({}, pathName);
    changeRoute(element, routes[pathName], handles[pathName]);
}

const changeRoute = (element, route, handle) => {
    element.innerHTML = route;
    new handle(element);
}

export {
    initRoute,
    historyRoutePush
}