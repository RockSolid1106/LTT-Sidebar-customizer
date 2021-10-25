
var vids = document.getElementById("submitbutton");
vids.addEventListener("click", savevalues);


function savevalues(){
  chrome.storage.sync.set({
    vid: document.getElementById("vids").checked,
    social: document.getElementById("social").checked,
    feat: document.getElementById("featured").checked

  });
  chrome.storage.sync.get(
    {vid: "null", social: "null", feat: "null"}, function(items) {
    console.log(items.vid);
    console.log(items.social);
    console.log(items.feat);
   })
}


function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    vid: false,
    social: false,
    feat: false
  }, function(items) {
    document.getElementById('vids').checked = items.vid;
    document.getElementById('social').checked = items.social;
    document.getElementById('featured').checked = items.feat;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);