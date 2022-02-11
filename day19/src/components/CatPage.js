import Cat from "./CatBreedInfo";
import React from "react";
import axios from "axios";
import { FaCat } from 'react-icons/fa';

let getRandom = ()=>{
    return (Math.random() * 1000)
}

class CatPage extends React.Component {
    state = {
        data: [],
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

    render() {
        return (
            <div className="cat-page">
                <div className="main-infos">
                    <FaCat />
                    <h3> There are {this.state.data.length} cat breeds in the api.</h3>
                    <p>
                        The average weight of a cat is {this.calculateWeight()} kgs in metric unit.
                    </p>
                    <p>
                        The average lifespan is {this.calculateAge()} years.
                    </p>
                </div>
                <div className="cat-infos-wrapper">
                    {this.state.data.map((cat) => (
                        <Cat cat={cat} key={getRandom()}/>
                    ))}
                </div>
            </div>
        )
    }
}
export default CatPage;
