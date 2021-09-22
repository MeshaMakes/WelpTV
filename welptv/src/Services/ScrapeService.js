import React, { useState, useEffect, createContext } from "react";


export const ScrapeContext = createContext({});


const ScrapeContextProvider = (props) => {
    const state = useState({});
    const scrapeLatest = ()=> latest();
    const scrapeSearch = ()=> search("hunter x");
    const scrapeSeries = ()=>{
        
    }
    const scrapeEpisode = ()=>{
        
    }


    useEffect(() => {
        scrapeLatest();
        scrapeSearch();
        scrapeSeries();
        scrapeEpisode();
    }, []);
    
    return (
        <ScrapeContext.Provider value={state}>
            {props.children}
        </ScrapeContext.Provider>
    );
}




function latest(){
    const corsProxy = "https://api.allorigins.win/get?url=";
    const url = corsProxy + "https://www.animekisa.cc/home";
    fetch(url).then(function(response){
        if(response.ok) {
            return response.text();
        }else{
            // get error message from body or default to response statusText
            //const error = (data && data.message) || response.statusText;
            //console.error('error:', error);
        }
    }).then(function(data){
        let list = [];
	    var page = new DOMParser().parseFromString(stringFix(data), 'text/html');

        const items = page.querySelector("div.main-container div.maindark div.mwb-2col div.mwb-left div.episode");
        
        for(let i = 0; i < items.children.length; i++) {
            const obj = new DOMParser().parseFromString(items.children[i].outerHTML, 'text/html');
            const img = obj.querySelector('div.epi-img img').getAttribute('src');
            const name = obj.querySelector('div.epi-inf div.epi-tit').innerHTML;
            const url = obj.querySelector('a').getAttribute('href').replace("/category/", "");
            const status = obj.querySelector('div.epi-inf div.epi-no').innerHTML.trim();
            list[i] = {
                image: img,
                name: name,
                url: url,
                extra: status,
            };
        }
        console.log(list);
    });


}
function search(val){
    const corsProxy = "https://api.allorigins.win/get?url=";
    const url = corsProxy + "https://www.animekisa.cc/search?name=" + val;
    fetch(url).then(function(response){
        if(response.ok) {
            return response.text();
        }else{
            // get error message from body or default to response statusText
            //const error = (data && data.message) || response.statusText;
            //console.error('error:', error);
        }
    }).then(function(data){
        let list = [];
	    var page = new DOMParser().parseFromString(stringFix(data), 'text/html');

        const items = page.querySelector("div.main-container div.maindark div.zr-list ul");
        
        for(let i = 0; i < items.children.length; i++) {
            const obj = new DOMParser().parseFromString(items.children[i].innerHTML, 'text/html');
            const img = obj.querySelector('a div img').getAttribute('src');
            const name = obj.querySelector('a div span.result-title').innerHTML;
            const url = obj.querySelector('a.asfo').getAttribute('href').replace("/category/", "");
            const status = obj.querySelector('a div span.result-latest').innerHTML.trim();
            list[i] = {
                image: img,
                name: name,
                url: url,
                extra: status,
            };
        }
        console.log(list);
    });


}

function stringFix(badString) {
    return badString.replaceAll("&amp;", "&").replaceAll("\\\"", "").replaceAll("&apos;", "'").replaceAll("&gt;", ">").replaceAll("&lt;", "<");
}

export default ScrapeContextProvider;