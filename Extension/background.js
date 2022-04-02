const target = "https://linustechtips.com/topic/*";



async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
async function logResponse(responseDetails) { 
  let tab = await getCurrentTab();
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ["topics.js"]})
}

chrome.webRequest.onCompleted.addListener(
  logResponse,
  {urls: [target]}
);