import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg
} from 'reactstrap';

import { obliverPenny, honeyPot, mage, william } from '../bios';
import Player from './Player';

import olivePennyPic from './images/oliver_penny.png';
import honeyPotPic from './images/honey_pot.jpg';
import magePic from './images/mage.jpg';
import williamPic from './images/william.jpg';

const Crew = () => {
  return (
    <section>
      <h2 className='subHeading'>The Crew</h2>
      <div className='cardDiv'>
        <Card style={{ margin: '1%' }}>
          <CardImg top width='100%' src={olivePennyPic} alt='olive Penny' />
          <CardBody>
            <CardTitle>Oliver Penny</CardTitle>
            <CardSubtitle>Dwarf</CardSubtitle>
            <CardText></CardText>
            <Player
              buttonLabel='view info'
              playerName='Oliver Penny'
              bio={obliverPenny}
            />
          </CardBody>
        </Card>
        <Card style={{ margin: '1%' }}>
          <CardImg top width='100%' src={honeyPotPic} alt='honey pot' />
          <CardBody>
            <CardTitle>Honey Pot</CardTitle>
            <CardSubtitle>Gnome</CardSubtitle>
            <CardText></CardText>
            <Player
              buttonLabel='view info'
              playerName='Honey Pot'
              bio={honeyPot}
            />
          </CardBody>
        </Card>
        <Card style={{ margin: '1%' }}>
          <CardImg top width='100%' src={magePic} alt='mage' />
          <CardBody>
            <CardTitle>Mage</CardTitle>
            <CardSubtitle>Gnome</CardSubtitle>
            <CardText></CardText>
            <Player buttonLabel='view info' playerName='Mage' bio={mage} />
          </CardBody>
        </Card>
        <Card style={{ margin: '1%' }}>
          <CardImg top width='100%' src={williamPic} alt='william' />
          <CardBody>
            <CardTitle>William</CardTitle>
            <CardSubtitle>Gnome</CardSubtitle>
            <CardText></CardText>
            <Player
              buttonLabel='view info'
              playerName='William'
              bio={william}
            />
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Crew;
