import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss'

const Layout = () => {

  return (
    <div className='home-page'>
      <Sidebar />

      <Outlet/>

{/* Großer Text in der Hauptseite - intro ------------------------*/}
      <div className='info-text'>
        <div className='big-text'>
        <h1>Hola! ich <br />
          bin  
          <Link 
            exact='true'
            to='/about'
            activeclassname="active">
          <span className='my-name'>Oriana Quintero,</span>
          </Link><br></br>Grafik-designerin und <br></br>Junior Full-Stack entwicklerin.</h1>
        </div>
      </div>
    </div>
  )
}

export default Layout