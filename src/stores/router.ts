import { observable, action, runInAction } from 'mobx';
import { createBrowserHistory } from 'history';

import BasicStore from './basic';
import RootStore from './root';

export default class RouterStore extends BasicStore {
  history = createBrowserHistory();
  @observable
  path: string;
  @observable
  nav: string = 'service';

  constructor (rootStore: RootStore) {
    super(rootStore);
    this.history.listen(location => {
      runInAction(() => {
        this.path = location.pathname;
      });
    });
  }

  @action
  push (location: string) {
    this.history.push(location);
  }

  replace (loaction: string) {
    this.history.replace(location);
  }

  back () {
    this.history.goBack();
  }

  forward () {
    this.history.goForward();
  }
}
