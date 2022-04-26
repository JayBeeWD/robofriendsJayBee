import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const CardArray = robots.map((user, i) => {
return (<Card 
key={i}
id={robots[i].id} 
name={robots[i].name} 
email={robots[i].email}/>
)
    });
    return (
        <div>
      {CardArray}
  </div>
    );
}
//see section 229 at 9:16 for refactored code for cleaner version
export default CardList;