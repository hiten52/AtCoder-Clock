const toggle = document.getElementById("toggle");

chrome.storage.sync.get(["enabled"], (res)=>{
  toggle.checked = res.enabled !== false;
});

toggle.addEventListener("change", ()=>{

  chrome.storage.sync.set({
    enabled: toggle.checked
  });

  chrome.tabs.query({active:true,currentWindow:true}, (tabs)=>{

    chrome.tabs.sendMessage(tabs[0].id,{
      enabled: toggle.checked
    });

  });

});