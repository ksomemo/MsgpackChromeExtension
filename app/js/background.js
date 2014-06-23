chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.pageAction.setIcon({
        tabId: tabId, 
        path:  "img/icon.png"
    });
    chrome.pageAction.show(tabId);
});

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details){
        return {"requestHeaders": details.requestHeaders};
    },
    {
        urls: [
            "http://*/*"
        ],
    },
    [
        "requestHeaders",
        "blocking"
    ]
);

chrome.webRequest.onHeadersReceived.addListener(
    function(details){
        var isMsgpack = false;
        details.responseHeaders.forEach(function(header) {
            if (header.name === "Content-Type" && header.value === "application/x-msgpack") {
                isMsgpack = true;
            }
        });
        console.log("isMsgpack:", isMsgpack);
        return {"responseHeaders": details.responseHeaders};
    },
    {
        urls: [
            "http://*/*"
        ]
    },
    [
        "responseHeaders",
        "blocking"
    ]
);
