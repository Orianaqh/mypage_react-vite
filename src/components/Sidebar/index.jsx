import * as React from 'react'
import { Slide } from "@progress/kendo-react-animation";
import { FaLinkedinIn, FaBehance, FaGithub} from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { TbPaperclip } from 'react-icons/tb'
import circle from '../../assets/images/circle.png'

import './index.scss'

function Sidebar() {
  const [show, setShow] = React.useState(false);
  // const [direction, setDirection] = React.useState("down");
  
  // const onClick = (e) => {
  //   setShow(!show)
  // };
  // const onChange = (e) => {
  //   setDirection(e.target.value);
  // };

  // const children = show ? <div className="content">CONTENT</div> : null;
  return(
    <div className='nav-bar'>
      <div className='top'>
        <div className='social-media'>
            <a href='https://github.com/Orianaqh'>
              <FaGithub color='#ffffff'/></a>

            <a href='https://www.linkedin.com/in/oriana-quintero-3398631b7/'>
              <FaLinkedinIn color='#ffffff'/></a>

            <a href='https://www.behance.net/orianaqh'>
              <FaBehance color='#ffffff'/></a>

            <a href='mailto:oriquinterohernandez@gmail.com'>
              <MdAlternateEmail color='#ffffff'/></a>
        </div>
      </div>

      {/* Rechsteseitedetails - Text Kreis und Lebenslauf ------------ */}
      <div className='extra'>
              <img
                className='circle-image'
                src={circle}
                alt="kein mensch ist ilegal"></img>

              <div className='resume'>
                <a
                  href="https://drive.google.com/file/d/1Q6XNycUVQLv0vsZ1hI-7nZ26USIqisC8/view?usp=share_link"
                  className='resume-link'
                  target="_blank"
                  ><button><TbPaperclip color='#ffffff'/></button></a> 
                  
                </div>
            </div>
    </div>
  )
}

export default Sidebar

