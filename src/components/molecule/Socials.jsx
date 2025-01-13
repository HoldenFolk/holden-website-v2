import React from 'react';
import Icon from '../atomic/Icon';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  const githubLink = 'https://github.com/HoldenFolk';
  const linkedinLink = 'https://www.linkedin.com/in/holden-folk-995b8220a/';
  return (
    <>
      <Icon
        icon={faGithub}
        onClick={() => {
          window.open(githubLink, '_blank');
        }}
        color="orange"
      />
      <Icon
        icon={faLinkedin}
        onClick={() => {
          window.open(linkedinLink, '_blank');
        }}
        color="orange"
      />
    </>
  );
};

export default Socials;
