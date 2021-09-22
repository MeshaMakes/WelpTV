import React, { useState, useEffect, createContext } from "react";


export const ScrapeContext = createContext({});


const ScrapeContextProvider = (props) => {
    const state = useState({});
    const scrapeSearch = ()=> search("hunter");
    const scrapeSeries = ()=>{
        
    }
    const scrapeEpisode = ()=>{
        
    }


    useEffect(() => {
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




function search(val){
    const corsProxy = "https://api.allorigins.win/get?url=";
    const url = corsProxy + "https://animeowl.net/?s=" + val;
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

        const items = page.querySelector("main[id='site-content'] div.posts-block div.posts");
        for(let i = 0; i < items.children.length; i++) {
            const obj = new DOMParser().parseFromString(items.children[i].innerHTML, 'text/html');
            const img = obj.querySelector('img').getAttribute('src');
            const name = obj.querySelector('a h4').innerHTML;
            const url = obj.querySelector('a.post-thumb').getAttribute('href').replace("/category/", "");
            const released = obj.querySelector('a div.ep-count').innerHTML.trim();
            list[i] = {
                image: img,
                name: name,
                url: url, 
                release: released,
            };
        }
        console.log(list);
    });


}

function stringFix(badString) {
    return badString.replaceAll("&amp;", "&").replaceAll("\\\"", "").replaceAll("&apos;", "'").replaceAll("&gt;", ">").replaceAll("&lt;", "<");
}

export default ScrapeContextProvider;