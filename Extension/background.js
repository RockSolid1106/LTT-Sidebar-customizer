var target = "https://linustechtips.com/topic/*";

function logResponse(responseDetails) { 
      chrome.tabs.executeScript({file: "topics.js"})
        }

chrome.webRequest.onCompleted.addListener(
  logResponse,
  {urls: ["https://linustechtips.com/topic/*"]}
);