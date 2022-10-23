import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    
    const letterClass = 'text-animate'
    const nameArray = ['a', 'l', 'a', 'l', '', 'A', 'l', 'h', 'a', 't', 'h', 'a', 'l', '.']
    const jobArray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    return (

        <div className = 'container home-page'>
            <div className = "text-zone">

                <h1> 
                <span className = {letterClass}>H</span>
                <span className = {`${letterClass} _12`}>i,</span>
                <br />
                <span className = {`${letterClass} _13`}>I</span>
                <span className = {`${letterClass} _14`}>'m</span>

                <img src = {LogoTitle} alt = "developer" />
                <AnimatedLetters 
                letterClass = {letterClass} 
                strArray = {nameArray} 
                idx = {15} />
                <br />
                <AnimatedLetters 
                letterClass = {letterClass} 
                strArray = {jobArray} 
                idx = {22} />                
                </h1>

                <h2> FrontEnd Developer | JavaScript Expert | React </h2>
                <Link to = '/contact' className = 'flat-button'> Contact Me</Link>
            </div>
        </div>
    )
}

export default Home