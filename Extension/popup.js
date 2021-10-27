// Copyright © 2021  RockSolid106

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details. 

function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    vid: false,
    social: false,
    feat: false,
    ad: false
  }, function(items) {
    document.getElementById('vids').checked = items.vid;
    document.getElementById('social').checked = items.social;
    document.getElementById('featured').checked = items.feat;
    document.getElementById('ad').checked = items.ad;

  });
}
document.addEventListener('DOMContentLoaded', restore_options);


var vids = document.getElementById("submitbutton");
vids.addEventListener("click", savevalues);


function savevalues(){
  chrome.storage.sync.set({
    vid: document.getElementById("vids").checked,
    social: document.getElementById("social").checked,
    feat: document.getElementById("featured").checked,
    ad: document.getElementById("ad").checked

  });
   vids.value = "Done!"
}
