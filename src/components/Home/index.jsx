import './index.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import { useState } from 'react'
import { AnimatedLEtters } from '../AnimatedLetters'
import { useMemo } from 'react'
import { Logo } from './Logo'
import Loader from 'react-loaders'

export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'u', 'l', ' ', 'B', 'u', 'r', 'g', 'o', 's']
  const jobArray = [
    'B',
    'a',
    'c',
    'k',
    'e',
    'n',
    'd',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  useMemo(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Developer" />
            <AnimatedLEtters
              letterClass={letterClass}
              strArray={nameArray}
              idx={22}
            />
            <br />
            <AnimatedLEtters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Backend Developer / JavaScript/ Python / Go </h2>
          <Link to={'/contact'} className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}
