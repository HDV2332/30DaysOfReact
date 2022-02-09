import { IconContext } from 'react-icons'
import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
    TiSocialTwitterCircular,
} from 'react-icons/ti'
import {
    CgMail
} from 'react-icons/cg'

const Contact = () => {
    return (
        <IconContext.Provider value={{ color: 'cornflowerblue', size: '30px' }}>
            <div className='icon-wrapper'>
                <div className='icon-section'>
                    <a href='https://vn.linkedin.com/' target={'blank'}>
                        <TiSocialLinkedinCircular />
                    </a>
                    <a href='https://github.com/HDV2332' target={'blank'}>
                        <TiSocialGithubCircular />
                    </a>
                    <a href='https://twitter.com/home' targer={'blank'}>
                        <TiSocialTwitterCircular />
                    </a>
                    <a href="mailto:hadangvu2332@gmail.com" target={'blank'}>
                        <CgMail />
                    </a>
                </div>
                <p>Get intouch with us</p>
            </div>
        </IconContext.Provider>
    )
}

export default Contact