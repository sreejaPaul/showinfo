import React from 'react';
import Card from './Card';
import './Showcard.css';

function Showcard(props) {

    return (
        <div className="showcard">
            {
                props.resultarray.map((showdata,index)=>{
                    return <Card key={index} array={showdata.show} score={showdata.score} />
                })
            }
        </div>
    )
}

export default Showcard
