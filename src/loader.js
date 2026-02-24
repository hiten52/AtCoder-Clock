(async () => {
  const url = chrome.runtime.getURL("src/clock/clockController.js");
  await import(url);
})();