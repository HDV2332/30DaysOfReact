import randomHexString from './ultilities/randomHexString'
import hexaBlockStyles from '../styles/hexa-color-styles'
import { BsClipboard } from 'react-icons/bs'

const HexaColor = () => {
    let colorText = randomHexString()
    return (
        <div style={{ backgroundColor: colorText, ...hexaBlockStyles }}>
            <h2>{colorText}</h2>
            <button
                onClick={() => { navigator.clipboard.writeText(colorText) }}
                style={{backgroundColor: colorText}}
                className='hex-text-button'
                title='Copy this color'
            >
                    <BsClipboard className='hex-button-icon' />
            </button>
        </div>
    )
}

export default HexaColor