import React from "react";
import axios from "axios";

class RandomUser extends React.Component {
    state = {
        loading: true,
        person: null
    }

    async componentDidMount() {
        const URL = 'https://api.randomuser.me/';
        axios
            .get(URL)
            .then((response) => {
                console.log(response.data.results[0]);
                this.setState({
                    loading: false,
                    person: response.data.results[0]
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        if (this.state.loading) {
            return <div>Loading Data...</div>
        }

        if (!this.state.person) {
            return <div>Unable to find a person.</div>
        }

        return (
            <div className="random-user-styles">
                <h3>Calling random user data</h3>
                <div>
                    <img src={this.state.person.picture.medium} alt='' />
                </div>
                <p>User Name: {this.state.person.name.first} {this.state.person.name.last}</p>
                <p>User Gender: {this.state.person.gender}</p>
                <p>
                    User Address: {this.state.person.location.street.number} {this.state.person.location.street.name}, {this.state.person.location.city}, {this.state.person.location.state}, {this.state.person.location.country}
                </p>
            </div>
        )
    }
}

export default RandomUser