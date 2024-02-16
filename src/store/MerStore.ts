import { makeAutoObservable } from "mobx";

class merStore {
  vipiska = false;
  svadba = false;
  vipusk = false;
  loveDay = false;
  fhotoZone = false;
  typeMer: any;

  constructor() {
    makeAutoObservable(this);
  }

  toggleVipiska() {
    this.vipiska = !this.vipiska;
  }

  toggleSvadba() {
    this.svadba = !this.svadba;
  }

  toggleVipusk() {
    this.vipusk = !this.vipusk;
  }

  toggleLoveDay() {
    this.loveDay = !this.loveDay;
  }

  toggleFhotoZone() {
    this.fhotoZone = !this.fhotoZone;
  }
}

export default new merStore();
