// Copyright © 2021  RockSolid1106

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details. 

function restore_options() {
  document.getElementById("version").innerText = "Version: v" + chrome.runtime.getManifest().version;
  browser.storage.sync.get({
    rtopics: false,
    social: false,
    feat: false,
    ad: false,
    all: false,
    ltt: false,
    tq: false,
    tl: false,
    sc: false,
    ma: false,
    csf: false,
    mbadges: false,
    group: false,
    location: false,
    rank: false,
    pcount: false,
    soln: false,
    level: false
  }, function(items) {
    document.getElementById("rtopics").checked = items.rtopics,
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
    document.getElementById('mbadges').checked = items.mbadges;
    document.getElementById('group').checked = items.group;
    document.getElementById('location').checked = items.location;
    document.getElementById('mrank').checked = items.rank;
    document.getElementById("replpcount").checked = items.pcount;
    document.getElementById("soln").checked = items.soln;
    document.getElementById("level").checked = items.level;

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
 
  browser.storage.sync.set({
    rtopics: document.getElementById("rtopics").checked,
    ad: document.getElementById("ad").checked,
    all: document.getElementById("vids").checked,
    social: document.getElementById("social").checked,
    feat: document.getElementById("featured").checked,
    ltt: document.getElementById("ltt").checked,
    tq: document.getElementById("tq").checked,
    tl: document.getElementById("tl").checked,
    sc: document.getElementById("sc").checked,
    ma: document.getElementById("ma").checked,
    csf: document.getElementById("csf").checked,
    mbadges: document.getElementById("mbadges").checked,
    group: document.getElementById("group").checked,
    location: document.getElementById("location").checked,
    rank: document.getElementById("mrank").checked,
    pcount: document.getElementById("replpcount").checked,
    soln: document.getElementById("soln").checked,
    level: document.getElementById("level").checked
    
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

var member = document.getElementById("group");
member.addEventListener("change", membercheck)

function membercheck() {
  if (member.checked == true){
    document.getElementById("mrank").checked = false;
    document.getElementById("mrank").disabled = true;
  }
  if (member.checked == false){
    
    document.getElementById("mrank").disabled = false;
  }
}