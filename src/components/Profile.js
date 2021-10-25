'use strict';

import View from "./View.js";

export default class Profile extends View {
    constructor($target) {
        super($target, 'profile.html');
    }

    // TODO profile.json으로 변경 후 render()에 DOM 조작
}