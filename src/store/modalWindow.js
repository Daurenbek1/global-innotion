import { makeAutoObservable } from 'mobx';

class ModalWindow {
  isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  get status() {
    return this.isOpen;
  }

  changeStatus() {
    return this.isOpen = !this.isOpen;
  }

  set setStatus(isOpen) {
    if (typeof(isOpen) !== 'boolean') return;

    return this.isOpen = isOpen;
  }
}

export default new ModalWindow();
