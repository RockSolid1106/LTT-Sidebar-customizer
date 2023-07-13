//

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
  chrome.storage.sync.get({
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
    gl:false,
    mbadges: false,
    group: false,
    location: false,
    rank: false,
    pcount: false,
    soln: false,
    level: false,
    hideofficial: false,
    moveinfo: false,
    movereleases: false,
    moveofficial: false,
    logging: false,
    allstatus: false,
    badgemargin: true
  }, function(items) {
    document.getElementById("rtopics").checked = items.rtopics,
    document.getElementById("vids").checked = items.all,
    document.getElementById("ltt").checked = items.ltt,
    document.getElementById("tq").checked = items.tq,
    document.getElementById("tl").checked = items.tl,
    document.getElementById("sc").checked = items.sc,
    document.getElementById("ma").checked = items.ma,
    document.getElementById("csf").checked = items.csf,
    document.getElementById("gl").checked = items.gl,
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
    document.getElementById("hideofficial").checked = items.hideofficial;
    document.getElementById("moveinfo").checked = items.moveinfo;
    document.getElementById("movereleases").checked = items.movereleases;
    document.getElementById("moveofficial").checked = items.moveofficial;
    document.getElementById("logging").checked = items.logging;
    document.getElementById("allstatus").checked = items.allstatus;
    document.getElementById("badgemargin").checked = items.badgemargin;

  });
}
document.addEventListener('DOMContentLoaded', restore_options);



Array.from(document.getElementsByClassName("submitbutton")).forEach((e) => {e.addEventListener("click", savevalues)})

function savevalues(){
  if (document.getElementById("ltt").checked && document.getElementById("tq").checked && document.getElementById("tl").checked && document.getElementById("sc").checked && document.getElementById("ma").checked && document.getElementById("csf").checked){
    document.getElementById("vids").checked = true;
  }
  else {
    document.getElementById("vids").checked = false;
  }
 
  chrome.storage.sync.set({
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
    gl: document.getElementById("gl").checked,
    mbadges: document.getElementById("mbadges").checked,
    group: document.getElementById("group").checked,
    location: document.getElementById("location").checked,
    rank: document.getElementById("mrank").checked,
    pcount: document.getElementById("replpcount").checked,
    soln: document.getElementById("soln").checked,
    level: document.getElementById("level").checked,
    hideofficial :document.getElementById("hideofficial").checked,
    moveinfo: document.getElementById("moveinfo").checked,
    movereleases: document.getElementById("movereleases").checked,
    moveofficial: document.getElementById("moveofficial").checked,
    logging: document.getElementById("logging").checked,
    allstatus: document.getElementById("allstatus").checked,
    badgemargin: document.getElementById("badgemargin").checked
    
  });
    this.innerText = "Done!"
    setTimeout(() => {this.innerText = "Submit"}, 2000)
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
  document.getElementById("gl").checked = x;

}


document.getElementById("sidebar-button").addEventListener("click", handle_change_sidebar)
document.getElementById("profile-button").addEventListener("click", handle_change_profile)
document.getElementById("forums-button").addEventListener("click", handle_change_forums)
document.getElementById("advanced-button").addEventListener("click", handle_change_advanced)
Array.from(document.getElementsByClassName("backbutton")).forEach((e) => {e.addEventListener("click", handle_back)})

function handle_change_sidebar() {
  console.log("ello")
  var e = document.getElementById("main-menu");
  e.classList.remove("menu-fade-in"); 
  e.classList.add("menu-fade-out"); 
  e.addEventListener("animationend", () => {e.style.display = "none";}, {once: true})
  document.getElementById("menu-sidebar").style.display = "block";
  document.getElementById("menu-sidebar").classList.remove("menu-fade-out");
  document.getElementById("menu-sidebar").classList.add("menu-fade-in");

}
function handle_change_profile() {
  var e = document.getElementById("main-menu")
  e.classList.remove("menu-fade-in");
  e.classList.add("menu-fade-out");
  e.addEventListener("animationend", () => {e.style.display = "none";}, {once: true})
  document.getElementById("menu-profiles").style.display = "block";
  document.getElementById("menu-profiles").classList.remove("menu-fade-out");
  document.getElementById("menu-profiles").classList.add("menu-fade-in");
}
function handle_change_forums() {
  var e = document.getElementById("main-menu");
  e.classList.remove("menu-fade-in"); 
  e.classList.add("menu-fade-out"); 
  e.addEventListener("animationend", () => {e.style.display = "none"; console.log(this)}, {once: true})
  document.getElementById("menu-forums").style.display = "block";
  document.getElementById("menu-forums").classList.remove("menu-fade-out");
  document.getElementById("menu-forums").classList.add("menu-fade-in");
}
function handle_change_advanced() {
  var e = document.getElementById("main-menu");
  e.classList.remove("menu-fade-in"); 
  e.classList.add("menu-fade-out"); 
  e.addEventListener("animationend", () => {e.style.display = "none";}, {once: true})
  document.getElementById("menu-advanced").style.display = "block";
  document.getElementById("menu-advanced").classList.remove("menu-fade-out");
  document.getElementById("menu-advanced").classList.add("menu-fade-in");
}

function handle_back() {
  restore_options();
  this.parentElement.parentElement.classList.remove("menu-fade-in"); 
  this.parentElement.parentElement.classList.add("menu-fade-out"); 
  this.parentElement.parentElement.addEventListener("animationend", () => {this.parentElement.parentElement.style.display = "none";}, {once: true})
  document.getElementById("main-menu").style.display = "block";
  document.getElementById("main-menu").classList.add("menu-fade-in");
  document.getElementById("main-menu").classList.remove("menu-fade-out");
  Array.from(document.getElementsByClassName("submitbutton")).forEach((e) => {e.innerText = "SUBMIT"})
}