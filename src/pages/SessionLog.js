import React from 'react';
import { mainBackground, style_container } from '../style';

import { Jumbotron } from 'reactstrap';

const sessions = [
  {
    title: 'Session 4',
    paragraphs: [
      `Upon the slaying of the giant spider, Purple Nose sent Mage back down the other path to find the other party and get a few healing potions to heal both Oliver Penny and Honey Pot. After the party was all healed up they decided to check the spider’s lair for items. Upon doing so they found a few magical items including another large key similar to the one found on the troll. Purple Nose also tried to harvest some poison from the spider. She was successful in doing so, but got some on her hand which burned. She also tried her best to create an antidote from the poison, but was unable.`,
      `Meanwhile Yarhalin, Iron Maiden, and William heard footsteps approaching. They all decided to hide behind the poisonous barrels. They then saw a small goblin-ish looking creature that had its mouth sone shut and was carrying a few buckets of poison to load in the barrels. The party remained hidden and decided to follow it. The party followed the small creature back into another room and found it hard at work extracting poison from a few spiders with another similar creature. Yarhalin, knowing orkish, decided to tell the creatures that they meant no harm and that they came in peace and proceed to cut their mouths free so they could speak.`,
      `The two parties finally met up in the room, convinced the two orkish creatures to join the party, grabbed a few vials of poison, poised their weapons, and ventured through another door that lead into a massive open volcanic cavern filled with lava spouts and a giant ravine.`,
      `The party followed an eastern path between the rock wall and the massive ravine when they were ambushed by a group of goblins lead by a tall ork. A bloody battle ensued and William was finally able to prove himself to the party by cutting off the head of the leading ork captain. The few remaining goblins retreated in fear.`
    ]
  },
  {
    title: 'Session 3',
    paragraphs: [
      `The party decided to sail into a giant waterness cavern at the base of the center most island. It was there they found a small abandoned dock and tied up their ship. Leaving their ship behind, they continued onward and encountered a giant cave leading downward. The cavern had the faint smell of the salty sea air and had many stalagmites and stalactites. After traveling down a long and winding path downward deep into the earth for about 30 minutes the party encountered a large wooden door. Yarhalin was able to cast invisibility on Iron Maiden so she could sneak ahead. She ended up encountering a massive Troll that was fast asleep after feasting on many spiders. She also noticed that he had a rather large key tired about his neck upon a small rope necklace. With luck she was able to cut the necklace without waking the troll and take the large key for her possession. Afterward she met up with the party and together were able to sneak past the troll without waking him up.`,
      `They party then entered a large dark cavernous room with knee high water. Upon the wall near the entrance hang a few torches burning brightly. In the water swam thousands of small hungry snakes. Purple Nose wanted to see how far the cavern went and used one of the torches to fire a flaming arrow across the void. In doing so she found out that the snakes are extremely sensitive to light. The party then took a few torches and huddled together to cross the watery divide.`,
      `The party then came to a mountainous staircase and decened for another 30 or so minutes deep into the earth below. When they reached the end they encountered a fork in the road. The party decided to split up into two groups and venture onward.`,
      `One party consisting of Purple Nose, Honey Pot, Oliver Penny, Mage encountered a giant spider that crippled and wounded both Honey Pot and Oliver Penny before being slain in its spidery lair.`,
      `The party consisting of Iron Maiden, Yarhalin, and William encountered a number of giant barrels filled with a green ooze. William, being provoking into testing the ooze, ended up losing a finger when it turned out to be highly poisonous.`
    ]
  },
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
      `Yarhalin slams down a jug of XXX rated Grog with no problem, grew a himself a small beard, and gained the following title “Yarhalin the Robust”. Yarhalin and Iron Maiden then meet and recruit a new Dwarven Cook named Oliver Penny and also manage to steal keys from a local shopkeeper who was drinking heavily at the bar.`,
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
        <h1 className='display-3' style={{ fontSize: '3.5rem' }}>
          {title}
        </h1>
        {paragraphs.map((p, i) => {
          return (
            <p key={i} className='lead' style={{ fontSize: '1.1rem' }}>
              {p}
            </p>
          );
        })}
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
