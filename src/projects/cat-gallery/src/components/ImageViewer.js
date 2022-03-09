export default class ImageViewer {

    constructor(el) {
        this.el = el;
        this.imgEl = this.el.querySelector('img');
    }

    showImage(filePath) {
        this.el.style.display = 'inline';
        this.imgEl.src = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${filePath}`
    }

    hiddenImage() {
        this.el.style.display = 'none';
    }
}