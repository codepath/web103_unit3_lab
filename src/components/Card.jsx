import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => { 
    
    const [gift, setGift] = useState({id: 0, name: "", pricepoint: "", audience: "", image: ""})

    useEffect(() => {
        setGift({id: props.id, name: props.name, pricepoint: props.pricepoint, audience: props.audience, image: props.image});
    }, [props]);

    return (
        <div className="card">
            <div className='top-container' style={{ backgroundImage:`url(${gift.image})`}}></div>
            <div className='bottom-container'>
                <h3>{gift.name}</h3>
                <p>{'Price: ' + gift.pricepoint}</p>
                <p>{'Great For: ' + gift.audience}</p>
                <Link to={'/gift/' + gift.id}><a>Read More →</a></Link>
            </div>
        </div>
    )
}

export default Card