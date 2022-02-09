import remyPuke from '../images/remyPuke.png'
import { format } from 'date-fns'

const userName = 'hdV'
const userPosition = 'Intern'
const userWhereAbouts = 'Ha Noi'
const skills = [
    'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux',
    'Node', 'MongoDB', 'Flask', 'Django', 'Numpy',
    'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL',
    'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
]
const formattedDate = format(new Date(), 'do MMM, yyyy')

const SkillsRow = () => {
    const skillsFormatted = skills.map((skill) => <div key={skill} className={'skills-styles'}>{skill}</div>)
    return (
        <div className={'skills-row-styles'}>
            <h4>SKILLS</h4>
            {skillsFormatted}
        </div>
    )
}

const JoinedDate = () => (
    <div>Joined on {formattedDate}</div>
)

const VerifiedUser = () => {
    return (
        <div className='verified-user-styles'>
            <div className='name-styles'>{userName}</div>
            <div >&#10003;</div>
        </div>
    )
}

const UserInfo = () => {
    const imageStyles = {
        borderRadius: '50%',
        width: 200,
        height: 200
    }
    return (
        <div className='user-info-container-styles'>
            <img style={imageStyles} src={remyPuke} alt="remy" />
            <VerifiedUser />
            <div className='extra-info-styles'>{userPosition}, {userWhereAbouts}</div>
            <SkillsRow />
        </div>
    )
}

const About = () => {
    return (
        <div className='about-wrapper-styles'>
            <div className='about-styles'>
                <UserInfo />
                <JoinedDate />
            </div>
        </div>
    )
}

export default About