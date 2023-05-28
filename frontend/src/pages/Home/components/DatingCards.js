import React, { useState } from 'react';
import './DatingCards.css'
import DatingCard from 'react-tinder-card'

const DatingCards = () => {
  const [people, setPeople] = useState([
    {
      name: "江至揚",
      imgUrl: "https://scontent.ftpe4-2.fna.fbcdn.net/v/t1.18169-9/15027412_582116725313334_1300786442380433454_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3jYXbabqabUAX8V6SZv&_nc_ht=scontent.ftpe4-2.fna&oh=00_AfAsFExa3o8tAG6nQ38Yjqi4m_v4A5yzi2GS1mSUjp72nQ&oe=6499255E"
    },
    {
      name: "蘇裕凱",
      imgUrl: "https://scontent.ftpe4-1.fna.fbcdn.net/v/t39.30808-6/296880666_3241959846077817_4223305655362156136_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L3N8GlIjgjAAX8Lev_D&_nc_ht=scontent.ftpe4-1.fna&oh=00_AfC7CrHap6d3IeLcYq3JFki6HomG8fuO6Z2kgoPEyLwrfA&oe=6476F568"
    },
    {
      name: "黃云佐",
      imgUrl: "https://scontent.xx.fbcdn.net/v/t1.15752-9/329895714_1397242491014902_961783379876489001_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=uiB95C_F_t0AX88ha0z&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTI8R65Vr0ttWS0EWyKk5Qo3UdAu2FcdK-eY8KJ4i5nLw&oe=64991A57"
    },
    {
      name: "鐘敏榮",
      imgUrl: "https://scontent.xx.fbcdn.net/v/t1.15752-9/326725990_2957858121189265_5579414882206267370_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Ro2c5blEqK0AX-c2IjJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQvpTzmw35XiIBn8wPL0KU84WXBUGU9DRwRc6oGqp3ZnA&oe=6498FABF"
    },
    {
      name: "黃昭榮",
      imgUrl: "https://scontent.xx.fbcdn.net/v/t1.15752-9/317267779_1213282445924844_8016331773888195315_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=G9VPxOQ-47kAX-2aOMh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT0IL-nwsz1vnFS9Lz0iOi4c7L0Boh0XMc2fBJJPEnACQ&oe=64990BD1"
    }
  ])

  const swiped = (nameToDelete) => {
    console.log("receving" + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + "left the screen!!")
  }

  return (
    <div className='datingCards'>
      {
        people.map((person) => (
          <DatingCard
            className="stack"
            key={person.name}
            preventSwipe={['up', 'down']} // Forbid vertical swipe
            onSwipe={() => swiped(person.name)} // When swipe call swiped()
            onCardLeftScreen={() => outOfFrame(person.name)} >
            <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
              <h3>{person.name}</h3>
            </div>
          </DatingCard>
        ))
      }
    </div>
  );
}

export default DatingCards