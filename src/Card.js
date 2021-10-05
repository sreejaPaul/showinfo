import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


function Card(props) {
    return (
        <div className='dib br3 pa3 ma2 bw2 shadow-5' id="carddiv">
            <div id="picturediv"><img src={props.array.image.medium} alt="MoviePicture" id="movieposter" /></div>
            <div id="contentdiv">
                <div >
                    <h3>{"Name : "} <span className="contentvalue"> {props.array.name}</span></h3>
                </div>
                <div >
                    <h3>{"Language : "} <span className="contentvalue"> {props.array.language}</span></h3>
                </div>
                <div >
                    <h3>{"Premiered on : "} <span className="contentvalue"> {props.array.premiered}</span></h3>
                </div>
                <div >
                    <h3>{"Aired on : "} <span className="contentvalue">
                        {(props.array.network !== null) ? props.array.network.name : "No Information Available"}</span></h3>
                </div>
                <div >
                    <h3>{"Show Type : "} <span className="contentvalue">{props.array.type}</span></h3>
                </div>
                <div >
                    <h3>{"Critic Score : "} <span className="contentvalue"> {(props.score * 10).toFixed(2)}</span></h3>
                </div>
                <div >
                    <h3>{"User Rating : "} <span className="contentvalue"> {(props.array.rating.average !== null) ? props.array.rating.average : 0}</span></h3>
                </div>
            </div>
            <div id="btndiv">
                <Link to={"/ShowDetails/" + props.array.id + "/" + props.array.name}>
                    <button id="morebtn">
                        {"Know more "}
                        <FontAwesomeIcon icon={faArrowCircleRight} size="lg" style={{ marginLeft: "10px" }} />
                    </button>
                </Link>
            </div>

        </div>

    )
}

export default Card;
