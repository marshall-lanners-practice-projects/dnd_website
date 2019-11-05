import React from 'react';
import { mainBackground, style_container } from '../style';
import dnd from '../components/images/dnd.jpg';
import dm_guide from '../components/images/dungeon_masters_guide.jpg';
import ms_manual from '../components/images/monster_manual.jpg';
import handbook from '../components/images/players_handbook.jpg';
import players_handbook from '../components/pdfs/players_handbook.pdf';
import dungeon_masters_guide from '../components/pdfs/dungeon_masters_guide.pdf';
import character_sheet from '../components/pdfs/character_sheet.pdf';
import monster_manual from '../components/pdfs/monster_manual.pdf';
import sheet from '../components/images/sheet.png';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import '../index.css';

const Resources = () => {
  return (
    <section>
      <div style={mainBackground}>
        <div style={style_container}>
          <div className='mainHeading'>
            <h1 className='fantasyH1'>Resources</h1>
            <img src={dnd} className='pageBanner' alt='D&D' />
          </div>
          <h4 className='booklets'>All PDF's for D&D 5E</h4>
          <div className='resources'>
            <Card style={{ margin: '1%' }}>
              <CardImg top width='100%' src={handbook} alt='Card image cap' />
              <CardBody>
                <CardTitle></CardTitle>
                <CardText></CardText>
                <a download='players_handbook.pdf' href={players_handbook}>
                  <Button>DownLoad</Button>
                </a>
              </CardBody>
            </Card>
            <Card style={{ margin: '1%' }}>
              <CardImg top width='100%' src={sheet} alt='Card image cap' />
              <CardBody>
                <CardTitle></CardTitle>
                <CardText></CardText>
                <a download='character_sheet.pdf' href={character_sheet}>
                  <Button>DownLoad</Button>
                </a>
              </CardBody>
            </Card>
            <Card style={{ margin: '1%' }}>
              <CardImg top width='100%' src={dm_guide} alt='Card image cap' />
              <CardBody>
                <CardTitle></CardTitle>
                <CardText></CardText>
                <a
                  download='dungeon_masters_guide.pdf'
                  href={dungeon_masters_guide}
                >
                  <Button>DownLoad</Button>
                </a>
              </CardBody>
            </Card>
            <Card style={{ margin: '1%' }}>
              <CardImg top width='100%' src={ms_manual} alt='Card image cap' />
              <CardBody>
                <CardTitle></CardTitle>
                <CardText></CardText>
                <a download='monster_manual.pdf' href={monster_manual}>
                  <Button>DownLoad</Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
