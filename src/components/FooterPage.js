import React from 'react';
import roger from './images/roger.jpg';

const FooterPage = props => {
  return (
    <div className='footer-direction'>
      <div>
        <img src={roger} className='rogerImage' alt='jolly roger' />
      </div>
      <div>
        <h4>A Pirate Aventure</h4>
        <p>Stay tuned for more updates . . . </p>
      </div>
    </div>
  );
};

export default FooterPage;
