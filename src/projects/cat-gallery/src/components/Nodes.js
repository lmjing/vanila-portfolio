export default class Nodes {

    constructor(el) {
        this.el = el; // .Nodes
    }

    get prevEl() {
        return this.el.querySelector('.Node.Prev');
    }

    clearNodes() {
        this.el.innerHTML = '';
    }

    setPrev() {
        const prevEl = document.createElement('div');
        prevEl.classList.add('Node');
        prevEl.classList.add('Prev');
        prevEl.innerHTML = `<img src="./assets/prev.png">`;
        this.el.appendChild(prevEl);

        return prevEl;
    }

    insertNode(item) {
        const { id, name, type, filePath, parent } = item;

        const imgEl = document.createElement('img');
        imgEl.src = `./assets/${type.toLowerCase()}.png`;

        const nameEl = document.createElement('div');
        nameEl.innerText = name;

        const nodeEl = document.createElement('div');
        nodeEl.classList.add('Node');
        nodeEl.appendChild(imgEl);
        nodeEl.appendChild(nameEl);

        this.el.appendChild(nodeEl);

        return nodeEl;
    }
}