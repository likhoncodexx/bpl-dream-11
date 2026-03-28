import React from "react";
import Card from "../../../ui/Card";

const AvailablePlayers = ({ playersData }) => {
  console.log(playersData);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-8">
        {
          playersData.map(player => {
            console.log(player, 'player'
            );
            return (<Card player={player} />)
          })
        }

      </div>
    </div>
  );
};

export default AvailablePlayers;
