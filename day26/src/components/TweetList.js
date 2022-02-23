import React, { useState } from 'react'
import Tweet from './Tweet'
import TweetForm from './TweetForm'

export default function TweetList() {
    const [tweets, setTweets] = useState([
        {
            id: Math.floor(Math.random() * 10000),
            text: 'This is a demo of Twitter clone.'
        },
        {
            id: Math.floor(Math.random() * 10000),
            text: 'My name is hdV.'
        },
        {
            id: Math.floor(Math.random() * 10000),
            text: `This is the last mini project of this 30 day course. Gotta be honest, feeling a bit strange at the moment `
        }
    ])

    const addTweet = tweet => {
        if (!tweet.text || /^\s*$/.test(tweet.text)) {
            return
        }

        const newTweets = [...tweets, tweet]
        setTweets(newTweets)
        console.log(newTweets);
    }

    const editTweet = (tweetId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTweets(prev => prev.map(item => item.id === tweetId ? newValue : item))
    }

    const deleteTweet = (id) => {
        const removeArr = [...tweets].filter(tweet => tweet.id !== id)
        setTweets(removeArr)
    }

    return (
        <div className='app-wrapper'>
            <div className='app'>
                <h1>News feed</h1>
                <TweetForm onSubmit={addTweet} />
                <Tweet tweets={tweets} removeTweet={deleteTweet} editTweet={editTweet} />
            </div>
        </div>
    )
}
