export default class Breadcrumb {

    constructor(el, history) {
        this.el = el;
        this.history = history;

        this.render();
    }

    render() {
        this.el.innerHTML = '';
        this.history.forEach(item => this.insertItem(item));
    }

    insertItem(item) {
        const { name, id } = item;

        const devEl = document.createElement('div');
        devEl.innerText = name;
        devEl.setAttribute('id', id);

        this.el.appendChild(devEl);
    }
}