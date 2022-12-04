import { useMemo, useState } from 'react'
import {
  faAngular,
  faCss3,
  faDocker,
  faGitAlt,
  faGolang,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { AnimatedLEtters } from '../AnimatedLetters'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useMemo(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLEtters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Backend developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I had to define myself in one sentence it would be a person who
            seeks challenges to improve her skills every day and obsessed with
            technology!!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGolang} color="#28A4D9" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#ffde57" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDatabase} color={'#f29111'} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#44883e" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
