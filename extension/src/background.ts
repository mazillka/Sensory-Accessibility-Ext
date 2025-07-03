import { storage, initializeData, updateData, constants } from "./helpers";

chrome.runtime.onInstalled.addListener(async details => {
    switch (details.reason) {
        case "install":
            await initializeData();
            // await chrome.tabs.create({ url: chrome.runtime.getURL("options.html") });
            break;
        case "update":
            await updateData();
            break;
    }
});

chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
    if (tab.id !== undefined) {
        chrome.scripting.executeScript({
            target: { 
                tabId: tab.id 
            },
            files: ["contentScript.js"]
        });
    } else {
        console.error("Tab ID is undefined. Cannot execute content script.");
    }
});