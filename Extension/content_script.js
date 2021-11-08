/* This Chrome extension easily allows you to customize what is shown on the sidebar on the LTT Forum.
Copyright © 2021  RockSolid106

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
    mbadges: false
  }, function(items) {
        if (items.feat==true){
            
                let element3 = document.querySelector('li[data-blockid="app_forums_topicFeed_yxyq4buu6"]')
                if (element3 != null){
                element3.remove()
                }
                else if (document.querySelector('li[data-blockid="app_forums_topicFeed_dpltxl1vm"]') != null){
                    element3 = document.querySelector('li[data-blockid="app_forums_topicFeed_dpltxl1vm"]')
                    element3.remove()
                }
                else {
                    element3 = document.querySelector('li[data-blockid="app_forums_topicFeed_6pz746tdr"]')
                    element3.remove()
                }
                

        }

        
        if (items.social==true){
            
            let element2 = document.querySelector('li[data-blockid="app_cms_Blocks_lwnptbsqn"]')
            if (element2 != null){
            element2.remove()
            }
            else if(document.querySelector('li[data-blockid="app_cms_Blocks_vygscspy7"]') != null){
                element2 = document.querySelector('li[data-blockid="app_cms_Blocks_vygscspy7"]')
                element2.remove()
            }
            else {
                element2 = document.querySelector('li[data-blockid="app_cms_Blocks_6rae4q53s"]')
                element2.remove()
            }
            

        }
        
        // if (items.vid == true){
            
        //     try {
        //         var element = document.querySelectorAll('div.lmg-card');
        //         for (let elem of element){
        //             elem.parentElement.removeChild(elem);
        //         } 
        //     }catch(ex) {}
        // }
        
        if (items.ad == true){

            try{
                
                document.querySelector("div[data-role='sidebarAd']").remove()
            } catch(ex) {console.log(ex)}
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
            }catch(ex){console.log(ex)}
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
            }catch(ex){console.log(ex)}
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
            }catch(ex){console.log(ex)}
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
            }catch(ex){console.log(ex)}
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
            }catch(ex){console.log(ex)}
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
            }catch(ex){console.log(ex)}
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
            }catch(ex){console.log(ex)}
        }
        if (items.mbadges){
            try{
                document.querySelectorAll('.cAuthorPane_badge--rank').forEach(e => {e.remove()})
            }catch(ex){console.log(ex)}
        }

  })

