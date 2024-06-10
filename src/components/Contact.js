import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import React from 'react';

export const Contact = () => {
  return (
    <footer className='footer' id='contact'>
      <div className='contactWrapper'>
        <h1 className='contactHeading'>Hello there. Feel free to drop me a text!</h1>
        <div className='contactIconWrapper'>
          <a href='https://www.linkedin.com/in/dhapu-choudhary-13a4881aa/'><FontAwesomeIcon className='contactIcons' icon={faLinkedin} /><p className='contactTags'>LinkedIn</p></a>
          <a href='https://github.com/Dhapu'><FontAwesomeIcon className='contactIcons' icon={faGithub} /><p className='contactTags'>GitHub</p></a>
          <a href='mailto:dhapuch2001@gmail.com'><FontAwesomeIcon className='contactIcons' icon={faEnvelopeOpenText} /><p className='contactTags'>Gmail</p></a>
        </div>
      </div>
    </footer>
  );
};
