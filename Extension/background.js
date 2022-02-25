var target = "https://linustechtips.com/topic/*";

function logResponse(responseDetails) {    
      browser.tabs.executeScript({file: "topics.js"})
        }

browser.webRequest.onCompleted.addListener(
  logResponse,
  {urls: [target]}
);
