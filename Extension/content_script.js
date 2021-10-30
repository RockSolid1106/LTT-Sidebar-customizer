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
    csf: false
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
                var element5 = document.querySelector("div[data-role='sidebarAd']")
                element5.remove()
            } catch(ex) {console.log(ex)}
        }
        ////////

        if (items.ltt) {
            try {
                var element6 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_68iizozle"]')
                if (element6 != null){
                element6.remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_ssj3ulzf7"]') != null){
                    element6 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_ssj3ulzf7"]')
                    element6.remove()
                }
                else {
                    element6 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_sl3ntfu2v"]')
                    element6.remove()
                }
            }catch(ex){console.log(ex)}
        }

        if (items.tq) {
            try {
                var element7 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_1rotwtd2e"]')
                if (element7 != null){
                    element7.remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_769xp3erp"]') != null){
                    element7 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_769xp3erp"]')
                    element7.remove()
                }
                
                else {
                    element7 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_zsf5xw7tj"]')
                    element7.remove()
                }
            }catch(ex){console.log(ex)}
        }

        if (items.tl) {
            try {
                
                var element8 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_45l4ximfq"]')
                if (element8 != null){
                    element8.remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_7bb98gprz"]') != null){
                    element8 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_7bb98gprz"]')
                    element8.remove()
                }
                else {
                    element8 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_msogh6kit"]')
                    element8.remove()
                }
            }catch(ex){console.log(ex)}
        }

        if (items.sc) {
            try {
                var element9 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_bgxieil3n"]')
                if (element9 != null){
                    element9.remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_psk0aihdo"]') != null){
                    element9 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_psk0aihdo"]')
                    element9.remove()
                }
                else {
                    element9 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_r40stprfe"]')
                    element9.remove()
                }
            }catch(ex){console.log(ex)}
        }

        if (items.ma) {
            try {
                var element10 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_tqbpvtghs"]')
                if (element10 != null){
                element10.remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_1qqbywuuj"]') != null){
                    element10 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_1qqbywuuj"]')
                    element10.remove()
                }
                else {
                    element10 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_scr82rwww"]')
                    element10.remove()
                }
            }catch(ex){console.log(ex)}
        }

        if (items.csf) {
            try {
                var element11 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_l3czbd1pn"]')
                if (element11 != null){
                element11.remove()
                }
                else if (document.querySelector('li[data-blockid="app_lmgsys_latestVideos_a6qaogeds"]') != null){
                    element11 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_a6qaogeds"]')
                    element11.remove()
                }
                else {
                    element11 = document.querySelector('li[data-blockid="app_lmgsys_latestVideos_vfxqo3v1o"]')
                    element11.remove()
                }
            }catch(ex){console.log(ex)}
        }

  })

