import { makeAutoObservable } from "mobx";

class GenderStore {
  genderMan = false;
  genderWoman = false;
  genderChildren = false;
  gender: string | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  toggleGenderMan() {
    this.genderMan = !this.genderMan;
  }

  toggleGenderWoman() {
    this.genderWoman = !this.genderWoman;
  }

  toggleGenderChildren() {
    this.genderChildren = !this.genderChildren;
  }
}

export default new GenderStore();



