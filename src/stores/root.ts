import RouterStore from './router';
import EditorStore from './editor';

export default class RootStore {
  router: RouterStore;
  editor: EditorStore;

  constructor () {
    this.router = new RouterStore(this);
    this.editor = new EditorStore(this);
  }
}
