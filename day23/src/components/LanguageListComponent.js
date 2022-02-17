import Countries from "./GroupListComponents/Countries"

const bodyContainerStyles = {
    alignItems: 'center',
    textAlign: 'center',
    display: 'table',
    width: '100%',
    fontWeight: 'bold'
}

const bodyStyles = {
    display: 'table-cell',
    flexDirection: 'column',
    margin: 5,
    width: '50%'
}

const DisplayNum = ({ country: { count } }) => {
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

const LanguageBody = ({ countries }) => {
    const countriesNameList = countries.map((country) => (
        <Countries key={country.name} country={country} />
    ))
    const languageCountList = countries.map((country) => (
        < DisplayNum key={country.name} country={country} />
    ))
    return (
        <div>
            <p> Top 10 spoken languages</p>
            <div style={bodyContainerStyles}>
                <div style={bodyStyles}>
                    {countriesNameList}
                </div>
                <div style={bodyStyles}>
                    {languageCountList}
                </div>
            </div>
        </div>
    )
}

export default LanguageBody