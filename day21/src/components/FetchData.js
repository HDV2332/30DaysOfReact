import React, { useState, useEffect } from 'react'
import axios from 'axios'

const randomNum = ()=>{
    return Math.random()*1000
}

const Country = ({ country: { name, flag } }) => {
    return (
        <div className='country'>
            <div className='country_flag'>
                <img src={flag} alt={name} />
            </div>
            <h3 className='country_name'>{name.toUpperCase()}</h3>
            <div className='country_text'>
                <p>
                    <span>Population: </span>
                </p>
            </div>
        </div>
    )
}

const CountryApp = () => {
    // setting initial state and method to update state
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const API_URL = 'https://restcountries.com/v2/all'
        try {
            const response = await fetch(API_URL)
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='country-app'>
            <h1>Fetching Data Using Hook</h1>
            <h1>Calling API</h1>
            <div>
                <p>There are {data.length} countries in the api</p>
                <div className='countries-wrapper'>
                    {data.map((country) => (
                        <Country key={randomNum()} country={country} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CountryApp