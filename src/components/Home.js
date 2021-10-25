'use strict';

import { historyRoutePush } from "../../router.js";
import View from "./View.js";

export default class Home extends View {

    constructor($target) {
        super($target, 'home.html');
    }

    handle() {
        const element = this.$target;
        const button = element.querySelector('button');
        button.addEventListener('click', function () {
            historyRoutePush(element, 'profile');
        });
    }
}