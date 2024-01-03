import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar1.css';
import { motion } from 'framer-motion'
import logo from '../Assests/logo.png'

const Navbar1 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  let easeing = [0.6, -0.05, 0.01, 0.99];
  const header = {
    initial: {
      y: -60,
      opacity: 0,
      transition: { duration: 0.05, ease: easeing }
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.6,
        ease: easeing
      }
    }
  };
  const stagger = {
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  }

  return (
    <motion.div className="mafia__navbar" initial='initial' animate='animate'>
      <motion.div className="mafia__navbar-links" variants={stagger}>
        <motion.div className="mafia__navbar-links_logo" variants={header} whileHover={{scale:1.2}}>
          <a href="https://upskillmafia.com"><img src={logo} alt="LOGO"/></a>
        </motion.div>
        <motion.div className="mafia__navbar-links_container" variants={stagger}>
          <motion.p variants={header} whileHover={{scale:1.1}}><a href="#peer" >PEER LEARNING</a></motion.p>
          <motion.p variants={header} whileHover={{scale:1.1}}><a href="hackathon" >HACKATHONS</a></motion.p>
          {/* <motion.p><a href="#creative" >ASSIGNMENT</a></motion.p> */}
          <motion.p variants={header} whileHover={{scale:1.1}}><a href="#community" >COMMUNITY</a></motion.p>
          <motion.p variants={header} whileHover={{scale:1.1}}><a href="#certif" >CERTIFICATIONS</a></motion.p>
        </motion.div>
        <a href='https://chat.whatsapp.com/C551a1rsjAeCFhO6glWPIb' target="_blank" rel="noreferrer"> <motion.div whileHover={{scale:1.1}} className="mafia__navbar-sign" variants={header}>
          <button type="button" onClick={()=>window.fbq('track', ' AddtoWhatsapp')}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M22.2967 18.7469C21.9561 18.5719 20.2592 17.7406 19.9436 17.6281C19.6279 17.5094 19.3967 17.4531 19.1686 17.8031C18.9373 18.15 18.2811 18.9219 18.0748 19.1562C17.8748 19.3875 17.6717 19.4156 17.3311 19.2437C15.3061 18.2312 13.9779 17.4375 12.6436 15.1469C12.2904 14.5375 12.9967 14.5813 13.6561 13.2656C13.7686 13.0344 13.7123 12.8375 13.6248 12.6625C13.5373 12.4875 12.8498 10.7937 12.5623 10.1031C12.2842 9.43125 11.9967 9.525 11.7873 9.5125C11.5873 9.5 11.3592 9.5 11.1279 9.5C10.8967 9.5 10.5248 9.5875 10.2092 9.92813C9.89355 10.275 9.00293 11.1094 9.00293 12.8031C9.00293 14.4969 10.2373 16.1375 10.4061 16.3687C10.5811 16.6 12.8342 20.075 16.2936 21.5719C18.4811 22.5156 19.3373 22.5969 20.4311 22.4344C21.0967 22.3344 22.4686 21.6031 22.7529 20.7938C23.0373 19.9875 23.0373 19.2969 22.9529 19.1531C22.8686 19 22.6373 18.9125 22.2967 18.7469Z" fill="white" />
            <path d="M28.9127 10.575C28.2064 8.89687 27.1939 7.39062 25.9033 6.09688C24.6127 4.80625 23.1064 3.79063 21.4252 3.0875C19.7064 2.36563 17.8814 2 16.0002 2H15.9377C14.0439 2.00938 12.2096 2.38438 10.4846 3.12188C8.81893 3.83438 7.32518 4.84687 6.04705 6.1375C4.76893 7.42812 3.7658 8.92813 3.07205 10.6C2.3533 12.3313 1.9908 14.1719 2.00018 16.0656C2.00955 18.2344 2.5283 20.3875 3.50018 22.3125V27.0625C3.50018 27.8563 4.14393 28.5 4.93768 28.5H9.6908C11.6158 29.4719 13.7689 29.9906 15.9377 30H16.0033C17.8752 30 19.6908 29.6375 21.4002 28.9281C23.0721 28.2313 24.5752 27.2313 25.8627 25.9531C27.1533 24.675 28.1689 23.1812 28.8783 21.5156C29.6158 19.7906 29.9908 17.9563 30.0002 16.0625C30.0096 14.1594 29.6408 12.3125 28.9127 10.575ZM24.1908 24.2625C22.0002 26.4313 19.0939 27.625 16.0002 27.625H15.9471C14.0627 27.6156 12.1908 27.1469 10.5377 26.2656L10.2752 26.125H5.87518V21.725L5.73455 21.4625C4.8533 19.8094 4.38455 17.9375 4.37518 16.0531C4.36268 12.9375 5.5533 10.0125 7.73768 7.80937C9.91893 5.60625 12.8346 4.3875 15.9502 4.375H16.0033C17.5658 4.375 19.0814 4.67812 20.5096 5.27812C21.9033 5.8625 23.1533 6.70312 24.2283 7.77812C25.3002 8.85 26.1439 10.1031 26.7283 11.4969C27.3346 12.9406 27.6377 14.4719 27.6314 16.0531C27.6127 19.1656 26.3908 22.0813 24.1908 24.2625Z" fill="white" />
          </svg>JOIN THE COMMUNITY</button>
        </motion.div>
        </a>
      </motion.div>

      <motion.div className="mafia__navbar-menu" variants={header}>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div>
          <div className="mafia__navbar-menu_container scale-up-center">
            <motion.div className="mafia__navbar-menu_container-links" variants={stagger}>
              {/* <motion.p variants={header} whileHover={{scale:1.1}}><a href="#resources" >UI/UX RESOURCES</a></motion.p> */}
              <motion.p variants={header} whileHover={{scale:1.1}}><a href="#peer" >PEER LEARNING</a></motion.p>
              <motion.p variants={header} whileHover={{scale:1.1}}><a href="hackathon" >HACKATHONS</a></motion.p>
              <motion.p variants={header} whileHover={{scale:1.1}}><a href="#community" >COMMUNITY</a></motion.p>
              <motion.p variants={header} whileHover={{scale:1.1}}><a href="#certif" >CERTIFICATIONS</a></motion.p>
              <motion.a href='https://chat.whatsapp.com/C551a1rsjAeCFhO6glWPIb' target="_blank" rel="noreferrer" >
              <motion.div className="mafia__navbar-menu_container-links-sign" variants={header} whileHover={{scale:1.1}}>
                <button type="button" onClick={()=>window.fbq('track', ' AddtoWhatsapp')}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M22.2967 18.7469C21.9561 18.5719 20.2592 17.7406 19.9436 17.6281C19.6279 17.5094 19.3967 17.4531 19.1686 17.8031C18.9373 18.15 18.2811 18.9219 18.0748 19.1562C17.8748 19.3875 17.6717 19.4156 17.3311 19.2437C15.3061 18.2312 13.9779 17.4375 12.6436 15.1469C12.2904 14.5375 12.9967 14.5813 13.6561 13.2656C13.7686 13.0344 13.7123 12.8375 13.6248 12.6625C13.5373 12.4875 12.8498 10.7937 12.5623 10.1031C12.2842 9.43125 11.9967 9.525 11.7873 9.5125C11.5873 9.5 11.3592 9.5 11.1279 9.5C10.8967 9.5 10.5248 9.5875 10.2092 9.92813C9.89355 10.275 9.00293 11.1094 9.00293 12.8031C9.00293 14.4969 10.2373 16.1375 10.4061 16.3687C10.5811 16.6 12.8342 20.075 16.2936 21.5719C18.4811 22.5156 19.3373 22.5969 20.4311 22.4344C21.0967 22.3344 22.4686 21.6031 22.7529 20.7938C23.0373 19.9875 23.0373 19.2969 22.9529 19.1531C22.8686 19 22.6373 18.9125 22.2967 18.7469Z" fill="white" />
                  <path d="M28.9127 10.575C28.2064 8.89687 27.1939 7.39062 25.9033 6.09688C24.6127 4.80625 23.1064 3.79063 21.4252 3.0875C19.7064 2.36563 17.8814 2 16.0002 2H15.9377C14.0439 2.00938 12.2096 2.38438 10.4846 3.12188C8.81893 3.83438 7.32518 4.84687 6.04705 6.1375C4.76893 7.42812 3.7658 8.92813 3.07205 10.6C2.3533 12.3313 1.9908 14.1719 2.00018 16.0656C2.00955 18.2344 2.5283 20.3875 3.50018 22.3125V27.0625C3.50018 27.8563 4.14393 28.5 4.93768 28.5H9.6908C11.6158 29.4719 13.7689 29.9906 15.9377 30H16.0033C17.8752 30 19.6908 29.6375 21.4002 28.9281C23.0721 28.2313 24.5752 27.2313 25.8627 25.9531C27.1533 24.675 28.1689 23.1812 28.8783 21.5156C29.6158 19.7906 29.9908 17.9563 30.0002 16.0625C30.0096 14.1594 29.6408 12.3125 28.9127 10.575ZM24.1908 24.2625C22.0002 26.4313 19.0939 27.625 16.0002 27.625H15.9471C14.0627 27.6156 12.1908 27.1469 10.5377 26.2656L10.2752 26.125H5.87518V21.725L5.73455 21.4625C4.8533 19.8094 4.38455 17.9375 4.37518 16.0531C4.36268 12.9375 5.5533 10.0125 7.73768 7.80937C9.91893 5.60625 12.8346 4.3875 15.9502 4.375H16.0033C17.5658 4.375 19.0814 4.67812 20.5096 5.27812C21.9033 5.8625 23.1533 6.70312 24.2283 7.77812C25.3002 8.85 26.1439 10.1031 26.7283 11.4969C27.3346 12.9406 27.6377 14.4719 27.6314 16.0531C27.6127 19.1656 26.3908 22.0813 24.1908 24.2625Z" fill="white" />
                </svg>JOIN THE COMMUNITY</button>
              </motion.div>
            </motion.a>
            </motion.div>
          </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar1;