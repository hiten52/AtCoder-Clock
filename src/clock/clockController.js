import { ClockUI } from "./clockUI.js";
import { getClockString } from "./clockTime.js";

class ClockController {

  constructor() {
    this.ui = new ClockUI();
    this.start();
    this.initStorage();
    this.initMessages();

    this.ui.bindEvent('click', this.ui.toggleClockFading);
  }

  start() {
    this.tick();
    setInterval(()=>this.tick(),1000);
  }

  tick() {
    this.ui.setText(getClockString());
  }

  initStorage() {
    chrome.storage.sync.get(["enabled"], (res)=>{
      if(res.enabled === false) this.ui.hide();
    });
  }

  initMessages() {
    chrome.runtime.onMessage.addListener((msg)=>{
      if(msg.enabled === false) this.ui.hide();
      if(msg.enabled === true) this.ui.show();
    });
  }
}

new ClockController();