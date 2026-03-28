import { Suspense } from 'react';
import './App.css'
import Banner from './comoponents/homepage/banner/Banner';
import Players from './comoponents/homepage/players/Players';
import Navbar from './comoponents/navbar/Navbar';


const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}


const playersPromise = fetchPlayer();

function App() {
  return (
    <>
      <Navbar />
      <Banner />


      <Suspense fallback={<progress className="progress w-56"></progress>}>
        <Players PlayersPromise={playersPromise} />
      </Suspense>
    </>
  );
}

export default App;