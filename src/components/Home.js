'use strict';

export default class Home {

    constructor() {
        console.log('home constructor')
    }

    init() {
        console.log(document);
        const button = document.querySe('button');
        button.addEventListener('click', function () {
            console.log('clicked!!!!');
        });
    }
}