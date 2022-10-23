import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className = 'logo'>
            <img src = {LogoS} alt = 'logo' />
            {/* <img src = {LogoSubtitle} className = 'sub-logo' alt = 'slobadan' /> */}
        </Link>
        <nav>
            <NavLink exact = 'true' activeclassname = 'active' to = '/'>
                <FontAwesomeIcon icon = {faHome} color = '#4d4d4e' />
            </NavLink>
            <NavLink exact = 'true' activeclassname = 'active' className = 'about-link' to = '/about'>
                <FontAwesomeIcon icon = {faUser} color = '#4d4d4e' />
            </NavLink>
            <NavLink exact = 'true' activeclassname = 'active' className = 'contact-link' to = '/contact'>
                <FontAwesomeIcon icon = {faEnvelope} color = '#4d4d4e' />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target = '_blank' rel = 'noreferrer' href = 'https://www.linkedin.com/in/talal-h/'> 
                    <FontAwesomeIcon icon = {faLinkedin} color = '#4d4d4e'/>
                </a>
                <a target = '_blank' rel = 'noreferrer' href = 'https://github.com/Talal-94'> 
                    <FontAwesomeIcon icon = {faGithub} color = '#4d4d4e'/>
                </a>
                <a target = '_blank' rel = 'noreferrer' href = 'https://twitter.com/Talal948'> 
                    <FontAwesomeIcon icon = {faTwitter} color = '#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar