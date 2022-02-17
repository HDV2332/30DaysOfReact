const CountryDetails = ({ country: { name, flag, capital, languages, population } }) => {
    const languageOrLanguages = languages.length > 1 ? 'Languages' : 'Language'
    const formatLanguages = languages.map(({ name }) => name).join(', ')
    const imgStyles = {
        width: "100px",
        height: "75px"
    }
    return (
        <div className="search-country-infos">
            <p>
                <img src={flag} alt={name} style={imgStyles} />
            </p>
            <p>Name: {name}</p>
            <p>Capital: {capital}</p>
            <p>
                {languageOrLanguages}: {formatLanguages}
            </p>
            <p>Population: {population}</p>
        </div>
    );
};

export default CountryDetails