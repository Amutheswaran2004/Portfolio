import React,{useState} from 'react'
import './Navbar.scss';
import {motion} from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import {images} from '../../constants'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {['home', 'about', 'services', 'contact'].map((item) => (
            <li key={`link-${item}`} className="app__flex p-text">
              <div />
              <a href={`#${item}`} >{item}</a>
            </li>
          ))}
        </ul>
        <div class="app__navbar-menu">
          <HiMenuAlt4 onClick={()=> setToggle(true)} />
            {toggle && (
              <motion.div
               whileInView={{x:[300,0]}}
               transition={{duration:0.85, ease:'easeOut'}}
              >
               <HiX onClick={()=> setToggle(false)} />
                <ul>
                  {['home', 'about', 'services', 'contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  ))}
                </ul>
                </motion.div>
            )}
        </div>
          
    </nav>
  )
}

export default Navbar