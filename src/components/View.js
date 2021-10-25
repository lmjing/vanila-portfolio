'use strict'

export default class View {
    constructor($target, template) {
        this.$target = $target;
        // this.path = path;
        this.template = `/src/templates/${template}`;
    }

    async render() {
        try {
            if(!this.template) {
                this.$target.innerHTML = `${this.path} Not Found!`;
                return;
            }
            
            const res = await fetch(this.template);
            const contentType = res.headers.get('content-type');

            if(contentType?.includes('text/html')) {
                this.$target.innerHTML = await res.text();
            } else {
                this.$target.innerHTML = `not supported type`
            }
        } catch(e) {
            console.log(e);
        }
    }

    handle() {}
}