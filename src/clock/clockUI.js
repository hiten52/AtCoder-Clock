export class ClockUI {

  constructor() {
    this.host = this.createHost();
    this.shadow = this.host.attachShadow({ mode: "open" });

    this.loadFont();
    this.injectStyles();

    this.clock = this.createClock();
  }

  createHost() {
    let host = document.getElementById("atcoder-extension-clock");

    if (!host) {
      host = document.createElement("div");
      host.id = "atcoder-extension-clock";
      host.style.filter = "none";
      document.body.appendChild(host);

    }

    return host;
  }

  loadFont() {
    const font = new FontFace(
      "Lato",
      `url(${chrome.runtime.getURL("assets/fonts/Lato-Regular.ttf")})`
    );

    font.load().then((loadedFont) => {
      this.shadow.adoptedStyleSheets = this.shadow.adoptedStyleSheets || [];
      document.fonts.add(loadedFont);
    });
  }

  injectStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL("public/css/clock.css");
    this.shadow.appendChild(link);
  }

  createClock() {
    const el = document.createElement("p");
    el.className = "clock";
    el.style.cssText="color: rgb(51, 51, 51);"
    this.shadow.appendChild(el);
    return el;
  }

  setText(text) {
    this.clock.textContent = text;
  }

  show() {
    this.host.style.display = "block";
  }

  hide() {
    this.host.style.display = "none";
  }

  toggleClockFading() {
    if(this.host.style.opacity === '0.1') {
      this.host.style.opacity = '1';
    } else {
      this.host.style.opacity = '0.1';
    }
  }

  bindEvent(event, fn) {
    this.host.addEventListener(event, fn);
  }
}