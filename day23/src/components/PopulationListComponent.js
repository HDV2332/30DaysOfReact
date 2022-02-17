import Countries from "./GroupListComponents/Countries"
import DisplayNum from "./GroupListComponents/DisplayNum"

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

const bodyStyles = {
    display: 'table-cell',
    flexDirection: 'column',
    margin: 5
}
const numBarStyles = {
    width: '40%',
    display: 'table-cell',
    flexDirection: 'column',
    margin: 5
}
const bodyContainerStyles = {
    alignItems: 'center',
    textAlign: 'center',
    display: 'table',
    width: '100%',
    fontWeight: 'bold'
}

const PopulationBody = ({ countries }) => {
    const countriesNameList = countries.map((country) => (
        <Countries key={country.name} country={country} />
    ))
    const countriesPopulationBarList = countries.map((country) => (
        < PopulationBar key={country.name} country={country} />
    ))
    const countriesPopulationList = countries.map((country) => (
        < DisplayNum key={country.name} country={country} />
    ))
    return (
        <div style={bodyContainerStyles}>
            <div style={bodyStyles}>
                {countriesNameList}
            </div>
            <div style={numBarStyles}>
                {countriesPopulationBarList}
            </div>
            <div style={bodyStyles}>
                {countriesPopulationList}
            </div>
        </div>
    )
}

export default PopulationBody