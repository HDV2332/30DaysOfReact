import React, { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { FaRegComment, FaRetweet, FaRegHeart } from 'react-icons/fa'
import { format } from 'date-fns';
import TweetForm from './TweetForm';

export default function Tweet({ tweets, removeTweet, editTweet }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitEdit = (value) => {
        editTweet(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TweetForm edit={edit} onSubmit={submitEdit} />
    }

    const date = format(new Date(), "dd/MM/yyyy' 'HH:mm")

    return tweets.map((tweet, index) => (
        <div className={'tweet-row'} key={index}>
            <div className='username-tweet'>
                <BiUserCircle style={{ width: '30px', height: '30px' }} />
                <strong>Anonymous User</strong>
                {' '}
                <small>@Anonymous</small>
            </div>
            <div key={tweet.id} className='tweet-text'>
                <p>{tweet.text}</p>
            </div>
            <div className='tweet-options'>
                <div className='tweet-icons'>
                    <TiEdit
                        onClick={() => { setEdit({ id: tweet.id, value: tweet.text }) }}
                        className='edit-icon'
                    />
                    <RiCloseCircleLine
                        onClick={() => { removeTweet(tweet.id) }}
                        className='delete-icon'
                    />
                </div>
                <div className='react-icons'>
                    <FaRegComment className='comment-icon'/>
                    <FaRegHeart  className='heart-icon'/>
                    <FaRetweet  className='retweet-icon'/>
                </div>
                <div className='tweet-date'>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    ))
}
