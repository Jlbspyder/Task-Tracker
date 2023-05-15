import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
        <h4>Version 2.0</h4>
        <Link style={{color: 'red', textDecorationLine: 'none'}}to='/'>Go Back</Link>
    </div>
  )
}

export default About
