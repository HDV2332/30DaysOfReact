import axios from "axios";
import React, { useEffect, useState } from "react";
import PopulationBody from './PopulationListComponent'
import LanguageBody from './LanguageListComponent'
import CountryDetails from './SearchBarComponents/CountryDetails'

let getRandom = () => {
    return (Math.random() * 1000)
}

const CountryList = () => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);

    const [search, setSearch] = useState('')
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const API_URL = 'https://restcountries.com/v2/all'
        await axios
            .get(API_URL)
            .then((response) => {
                setData(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        setFilteredCountries(
            data.filter(country => (
                country.name.toLowerCase().includes(search.toLowerCase())
            ))
        )
    }, [search, data])

    const sortCountry = (array) => {
        let arr1 = [{ name: 'World', population: 7693165599 }]
        let sortedPop = array.slice().sort((a, b) => (b.population) - (a.population))
        for (let i = 0; i < 10; i++) {
            arr1.push(sortedPop[i])
        }
        return arr1
    }

    // lấy ngôn ngữ từng nước ra khỏi data
    const totalLang = (array) => {
        let totalArr = []
        for (let i = 0; i < array.length; i++) {
            array[i].languages.forEach(lang => {
                totalArr.push(lang.name)
            })
        }
        return totalArr
    }

    // đếm lần ngôn ngữ xuất hiện
    const eachLangCount = (array) => {
        return (array).reduce((acc, curr) => {
            return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {})
    }

    const sortArray = (obj) => {
        let arrKey = Object.keys(obj) //lấy các ngôn ngữ
        let tmpArr = []
        let resultArr = []
        for (const key in obj) {
            tmpArr.push(obj[key]) // lấy số lần ngôn ngữ xuất hiện 
        }

        //đưa ngôn ngữ và số lần xuất hiện tương ứng vào array 
        for (let i = 0; i < arrKey.length; i++) {
            let obj = {
                name: '',
                count: ''
            }
            obj.name = arrKey[i]
            obj.count = tmpArr[i]
            resultArr = [...resultArr, obj]
        }
        return resultArr
    }

    const sortLang = (array) => {
        let arr = []
        let sortedPop = array.slice().sort((a, b) => (b.count) - (a.count))
        for (let i = 0; i < 10; i++) {
            arr.push(sortedPop[i])
        }
        return arr
    }

    //Search Bar
    const SearchList = (data) => {
        return (
            <div className="search-list-wrapper">
                {data.map(country => (
                    <CountryDetails key={getRandom()} country={country} />
                ))}
            </div>
        )
    }

    let criteria
    if (filteredCountries.length === 250) {
        criteria = <p></p>
    } else {
        criteria = <p>{filteredCountries.length} satified the search criteria.</p>
    }

    // console.log(data);
    let render
    if (isLoading) {
        render = <div>
            Loading...
        </div>
    } else {
        let x = eachLangCount(totalLang(data))
        let langData = sortArray(x)
        console.log(sortLang(langData));
        render = <div>
            <PopulationBody countries={sortCountry(data)} />
            <LanguageBody countries={sortLang(langData)} />
            <h3>Countries List</h3>
            <div className="search-input-wrapper">
                <input type='text' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
            </div>
            {criteria}
            {SearchList(filteredCountries)}
        </div>
    }


    return (
        <div>
            <div>
                <h2>World Countries Data</h2>
                <p>Currently, we have {data.length} countries</p>
            </div>
            {render}
        </div>
    )
}

export default CountryList

