document.getElementById('injectButton').addEventListener('click', function() {
    chrome.tabs.executeScript({
      file: 'jquery-loader.js'
    });
  });
  