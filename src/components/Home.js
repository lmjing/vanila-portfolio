'use strict';

export default class Home {
    constructor({ $target }) {
        this.section = document.createElement('section');
        $target.appendChild(this.section);
        this.render();
    }

    render() {
        const text = document.createElement('div');
        text.innerText = "Home";
        this.section.appendChild(text);
    }
}