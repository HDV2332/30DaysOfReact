import { IconContext } from 'react-icons'
import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
    TiSocialTwitterCircular,
} from 'react-icons/ti'
import {
    CgMail
} from 'react-icons/cg'
export const IconSection = () => {
    return (
        <IconContext.Provider value={{ color: 'cornflowerblue', size: '30px' }}>
            <div className='icon-section-styles'>
                <TiSocialLinkedinCircular />
                <TiSocialGithubCircular />
                <TiSocialTwitterCircular />
                <CgMail />
                <p>Get intouch with us</p>
            </div>
        </IconContext.Provider>
    )
}