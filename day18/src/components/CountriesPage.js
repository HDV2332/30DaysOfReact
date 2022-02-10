import React from "react";
import axios from "axios";
import Country from "./Country";

class CountriesPage extends React.Component {
    state = {
        data: [],
    }

    componentDidMount() {
        this.fetchCountryData()
    }
    fetchCountryData = async () => {
        const url = 'https://restcountries.com/v2/all'
        try {
            const response = await axios.get(url)
            const data = await response.data
            this.setState({
                data,
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className='App'>
                <div>
                    <p>There are {this.state.data.length} countries in the api</p>
                    <div className='countries-wrapper'>
                        {this.state.data.map((country) => (
                            <Country country={country} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default CountriesPage