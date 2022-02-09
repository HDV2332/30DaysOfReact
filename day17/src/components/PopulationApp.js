import { tenHighestPopulation } from '../data/tenHighestPopulation.js';
import Header from './Header'
import Description from './Description'

const Countries = ({ country: { name } }) => {
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

const PopulationBar = ({ country: { population } }) => {
    let percentage = (population / 7693165599) * 100
    const poppulationBarStyles = {
        width: `${percentage}%`,
        backgroundColor: 'orange',
    }
    const hideTextStyles = {
        visibility: 'hidden'
    }
    return (
        <div >
            <p style={poppulationBarStyles}>
                <span style={hideTextStyles}>{percentage}</span>
            </p>
        </div>
    )
}

const PopulationNum = ({ country: { population } }) => {
    return (
        <div>
            <p>{population}</p>
        </div>
    )
}

const Body = ({ countries }) => {
    const countriesNameList = countries.map((country) => (
        < Countries key={country.name} country={country} />
    ))
    const countriesPopulationBarList = countries.map((country) => (
        < PopulationBar key={country.name} country={country} />
    ))
    const countriesPopulationList = countries.map((country) => (
        < PopulationNum key={country.name} country={country} />
    ))
    return (
        <div className='body-container-styles'>
            <div className='body-styles'>
                {countriesNameList}
            </div>
            <div className='numbar-styles'>
                {countriesPopulationBarList}
            </div>
            <div className='body-styles'>
                {countriesPopulationList}
            </div>
        </div>
    )
}

const PopulationApp = () => {
    const title = '30 Days Of React'
    const description = 'World Population'
    const data = tenHighestPopulation
    console.log(data);
    return (
        <div className='population-app-styles'>
            <Header message={title} />
            <Description message={description} />
            <Body countries={data} />
        </div>
    )
}

export default PopulationApp
