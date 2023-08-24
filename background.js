chrome.contextMenus.create({
  id: "createFile",
  title: "Create File",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "createFolder",
  title: "Create Folder",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "saveFile",
  title: "Save File",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "listFiles",
  title: "List Files",
  contexts: ["selection"]
});


chrome.contextMenus.create({
  id: "renameFile",
  title: "Rename File",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "deleteFile",
  title: "Delete File",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "createFile") {
    // Open your custom popup page here
    chrome.windows.create({
      url: "create-file-popup.html",
      type: "popup",
      width: 400,
      height: 250
    });
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "createFolder") {
    // Open your custom popup page here
    chrome.windows.create({
      url: "create-folder-popup.html",
      type: "popup",
      width: 400,
      height: 250
    });
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveFile") {
    // Open your custom popup page here
    chrome.windows.create({
      url: "save-file-popup.html",
      type: "popup",
      width: 400,
      height: 250
    });
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "listFiles") {
    // Open your custom popup page here
    chrome.windows.create({
      url: "list-files-popup.html",
      type: "popup",
      width: 400,
      height: 250
    });
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "deleteFile") {
    // Open your custom popup page here
    chrome.windows.create({
      url: "delete-file-popup.html",
      type: "popup",
      width: 400,
      height: 250
    });
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "renameFile") {
    // Open your custom popup page here
    chrome.windows.create({
      url: "rename-file-popup.html",
      type: "popup",
      width: 400,
      height: 250
    });
  }
});