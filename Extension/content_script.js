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
            try{
                
        let element3 = document.evaluate("//*[@id='ipsLayout_sidebar']/div[2]/ul/li[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        element3.singleNodeValue.remove()
            } catch(ex){}
            try{
        element3 = document.evaluate("//*[@id='ipsLayout_sidebar']/div[3]/ul/li[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        element3.singleNodeValue.remove()
            } catch(ex){}
        }

        
        if (items.social==true){

        try {    
        let element2 = document.evaluate("//*[@id='ipsLayout_sidebar']/div[2]/ul/li[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        element2.singleNodeValue.remove()
        } catch(ex){}
        try{
        element2 = document.evaluate("//*[@id='ipsLayout_sidebar']/div[3]/ul/li[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        element2.singleNodeValue.remove()
        } catch(ex){}
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

