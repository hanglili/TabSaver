chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({tabs: []}, function() {
      console.log("Empty saved tabs have been initialised.");
    });
});