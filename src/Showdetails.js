import React, { useState, useEffect } from 'react';
import './Showdetails.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc, faExternalLinkSquareAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

function Showdetails(props) {
    const [name, setname] = useState("");
    const [genre, setgenre] = useState([]);
    const [image, setimage] = useState("");
    const [summary, setsummary] = useState("");
    const [watchlink, setwatchlink] = useState("");
    const [imdblink, setimdblink] = useState("");
    const [date, setdate] = useState("");
    const[language,setlang] = useState("");

    const showid = parseInt(useParams().ShowId);
    useEffect(() => {
        const objectarray = props.resultarray.map((object, index) => {
            return object;
        })
        const showarray = objectarray.filter((showdetail, index) => {
            return showdetail.show.id === showid;
        })
        setname(showarray[0].show.name);
        setgenre(showarray[0].show.genres);
        setimage(showarray[0].show.image.original);
        setsummary(showarray[0].show.summary);
        setwatchlink(showarray[0].show.officialSite);
        setimdblink(showarray[0].show.externals.imdb);
        setdate(showarray[0].show.premiered);
        setlang(showarray[0].show.language);
    }, [showid,props.resultarray]);



    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const onclick = (event) => {
        const targetid = event.target.id;

        if (targetid === "watchlink")
            openInNewTab(watchlink);
        else if (targetid === "IMDBlink")
            openInNewTab("https://www.imdb.com/title/" + imdblink + "/");
    }
    return (
        <div >
            <div className="detail">
                <div className="leftdiv">
                    <img src={image} alt={name + "pic"} />
                </div>

                <div className="rightdiv" >
                    <div id="title"><b>{name + " ( " + language + " ) "}</b></div>
                    <p></p>
                    <div className="slidediv">
                        <div className="date">
                            <b>{"Premiered : "}</b>{" " + date}
                        </div>
                    </div>

                    <br></br>
                    <div>
                        <b>{"Genre : "}</b>
                        {(genre.length > 0) ?
                            genre.map((genre, i) => {
                                return (
                                    <span className="genre" key={i}>
                                        <FontAwesomeIcon icon={faCompactDisc} size="xs" />
                                        {" " + genre}
                                    </span>
                                );
                            }) : "No Records Found"}
                    </div>

                    <div className="overview">
                        <b>{"Summary : "}</b>
                        <p></p>
                        {summary}
                    </div>

                    <div className="buttondiv">
                        {(watchlink !== null) ?
                            <button id={"watchlink"} onClick={onclick} className="btn">
                                <FontAwesomeIcon icon={faExternalLinkSquareAlt} size="lg" style={{ marginRight: "10px" }} />
                                {"Watch here"}
                            </button> : null}
                        {(imdblink !== null) ?
                            <button id={"IMDBlink"} onClick={onclick} className="btn">
                                <FontAwesomeIcon icon={faImdb} size="lg" style={{ marginRight: "10px" }} />
                                {"IMDB"}
                            </button> : null}
                        <Link to="/">
                            <button className="btn">
                                <FontAwesomeIcon icon={faHome} size="lg" style={{ marginRight: "10px" }} />
                                {"Home"}
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Showdetails;
