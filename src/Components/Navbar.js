import React from 'react'
import {motion} from 'framer-motion'
import '../Styles/main.css'
import {FiGithub} from 'react-icons/fi'
import { AiOutlineMail} from 'react-icons/ai'
import { Link } from 'react-scroll'
import { Header, NavLinks, SocialMediaIcons } from '../Styles/animate'

const Navbar = () => {

    return (
        <>
        <motion.div 
            variants={Header}
            initial="hidden"
            animate="visible"
        className="nav-container">
           <motion.header>
               <motion.a href="#"
                    variants={NavLinks}
                    initial="hidden"
                    animate="visible" 
               className="logo">Abdeladim</motion.a>
               <motion.nav  >
                   <motion.ul >
                       <motion.li 
                           variants={NavLinks}
                           initial="hidden"
                           animate="visible" 
                           
                       >
                           <Link className="links"  to='projects' smooth={true} duration={800} spy={true}  exact='true' offset={-80}>
                               My Work
                           </Link>
                       </motion.li>
                       <motion.li 
                            variants={NavLinks}
                            initial="hidden"
                            animate="visible" 
                            
                       >
                           <Link className="links" to='skills' smooth={true} duration={800} spy={true}  exact='true' offset={-80} >
                               My skills
                           </Link>
                       </motion.li>
                       <motion.li 
                            variants={NavLinks}
                            initial="hidden"
                            animate="visible" 
                            
                       >
                           <Link className="links" to='contact' smooth={true} duration={800} spy={true}  exact='true' offset={-80}>
                               Hire me 
                           </Link>
                       </motion.li>
                       
                   </motion.ul>
               </motion.nav>
           </motion.header>
           <motion.div className="social-header">
               <motion.ul>
                   <motion.li 
                        variants={SocialMediaIcons}
                        initial="hidden"
                        animate="visible" 
                   ><motion.a target="_blank" href="https://github.com/4bdeladim" > <FiGithub className="social-media-icons" alt="github" /> </motion.a> </motion.li>
                   <motion.li 
                        variants={SocialMediaIcons}
                        initial="hidden"
                        animate="visible" 
                   ><motion.a target="_blank" href="emailto:benallal.abdel4dim@gmail.com"> <AiOutlineMail className="social-media-icons" alt="email" /> </motion.a> </motion.li>
               </motion.ul>
           </motion.div>
        </motion.div>
        
        {/* dsgdsgsdg */}
        
        

        </>
    )
}

export default Navbar
