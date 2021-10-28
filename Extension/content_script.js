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
    vid: false,
    social: false,
    feat: false,
    ad: false
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
        
        if (items.vid == true){
            
            try {
                var element = document.querySelectorAll('div.lmg-card');
                for (let elem of element){
                    elem.parentElement.removeChild(elem);
                } 
            }catch(ex) {}
        }
        
        if (items.ad == true){

            try{
                var element5 = document.querySelector("div[data-role='sidebarAd']")
                element5.remove()
            } catch(ex) {}
        }
        
  })

