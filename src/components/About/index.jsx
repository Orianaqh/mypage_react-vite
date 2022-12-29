import { Link } from 'react-router-dom';
import Loader from 'react-loaders'
import './index.scss'
import ExtraSatz from '../ExtraSatz/index'
import Sidebar from '../Sidebar';

const About = () => {
  // const [letterClass, setLetterClass] = React.useState('text-animate')
  // const nameArray = ['o', 'r', 'i', 'a', 'n', 'a']


  return(
    <div className='container about-page'>

      <Sidebar/>

      <ExtraSatz/>

      <div className='about-info-text'>
        <div className='about-text'>
          <h1 className='intro-aboutme'>Ein bisschen <br></br>über mich</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere soluta pariatur hic ipsa quaerat! Enim, corporis nostrum officiis dicta perspiciatis culpa ipsam ipsa, voluptatem illo nihil dolorum, nemo aspernatur nam. Blanditiis recusandae minus laudantium dolor, quo mollitia fugit explicabo rerum, quia, et necessitatibus ut magni? Delectus adipisci dolorem dolores beatae!
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere soluta pariatur hic ipsa quaerat! Enim, corporis nostrum officiis dicta perspiciatis culpa ipsam ipsa, voluptatem illo nihil dolorum, nemo aspernatur nam. Blanditiis recusandae minus laudantium dolor, quo mollitia fugit explicabo rerum, quia, et necessitatibus ut magni? Delectus adipisci dolorem dolores beatae!
          </p>
          
          <div>
          <Link 
            exact='true'
            to='/'
            activeclassname="active">
            <h2 className='button-home'>Zurück</h2>
          </Link>
          </div>
        </div>
      </div>

    </div>
  )
};

export default About