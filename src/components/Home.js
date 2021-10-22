'use strict';

import { historyRoutePush } from "../../router";

export default class Home {

    constructor($target) {
        const button = $target.querySelector('button');
        button.addEventListener('click', function () {
            historyRoutePush($target, '/profile');
        });
    }
}