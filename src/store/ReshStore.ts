import { makeAutoObservable } from "mobx";

class ResheniyaStore {
  resheniya: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setResheniya(resheniya: string[]): void {
    this.resheniya = resheniya;
  }

  toggleReshenie(reshenie: string): void {
    if (this.resheniya.includes(reshenie)) {
      this.resheniya = this.resheniya.filter((r) => r !== reshenie);
    } else {
      this.resheniya.push(reshenie);
    }
  }
}

export default new ResheniyaStore();
