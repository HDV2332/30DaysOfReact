import PopulationApp from "./PopulationApp"
import HexaColorApp from "./HexaColorApp"
import NumberGen from "./NumberGen"
import { Link, Switch, Route } from "react-router-dom"

const Projects = () => {
    return (
        <div className="project-page">
            <h3>These are my projects</h3>
            <div className="projects-container">
                <div className="side-menu">
                    <div className="side-wrapper">
                        <Link to={'/projects'} className='project-link' >
                            <h4>&#9776;</h4>
                        </Link>
                        <Link to={'/projects/population'} className='project-link'>
                            <li>Population App</li>
                        </Link>
                        <Link to={'/projects/hexacolor'} className='project-link'>
                            <li>Hexa Color App</li>
                        </Link>
                        <Link to={'/projects/numgen'} className='project-link'>
                            <li>Number Generator App</li>
                        </Link>
                    </div>
                </div>
                <div className="project-showcase-section">
                    <Switch>
                        <Route path={'/projects/population'} component={PopulationApp} />
                        <Route path={'/projects/hexacolor'} component={HexaColorApp} />
                        <Route path={'/projects/numgen'} component={NumberGen} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
export default Projects