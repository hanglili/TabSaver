let saveTabsButton = document.getElementById('saveTabs');
let viewTabsButton = document.getElementById('viewTabs');

saveTabsButton.onclick = function(element) {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        chrome.storage.sync.set({tabs: tabs}, function() {
          console.log("Saved new tabs");
        });
    });
};

viewTabsButton.onclick = function(element) {
  chrome.storage.sync.get(['tabs'], function(result) {
    console.log("Viewing saved tabs");
    result.tabs.forEach(tab => {
      console.log(tab.url);
    });
  });
};