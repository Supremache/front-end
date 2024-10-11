import React from 'react'
import "./hero.css"
import Lottie from 'lottie-react'
import devAnimation from '../../animation/dev.json'
import { motion, spring } from 'framer-motion'

function Hero() {

  return (
    <section className='hero flex'>
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 6, duration: 1.25, type: "spring", stiffness: 100 }}
           src="./icon.svg"
            alt=""
             className="avatar" />
          <div className="icon-verified"></div>

        </div>


        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.25 }}
          className='title'
        >
        Software designer, founder, and amateur astronaut.
        </motion.h1>


        <p className='sub-title'>
          I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie animationData={devAnimation} />
      </div>
    </section>
  )
}

export default Hero
