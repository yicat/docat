import RouterStore from './router';

export default class RootStore {
  router: RouterStore;

  constructor () {
    this.router = new RouterStore(this);
  }
}
