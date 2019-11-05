import React from 'react';
import '../index.css';
import Party from '../components/Party';
import Crew from '../components/Crew';
import { mainBackground, style_container } from '../style';
import pship from '../components/images/pship.jpg';

const Home = () => {
  return (
    <div style={mainBackground}>
      <div style={style_container}>
        <section className='mainHeading'>
          <h1 className='fantasyH1'>Tales from New Providence</h1>
          <img src={pship} className='pageBanner' />
          <p style={{ margin: '1%' }}>
            Tales from New Providence is a Pirate Themed Dungeons and Dragons
            Adventure taking place within 5th Edition D&D rule set. The party is
            set to sail the seas in search of Treasure and other pirate mischief
            while fighter monsters, diving into dungones, making new allies, and
            overcoming new challenges.
          </p>
        </section>
        <Party />
        <Crew />
      </div>
    </div>
  );
};

export default Home;
