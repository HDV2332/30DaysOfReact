import Button from './ultilities/Button'
import buttonStyles from '../styles/button-styles'

const Count = ({ count, addOne, minusOne }) => (
    <div className='count-section'>
        <h1>{count} </h1>
        <div>
            <Button text='+1' onClick={addOne} style={buttonStyles} />
            <Button text='-1' onClick={minusOne} style={buttonStyles} />
        </div>
    </div>
)

export default Count