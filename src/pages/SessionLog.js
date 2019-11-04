import React from 'react';
import { mainBackground, style_container } from '../style';

import { Jumbotron } from 'reactstrap';

const sessions = [
  {
    title: 'Session 2',
    paragraphs: [
      `As the party was sailing up to the series of jagged needlelike mountain islands they were approached by a hostile goblin ship and were engaged in combat. Cannon shots were fired. The party’s ship took a few glancing blows before retaliating and landing a crippling blow to the goblins ship.`,
      `Fearing for their lives the goblins quickly began to sail away. The adventurers sailed afterward and both ships exchange a series of arrow fire. The battle waged on and the goblin death toll was high. Several of the party members managed to board the goblin ship and fierce hand to hand combat broke out. During the battle Yarhalin was gravely injured and fled below deck of the goblin ship only to encounter more goblins. He was hit with a few more arrows and dropped unconscious.`,
      `In an attempt to save Yarhalin, Oliver Penny was able to jump from ship to ship, through the window of one of the goblins cannon doors, and land butt first on top of a goblin that was attacking Yarhalin squishing it to death. The remaining goblin went to land to the final killing blow on Yarhalin before Iron Maiden broke down the cabin door and stood in front of him taking an arrow and saving his life. Before the goblin ship sunk the party was able to loot some gold.`,
      `Having fought a hard battle the party then rested for the night. During the night's watch they discovered debris of a sunken ship and one lone survivor, a gnome by the name of William. William stated to the party he was not a trained fighter, had no previous sailing experience, and had to floating about for a few days after his ship was attacked. He quickly began to try and eat all their food.`
    ]
  },
  {
    title: 'Session 1',
    paragraphs: [
      `While docking at the Pirate Island of New Providence, The ship’s crew threatens to leave after some unsuccessful pluntering. Yarhalin, seeing the crews distress, takes out his musical instrument and sings a song of fellowship. His melody deeply moves all but the crews cook who was the original instigator.`,
      `The party then sends the crew out to gather food and supplies for future missions. Iron Maiden and Yarhalin venture to the Drunken Clam Tavern to drink, gather news, and find a new Cook. Purple Nose remains to guard the ship.`,
      `Yarhalin Slams down a jug of XXX rated Grog with no problem, grew a himself a small beard, and gained the following title “Yarhalin the Robust”. Yarhalin and Iron Maiden then meet and recruit a new Dwarven Cook named Oliver Penny and also manage to steal keys from a local shopkeeper who was drinking heavily at the bar.`,
      `Meanwhile, Purple Nose manages to stop a young boy from stealing money and supplies from the ship. After a bit of fighting the boy nearly gets away, but Purple Nose manages to shoot him with an arrow. Showing mercy she decided it was a non fatal blow and only injured his hand.`,
      `The Party later gathers and brakes into the local Shop and steals a few healing potions and a map that leads to an uncharted location. The map reads X marks the spot.`,
      `The Party then took part on a 3 day sailing mission to the south. Along they way they managed to learn a little more about their fellow crew mates. Upon the third day of sailing they see a series of Jagged Needle like Mountain islands on the horizon. While sailing closer to the tallest and center most island they hear the chants of goblins.`
    ]
  }
];

const Session = ({ title, paragraphs }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <Jumbotron>
        <h1 className='display-3'>{title}</h1>
        {paragraphs.map((p, i) => {
          return (
            <p key={i} className='lead'>
              {p}
            </p>
          );
        })}
        {/* {paragraphs.map((p, i) => {
          return <p className='lead'>{p}</p>;
        })} */}
      </Jumbotron>
    </div>
  );
};

const SessionLog = () => {
  return (
    <section>
      <div style={mainBackground}>
        <div style={style_container}>
          {sessions.map((session, i) => {
            return (
              <Session
                key={i}
                title={session.title}
                paragraphs={session.paragraphs}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SessionLog;
