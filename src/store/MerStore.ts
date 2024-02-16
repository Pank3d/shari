import { makeAutoObservable } from "mobx";

class MerStore {
  typeMer: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setTypeMer(typeMer: string[]): void {
    this.typeMer = typeMer;
  }

  toggleType(type: string): void {
    if (this.typeMer.includes(type)) {
      this.typeMer = this.typeMer.filter((t) => t !== type);
    } else {
      this.typeMer.push(type);
    }
  }
}

export default new MerStore();
