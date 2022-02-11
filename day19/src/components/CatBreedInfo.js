import React, { useState, useEffect } from "react";
import axios from "axios";

const Cat = ({
    cat: {
        name,
        id,
        origin,
        temperament,
        life_span,
        weight: { metric },
        description,
        reference_image_id
    } }) => {

    // const URL = `https://api.thecatapi.com/v1/images/search?breed_id=${id}`

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     axios
    //         .get(URL)
    //         .then((response) => {
    //             setData(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [])

    let image_src = `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`

    return (
        <div className='cat-infos' key={id}>
            <div className="cat-infos-image-container">
                <img src={image_src} alt={name}></img>
            </div>
            <h3 className="cat-infos-name">Breed name: {name}</h3>
            <div className="cat-infos-align-left">
                <div className="cat-infos-origin">
                    <span className="header">Origin: </span>
                    <span >{origin}</span>
                </div>
                <div className="cat-infos-temperament">
                    <span className="header">Temperament: </span>
                    <span>{temperament}</span>
                </div>
                <div className="cat-infos-lifespan">
                    <span className="header">Life span: </span>
                    <span>{life_span} years</span>
                </div>
                <div className="cat-infos-weight">
                    <span className="header">Weight: </span>
                    <span>{metric} kilograms</span>
                </div>
                <div>
                    <h4>Description: </h4>
                    <p className="cat-infos-description">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cat