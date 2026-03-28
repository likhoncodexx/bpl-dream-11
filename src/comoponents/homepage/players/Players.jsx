import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';



const Players = ({ PlayersPromise }) => {
  console.log(PlayersPromise);

  const playersData = use(PlayersPromise);
  console.log(playersData);
  return <div className='container mx-auto'>
    Players :{playersData.length}
    <AvailablePlayers playersData={playersData} />

  </div>

};

export default Players;