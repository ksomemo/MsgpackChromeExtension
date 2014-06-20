chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.pageAction.setIcon({
        tabId: tabId, 
        path:  "img/icon.png"
    });
    chrome.pageAction.show(tabId);
});
