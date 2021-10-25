// 'use strict';

import View from "./View.js";

export default class App extends View {

    constructor($target) {
        super($target, 'app.html');
        console.log('app init');
    }
}