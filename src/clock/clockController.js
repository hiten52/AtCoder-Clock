import { ClockUI } from "./clockUI.js";
import { getClockString, getTimerString } from "./clockTime.js";

const CLOCK_TYPES = {
  CLOCK: 'clock',
  TIMER: 'timer'
};

class ClockController {

  constructor() {
    this.ui = new ClockUI();
   
    this.clockType = CLOCK_TYPES.CLOCK;
    this.timerInfo = {
      currentTime: 0,
      duration: 30 * 60
    };
   
    this.initEvents();
    this.initStorage();
    this.initMessages();

    this.start();
  }

  initEvents() {
    this.ui.bindEvent("click", () => this.ui.toggleClockFading());

    this.ui.bindEvent("dblclick", () => {
      this.clockType =
        this.clockType === CLOCK_TYPES.CLOCK
          ? CLOCK_TYPES.TIMER
          : CLOCK_TYPES.CLOCK;

      this.timerInfo.currentTime = 0;
    });
  }

  start() {
    this.tick();
    setInterval(()=>this.tick(),1000);
  }

  tick() {
    if (this.clockType === CLOCK_TYPES.TIMER) {
      if (this.timerInfo.currentTime < this.timerInfo.duration) {
        this.timerInfo.currentTime++;
      }
    }

    const text =
      this.clockType === CLOCK_TYPES.CLOCK
        ? getClockString()
        : getTimerString(this.timerInfo);

    this.ui.setText(text);
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