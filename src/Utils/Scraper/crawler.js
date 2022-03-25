const crawler = ({ siteName, action }) => {
    // using the configurations described in the yaml, scrape the website and get the info

    const getFromStorage = async ({ fileName }) => {
        // get file from Storage
        return ""
    }

    const getJsonConfig = async ({ siteName, action }) => {
        // use siteName to get the correct yaml file from Firebase Storage
        const data = await getFromStorage(siteName)
        const json = JSON.parse(data)
        return json[action]
    }

    const fetchPage = ({ url, stringFix }) => {
        const data = await fetch(url).then(function (response) {
            if(response.ok) {
              return response.text()
            } else {
              // get error message from body or default to response statusText
              //const error = (data && data.message) || response.statusText;
              //console.error('error:', error);
              throw new Error("boom")
            }
          })
        const page = new DOMParser().parseFromString(stringFix(data), "text/html")
        return page
    }

    const actionConfig = getJsonConfig({ siteName, action })
    const page = fetchPage({ url: actionConfig.url, stringFix })

    //now start scraping
    const dataList = actionConfig.queries.map((query) => {
        // return the result of running this query on the page
    })

    return  {
      hasData: true,
      hasError: false,
      data: dataList,
    }
}


function stringFix(badString) {
    return badString
      .replaceAll("&amp;", "&")
      .replaceAll('\\"', "")
      .replaceAll("&apos;", "'")
      .replaceAll("&gt;", ">")
      .replaceAll("&lt;", "<")
      .replaceAll("\\n", "");
}
