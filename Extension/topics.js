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
    
    ////
    mbadges: false,
    group: false,
    location: false,
    rank: false,
    pcount: false,
    soln: false,
    logging: false,
    badgemargin: false
  }, function(items) {

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
                    if (items.soln){if(posts[1])posts[1].parentElement.remove();posts[0].innerText = posts[0].getAttribute("title");}else{posts[0].innerHTML = '<i class="fa fa-comment"></i> '+ posts[0].getAttribute("title").replace(" posts", "");}
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


        if (items.badgemargin){
            document.querySelectorAll(".cAuthorGroupIcon").forEach(e => {e.style.margin = "3px"; console.log("badges")})
            }



        

  })