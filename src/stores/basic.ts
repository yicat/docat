import RootStore from './root';

export default class BasicStore {
  rootStore: RootStore;

  constructor (rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
