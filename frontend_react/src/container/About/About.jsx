import React ,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import  './About.scss'
import { images } from '../../constants';
const abouts = [
  {title: 'Web Development', description: 'I create responsive and user-friendly web applications using the latest technologies.', imgUrl: images.about01},
  {title: 'UI/UX Design', description: 'I design intuitive and engaging user interfaces that enhance user experience.', imgUrl: images.about02},
  {title: 'Mobile App Development', description: 'I develop cross-platform mobile applications that run seamlessly on both iOS and Android.', imgUrl: images.about03},
  {title: 'Digital Marketing', description: 'I implement effective digital marketing strategies to boost online presence and engagement.', imgUrl: images.about04},]


const About = () => {
  return (
    <>
    <h2 className="head-text">I Know that<span>Good Design</span><br></br>means<span>Good  Business</span></h2>
    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
          <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>  )
}

export default About