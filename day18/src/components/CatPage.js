import React from "react";
import axios from "axios";

class CatPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            name: 'hdV',
        }
    }

    componentDidMount() {
        console.log('The component did mount and this is the last to run');
        const API_URL = 'https://api.thecatapi.com/v1/breeds'
        axios
            .get(API_URL)
            .then((response) => {
                this.setState({
                    data: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    renderCat = () => {
        return this.state.data.map((cat) => {
            return (
                <div key={cat.id}>
                    <div>
                        <p>
                            {cat.name}
                        </p>
                    </div>
                </div>
            )
        })
    }

    calculateWeight = () => {
        let totalWeight = 0
        this.state.data.forEach((cat) => {
            let estimateWeight = cat.weight.metric.split('-')
            let avgWeight = (parseInt(estimateWeight[1]) + parseInt(estimateWeight[0])) / 2
            totalWeight += avgWeight
        })
        let avgTotal = totalWeight / this.state.data.length
        return avgTotal.toFixed(2)
    }

    calculateAge = () => {
        let totalAge = 0
        this.state.data.forEach((cat) => {
            let estimateAge = cat.life_span.split('-')
            let avgAge = (parseInt(estimateAge[1]) + parseInt(estimateAge[0])) / 2
            totalAge += avgAge
        })
        let avgTotal = totalAge / this.state.data.length
        return avgTotal.toFixed(2)
    }

    countries = () => {
        //*find all country codes in api
        let countriesArr = []
        this.state.data.forEach((cat) => {
            countriesArr.push(cat.country_codes)
        })

        //*find country with most occurrences in the array found above
        let country = countriesArr[0]
        let occurrenceMap = {}

        for (let i in countriesArr) {
            const current = countriesArr[i]

            if (occurrenceMap[current]) {
                occurrenceMap[current]++
            } else {
                occurrenceMap[current] = 1
            }

            if (occurrenceMap[country] < occurrenceMap[current]) country = current
        }
        console.log(countriesArr);
        console.log(country);
        console.log(occurrenceMap[country]);

        //*count occurrence times of each
        const eachCountryCount = countriesArr.reduce((acc, curr) => {
            return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {})
        console.log(eachCountryCount);
        let tmp = Object.keys(eachCountryCount)[0]
        console.log(tmp);
        let tmpArr = Object.entries(eachCountryCount)
        console.log(tmpArr);

        let count = new Set(countriesArr).size
        return (
            <div>
                {/* {tmpArr[0]} */}
                {count} countries have cat breeds.
                The {country} has the most amount of cat breeds at {occurrenceMap[country]}
            </div>
        )
    }

    render() {
        const { name } = this.state
        console.log(name)
        return (
            <div>
                <h3>
                    This is the Cat Page
                </h3>
                <h4>
                    There are {this.state.data.length} cat breeds in the api
                </h4>
                <p>
                    The average weight is {this.calculateWeight()} in metric unit.
                    The average lifespan is {this.calculateAge()} years.
                </p>
                <p>
                    {this.countries()}
                </p>
            </div>
        )
    }
}

export default CatPage