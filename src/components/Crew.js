import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import { obliverPenny, honeyPot, mage, william } from '../bios';
import Player from './Player';

const Crew = () => {
  return (
    <section>
      <h2 className='subHeading'>The Crew</h2>
      <div className='cardDiv'>
        <Card style={{ margin: '1%' }}>
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
          <CardBody>
            <CardTitle>Mage</CardTitle>
            <CardSubtitle>Gnome</CardSubtitle>
            <CardText></CardText>
            <Player buttonLabel='view info' playerName='Mage' bio={mage} />
          </CardBody>
        </Card>
        <Card style={{ margin: '1%' }}>
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
