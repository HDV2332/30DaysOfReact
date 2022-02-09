import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <Link to='/' className='link-styles'>
                <h3>&#x2615;</h3>
            </Link>
            <ul className="nav-links">
                <Link to={'/about'} className='link-styles'>
                    <li>About</li>
                </Link>
                <Link to={'/projects'} className='link-styles'>
                    <li>Projects</li>
                </Link>
                <Link to={'/contact'} className='link-styles'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar