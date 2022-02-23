import React, { useState, useEffect, useRef } from 'react'

export default function TweetForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }
    return (
        <form className='tweet-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <textarea
                        type={'text'}
                        placeholder={'Update tweet'}
                        value={input}
                        name={'text'}
                        className={'tweet-input'}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='tweet-button'>Update</button>
                </>
            ) : (
                <>
                    <textarea
                        type={'text'}
                        placeholder={`What's happenning?...`}
                        value={input}
                        name={'text'}
                        className={'tweet-input'}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='tweet-button'><strong>Add Post</strong></button>
                </>
            )}
        </form>
    )
}
