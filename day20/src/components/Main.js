import TechList from './TechList'
import UserCard from './UserCard'
import Button from './ultilities/Button'
import buttonStyles from '../styles/button-styles'
import Count from './Count'

const Main = (props) => {
    const {
        techs,
        user,
        greetPeople,
        handleTime,
        changeBackground,
        count,
        addOne,
        minusOne,
    } = props
    return (
        <main>
            <div className='main-wrapper'>
                <p>Prerequisite to get started react.js:</p>
                <ul>
                    <TechList techs={techs} />
                </ul>
                <Button
                    text='Greet People'
                    onClick={greetPeople}
                    style={buttonStyles}
                />
                <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
                <Button
                    text='Change Background'
                    onClick={changeBackground}
                    style={buttonStyles}
                />
                <Count count={count} addOne={addOne} minusOne={minusOne} />
                <br />
                <br />
                <UserCard user={user} />
            </div>
        </main>
    )
}

export default Main