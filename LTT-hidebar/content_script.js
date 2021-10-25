var vid=false;
var soc=false;
var feat=false;

chrome.storage.sync.get({
    vid: false,
    social: false,
    feat: false
  }, function(items) {
    console.log(items.vid);
    console.log(items.social);
    console.log(items.feat);
        vid=items.vid;
        soc=items.social;
        feat=items.feat;

        if (items.feat==true){
            console.log("feat");
        let element3 = document.evaluate("//*[@id='ipsLayout_sidebar']/div[2]/ul/li[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        element3.singleNodeValue.remove()
        }

        
        if (items.social==true){
            console.log("soc");
        let element2 = document.evaluate("//*[@id='ipsLayout_sidebar']/div[2]/ul/li[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        element2.singleNodeValue.remove()
        }
        
        if (items.vid == true){
            
            console.log("vid");
            var element = document.querySelectorAll('div.lmg-card');
            for (let elem of element){
            elem.parentElement.removeChild(elem);
        }
        }
        
        
  })


  


console.log(vid)
