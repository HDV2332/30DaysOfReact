import React from "react"

const h4Styles = {
    marginTop: 20,
    marginBottom: 10
}

class SkillsRow extends React.Component {
    render() {
        let { skills, description, indivisualStyles } = this.props
        const skillsFormatted = skills.map((skill) => <div key={skill} style={indivisualStyles}>{skill}</div>)
        return (
            <div>
                <h4 style={h4Styles}>{description}</h4>
                {skillsFormatted}
            </div>
        )
    }
}

export default SkillsRow