import { React, useRef, useEffect } from "react";
import "./SeriesScreen.css"
import Navbar from "./../../Components/NavBar/NavBar"


const SeriesScreen = () => {
    const iframeRef = useRef();

    useEffect(() => {
      if (iframeRef && iframeRef?.current) {
        var width = iframeRef.current.getBoundingClientRect().width
        iframeRef.current.style.height = (width/1.45) + "px";
      }
    }, [iframeRef]);

    return (
        <div className="series">
            <div className="navContainer">
                <Navbar />
            </div>
            <div className="scroller">
            <div className="seriesMain">
                <div className="content">
                    <div className="video">
                        <iframe ref={iframeRef} src="https://play.api-web.site/video.php?id=MTcwODUx" scrolling="no" frameborder="0" allowFullScreen title="anything"></iframe>
                    </div>
                    <div className="details">
                        <img src="https://images.unsplash.com/photo-1628191079582-f982c2fe327b?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="sumn" />
                        <div className="info">
                            <span>
                                <span className="seriesTitle">Tile</span> 
                                <span className="seriesStatus">    Status</span>
                            </span>
                            <div className="genres">
                                <h1>1</h1>
                                <h1>2</h1>
                                <h1>3</h1>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro explicabo quis dolorum asperiores autem sint error eum numquam eius veritatis?</p>
                    </div>
                </div>
                <div className="episodes"></div>
            </div>
            </div>
        </div>
    )
}

export default SeriesScreen
