var vid=false;
var soc=false;
var feat=false;

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
                
            

        //     try{
        //         //*[@id="ipsLayout_sidebar"]/div[2]/ul/li[2]
        // let element3 = document.evaluate("//*[@id='ipsLayout_sidebar']/div[2]/ul/li[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        // element3.singleNodeValue.remove()
        //     } catch(ex){
        // element3 = document.evaluate("//*[@id='ipsLayout_sidebar']/div[3]/ul/li[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        // element3.singleNodeValue.remove()
        //     }
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
            
        // try {    
        //     //*[@id="ipsLayout_sidebar"]/div[2]/ul/li[3]
        //     //*[@id="ipsLayout_sidebar"]/div[3]/ul/li[3]

            

        // // let element2 = document.evaluate("//*[@id='ipsLayout_sidebar']/div[2]/ul/li[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        // // element2.singleNodeValue.remove()
        // // } catch(ex){
        
        // // element2 = document.evaluate("//*[@id='ipsLayout_sidebar']/div[3]/ul/li[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        // // element2.singleNodeValue.remove()
        // }
        }
        
        if (items.vid == true){
            
            try {
            var element = document.querySelectorAll('div.lmg-card');
            for (let elem of element){
            elem.parentElement.removeChild(elem);
            } 
        }catch(ex){}
        }
        
        if (items.ad == true){

            try{
            var element5 = document.querySelector("div[data-role='sidebarAd']")
            element5.remove()
            } catch(ex){}
        }
        
  })

