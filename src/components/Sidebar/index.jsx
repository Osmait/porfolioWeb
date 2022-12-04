import './index.scss'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to={'/'}>
        <img src={LogoS} alt="logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="saulBurgos" /> */}
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to={'/'}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4de" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className={'about-link'}
          to={'/about'}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4de" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className={'contact-link'}
          to={'/contact'}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4de" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://www.linkedin.com/in/jos%C3%A9-sa%C3%BAl-burgos-35680b244/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bxi3Obs8ZQneaImZpcN3PgA%3D%3D"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4de" />
          </a>
        </li>
        <li>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://github.com/Osmait"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4de" />
          </a>
        </li>
        <li>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://twitter.com/saulburgos20"
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4de" />
          </a>
        </li>
      </ul>
    </div>
  )
}
