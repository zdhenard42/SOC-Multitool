import menuItems from './js/menuitems.js';
import urls from './js/urlList.js';

const fixedEncodeURI = (str) => {
    return encodeURI(str).replace('/%5B/g', '[').replace('/%5D/g', ']');
}

chrome.runtime.onInstalled.addListener(() => {
    for (let i = 0; i < menuItems.length; i++) {
        chrome.contextMenus.create({
            id: menuItems[i].id,
            title: menuItems[i].title,
            contexts: menuItems[i].contexts,
            parentId: menuItems[i].parentId
        });
    }
});

chrome.contextMenus.onClicked.addListener((contextClick) => {
    if (contextClick.selectionText && contextClick.menuItemId in urls) {
        const urlsForMenuItem = urls[contextClick.menuItemId];
        switch (contextClick.menuItemId) {
            case "CC_Magic":
                urlsForMenuItem.forEach((url) => {
                    let encoded = url + btoa(fixedEncodeURI(contextClick.selectionText)).replaceAll('=', '');
                    chrome.tabs.create({ url: encoded });
                });
                break;
            case "CC_Defang":
                urlsForMenuItem.forEach((url) => {
                    let encoded = url + btoa(fixedEncodeURI(contextClick.selectionText)).replaceAll('=', '');
                    chrome.tabs.create({ url: encoded });
                });
                break;
            case "CC_Resolve_Domain":
                urlsForMenuItem.forEach((url) => {
                    let encoded = url + btoa(fixedEncodeURI(contextClick.selectionText)).replaceAll('=', '');
                    chrome.tabs.create({ url: encoded });
                });
                break;
            case "fileExt Info":
                urlsForMenuItem.forEach((url) => {
                    let encoded = url + fixedEncodeURI(contextClick.selectionText).replaceAll(".", "");
                    chrome.tabs.create({ url: encoded });
                });
                break;
            default:
                urlsForMenuItem.forEach((url) => {
                    let encoded = url + fixedEncodeURI(contextClick.selectionText);
                    chrome.tabs.create({ url: encoded });
                });
                break;
        }
    }
});
