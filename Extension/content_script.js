/* This Chrome extension easily allows you to customize what is shown on the sidebar on the LTT Forum.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details. */ 



chrome.storage.sync.get({
    rtopics: false,
    social: false,
    feat: false,
    ad: false,
    ////
    all: false,
    ltt: false,
    tq: false,
    tl: false,
    sc: false,
    ma: false,
    csf: false,
    gl: false,
    ////
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
        if (items.feat==true){
            try{
                if (document.querySelector('li[data-blockid="app_forums_topicFeed_yxyq4buu6"]') != null){
                    document.querySelector('li[data-blockid="app_forums_topicFeed_yxyq4buu6"]').remove()
                }
                else if (document.querySelector('li[data-blockid="app_forums_topicFeed_dpltxl1vm"]') != null){
                    document.querySelector('li[data-blockid="app_forums_topicFeed_dpltxl1vm"]').remove()
                }
                else {
                    document.querySelector('li[data-blockid="app_forums_topicFeed_6pz746tdr"]').remove()
                }
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}  

        }

        
        if (items.social==true){
            try{
            if (document.querySelector('li[data-blockid="app_cms_Blocks_lwnptbsqn"]') != null){
                document.querySelector('li[data-blockid="app_cms_Blocks_lwnptbsqn"]').remove()
            }
            else if(document.querySelector('li[data-blockid="app_cms_Blocks_vygscspy7"]') != null){
                document.querySelector('li[data-blockid="app_cms_Blocks_vygscspy7"]').remove()
            }
            else {
                document.querySelector('li[data-blockid="app_cms_Blocks_6rae4q53s"]').remove()
            }
        }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}  

        }
        if (items.ad == true){

            try{
                
                document.querySelector("div[data-role='sidebarAd']").remove()
            } catch(ex) {if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }
        ////////

        if (items.ltt) {
            try {
                
                if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_68iizozle"]') != null){
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_68iizozle"]').remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_ssj3ulzf7"]') != null){
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_ssj3ulzf7"]').remove()
                }
                else {
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_sl3ntfu2v"]').remove()
                }
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (items.tq) {
            try {
                
                if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_1rotwtd2e"]') != null){
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_1rotwtd2e"]').remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_769xp3erp"]') != null){
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_769xp3erp"]').remove()
                }
                
                else {
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_zsf5xw7tj"]').remove()
                }
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (items.tl) {
            try {
                
                
                if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_45l4ximfq"]') != null){
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_45l4ximfq"]').remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_7bb98gprz"]') != null){
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_7bb98gprz"]').remove()
                }
                else {
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_msogh6kit"]').remove()
                }
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (items.sc) {
            try {
                
                if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_bgxieil3n"]') != null){
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_bgxieil3n"]').remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_psk0aihdo"]') != null){
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_psk0aihdo"]').remove()
                }
                else {
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_r40stprfe"]').remove()
                }
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (items.ma) {
            try {
                
                if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_tqbpvtghs"]') != null){
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_tqbpvtghs"]').remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_1qqbywuuj"]') != null){
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_1qqbywuuj"]').remove()
                }
                else {
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_scr82rwww"]').remove()
                }
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (items.csf) {
            try {
                
                if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_l3czbd1pn"]') != null){
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_l3czbd1pn"]').remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_a6qaogeds"]') != null){
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_a6qaogeds"]').remove()
                }
                else {
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_vfxqo3v1o"]').remove()
                }
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (items.gl) {
            try {
                
                if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_p4kegvrxn"]') != null){
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_p4kegvrxn"]').remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_e2xeo8p08"]') != null){
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_e2xeo8p08"]').remove()
                }
                else {
                    
                    document.querySelector('li[data-blockid="app_lmgsys_latestVideos_1xbqnlvrd"]').remove()
                }
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }
        if (items.rtopics){
            try {
                
                if (document.querySelector('li[data-blockid="app_forums_topicFeed_23ahwqk21"]') != null){
                    document.querySelector('li[data-blockid="app_forums_topicFeed_23ahwqk21"]').remove();
                }
                else if (document.querySelector('li[data-blockid="app_forums_topicFeed_ji9lftwoj"]') != null){
                    document.querySelector('li[data-blockid="app_forums_topicFeed_ji9lftwoj"]').remove()
                }
                else {
                    document.querySelector('li[data-blockid="app_forums_topicFeed_zhgehlj5q"]').remove()
                }
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (items.group){
            try{
                document.querySelectorAll('li[data-role="group"]').forEach(e => {if (e.innerText != "Banned" && e.innerText != "Retired Staff" && e.innerText != "Member" && e.innerText != 'Floatplane Staff' && e.innerText != 'Folding Team Leader' && e.innerText != 'Industry Affiliate' && e.innerText != 'Newbie' && e.innerText != 'Rookie' && e.innerText != 'Apprentice' && e.innerText != 'Contributor' && e.innerText != 'Explorer' && e.innerText != 'Enthusiast' && e.innerText != 'Collaborator' && e.innerText != 'Community Regular' && e.innerText != 'Rising Star' && e.innerText != 'Proficient' && e.innerText != 'Experienced' && e.innerText != 'Mentor' && e.innerText != 'Veteran' && e.innerText != 'Grand Master' )
                {e.remove()
                }
                })
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }


        if (items.rank){
            try {
                document.querySelectorAll('.cAuthorPane').forEach( panel => {
                    try{
                    let badge = panel.querySelector(".cAuthorPane_badge--rank");
                    
                    let ranktext = panel.querySelector('li[data-role="group"]')
                    let e = ranktext
                    if (e.innerText == "Member"){
                    ranktext.innerHTML = badge.getAttribute("title").replace(/\(\d+\/\d+\)/, "").replace(/Title:/, "");
                    }
                }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
                    
                  })
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (items.mbadges){
            try{
                document.querySelectorAll('.cAuthorPane_badge--rank').forEach(e => {e.remove()})
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (items.location){
            try{
                $('aside ul').contents()
                .filter(function(){return this.nodeType === 8;}) //get the comments
                .replaceWith(function(){return this.data;})
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (items.pcount){
            try {
                document.querySelectorAll('.cAuthorPane_stats').forEach(function(panel) { 
                    let posts = panel.querySelectorAll('.ipsType_blendLinks')
                    
                    try {
                    if (items.soln){ if(posts[1])posts[1].parentElement.remove(); posts[0].innerText = posts[0].getAttribute("title"); } else{ 

                        posts[0].innerHTML = '<i class="fa fa-comment"></i> '+ (posts[0].getAttribute("title")).replace(" posts", "")}
                    }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
                })
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (!items.pcount){
            if (items.soln){
                let posts = panel.querySelectorAll('.ipsType_blendLinks')
                if (items.soln){if(posts[1])posts[1].parentElement.remove();}
            }
        }

        if (items.level){
            try {
                document.querySelector(".lmgNav_constrainedMenu").innerHTML += document.querySelector(".elMobileDrawer__rank").outerHTML
            }catch(ex){console.log("Sidebar Customizer: "+ex)}
        }
        if (items.moveofficial){
            try {
                document.querySelector('[data-categoryid="80"]').parentNode.insertBefore(document.querySelector('[data-categoryid="99"]'), document.querySelector('[data-categoryid="80"]').nextSibling);
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }
        if (items.movereleases){
            try {
                var a = document.querySelector('[data-categoryid="99"]').querySelector('li[data-forumid="17"]')
                document.querySelector('[data-categoryid="80"]').querySelector('[data-role="forums"]').innerHTML += a.outerHTML
                a.remove()
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }
        if (items.moveinfo){
            try {
                var a = document.querySelector('[data-categoryid="99"]').querySelector('li[data-forumid="23"]')
                document.querySelector('[data-categoryid="80"]').querySelector('[data-role="forums"]').innerHTML += a.outerHTML
                a.remove()
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }
        if (items.hideofficial){
            try {
                document.querySelector('[data-categoryid="99"]').remove()
            }catch(ex){if (items.logging) {console.log("Sidebar Customizer: "+ex)}}
        }

        if (items.badgemargin){
        document.querySelectorAll(".cAuthorGroupIcon").forEach(e => {e.style.margin = "3px"})
        }

        if (items.allstatus){
            if(window.location != "https://linustechtips.com/" && window.location != "https://linustechtips.com/status/*" && window.location != "https://linustechtips.com/staff/"){
                fetch('https://linustechtips.com/')
                .then(function(response) {
                    return response.text()
            })
            .then(function(html) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, "text/html").querySelector("[data-blockid='app_statusupdates_recentStatuses_taj5lmnt1']")
                doc.querySelectorAll(".ipsContained").forEach(e => {$(e).css({"display": "-webkit-box",
                    "overflow": "hidden",
                    "-webkit-line-clamp": "3",
                    "-webkit-box-orient": "vertical"})})
                
                    document.querySelector('[data-role="widgetReceiver"]').querySelector(".ipsList_reset").innerHTML += doc.outerHTML;
            })
            }
        }


        

  })