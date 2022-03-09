import Nodes from './components/Nodes.js';
import Breadcrumb from './components/Breadcrumb.js';
import ImageViewer from './components/ImageViewer.js';

export default class App {

    constructor(el) {
        this.el = el;
        this.state = {
            history: [{ name: 'root', id: '' }]
        }
        this.nodes = new Nodes(el.querySelector('.Nodes'));
        this.imageViewer = new ImageViewer(document.querySelector('.ImageViewer'));

        this.initHistory();
        // this.fetchRootContainer();
        this.fetchContainer();
    }

    initHistory() {
        this.breadcrumb = new Breadcrumb(this.el.querySelector('.Breadcrumb'), this.state.history);
    }

    goToPrev() {
        const cur = this.state.history.pop();
        this.fetchContainer(cur.id);
        this.breadcrumb.render();
    }

    setNewNodeItem(item) {
        const vm = this;
        const { name, id, type, filePath } = item;
        const nodeEl = this.nodes.insertNode(item);
        nodeEl.addEventListener('click', function () {
            if (type === 'FILE') {
                vm.imageViewer.showImage(filePath);
            } else {
                vm.fetchContainer(id);
                vm.state.history.push({ name, id });
                vm.breadcrumb.insertItem(item);
            }
        });
    }

    async fetchContainer(nodeId = '') {
        const vm = this;
        const isChild = nodeId.length > 0;
        this.nodes.clearNodes();

        const datas = await fetch(`https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/${nodeId}`).then(res => res.json())

        if (isChild) {
            const prevEl = this.nodes.setPrev();
            prevEl.addEventListener('click', function () {
                vm.goToPrev();
            });
        }
        datas.forEach(item => this.setNewNodeItem(item));
    }

    // {
    //     "id":       string // 문자열로 된 Node의 고유값입니다.
    //     "name":     string // 디렉토리 혹은 파일의 이름입니다. 화면에 표시할 때 사용합니다.
    //     "type":     string // 파일인지 디렉토리인지 여부입니다. 파일인 경우 FILE, 디렉토리인 경우 DIRECTORY 입니다.
    //     "filePath": string // 파일인 경우에 존재하는 값입니다. 해당 파일 이미지를 불러오기 위한 경로가 들어있습니다.
    //     "parent":   object | null {
    //       "id": string // 해당 Node가 어디에 속하는지 나타내는 값입니다. parent가 null이면 root에 존재하는 파일 / 디렉토리입니다.
    //     }
    //   }
}