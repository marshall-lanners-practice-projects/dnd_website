import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import { bio } from '../bios';
import bard from './images/bard-min.png';
import fighter from './images/fighter-min.png';
import rogue from './images/rogue-min.jpg';
import Player from './Player';

const Party = () => {
  return (
    <section>
      <h2 className='subHeading'>The Party</h2>
      <div className='cardDiv'>
        <Card style={{ margin: '1%' }}>
          <CardImg top width='100%' src={bard} alt='bard yarhalin' />
          <CardBody>
            <CardTitle>Yarhalin</CardTitle>
            <CardSubtitle>Half-Elf Bard - level 3</CardSubtitle>
            <CardText></CardText>
            <Player buttonLabel='view info' playerName='Yarhalin' bio={bio} />
          </CardBody>
        </Card>

        <Card style={{ margin: '1%' }}>
          <CardImg top width='100%' src={fighter} alt='Purple Nose' />
          <CardBody>
            <CardTitle>Purple Nose</CardTitle>
            <CardSubtitle>Human Fighter - level 3</CardSubtitle>
            <CardText></CardText>
            <Player
              buttonLabel='view info'
              playerName='Purple Nose'
              bio={bio}
            />
          </CardBody>
        </Card>

        <Card style={{ margin: '1%' }}>
          <CardImg top width='100%' src={rogue} alt='Iron Maiden' />
          <CardBody>
            <CardTitle>Iron Maiden</CardTitle>
            <CardSubtitle>Halfing Rogue - level 3</CardSubtitle>
            <CardText></CardText>
            <Player
              buttonLabel='view info'
              playerName='Iron Maiden'
              bio={bio}
            />
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Party;
