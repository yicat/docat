import RootStore from './root';
import BasicStore from './basic';

export default class EditorStore extends BasicStore {
    constructor (rootStore: RootStore) {
        super(rootStore);
    }
}