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
    social: false,
    feat: false,
    ad: false,
    all: false,
    ltt: false,
    tq: false,
    tl: false,
    sc: false,
    ma: false,
    csf: false
  }, function(items) {
    document.getElementById("vids").checked = items.all,
    document.getElementById("ltt").checked = items.ltt,
    document.getElementById("tq").checked = items.tq,
    document.getElementById("tl").checked = items.tl,
    document.getElementById("sc").checked = items.sc,
    document.getElementById("ma").checked = items.ma,
    document.getElementById("csf").checked = items.csf,
    document.getElementById('social').checked = items.social;
    document.getElementById('featured').checked = items.feat;
    document.getElementById('ad').checked = items.ad;

  });
}
document.addEventListener('DOMContentLoaded', restore_options);


var submit = document.getElementById("submitbutton");
submit.addEventListener("click", savevalues);


function savevalues(){
  if (document.getElementById("ltt").checked && document.getElementById("tq").checked && document.getElementById("tl").checked && document.getElementById("sc").checked && document.getElementById("ma").checked && document.getElementById("csf").checked){
    document.getElementById("vids").checked = true;
  }
  else {
    document.getElementById("vids").checked = false;
  }

  chrome.storage.sync.set({
    all: document.getElementById("vids").checked,
    social: document.getElementById("social").checked,
    feat: document.getElementById("featured").checked,
    ltt: document.getElementById("ltt").checked,
    tq: document.getElementById("tq").checked,
    tl: document.getElementById("tl").checked,
    sc: document.getElementById("sc").checked,
    ma: document.getElementById("ma").checked,
    csf: document.getElementById("csf").checked
    
    
  });
   submit.value = "Done!"
}

var vids = document.getElementById("vids");
vids.addEventListener("change", allselect);

function allselect() {
  var x = document.getElementById("vids").checked;
  document.getElementById("ltt").checked = x;
  document.getElementById("tq").checked = x;
  document.getElementById("tl").checked = x;
  document.getElementById("sc").checked = x;
  document.getElementById("ma").checked = x;
  document.getElementById("csf").checked = x;

}
//work on making it work with all selected and store that accordingly