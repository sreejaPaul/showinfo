import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Showcard from './Showcard';
import Showdetails from './Showdetails';
import Topbar from './Topbar';

function App() {
  const[resultarray,setresult] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(response => response.json())
      .then(datas => {
        setresult(datas);
      })
  }, []);

  return (
    <div className="App">
      <Topbar/>
      <Route path="/" exact>
        <Showcard resultarray={resultarray}/>
      </Route>
      <Route path="/ShowDetails/:ShowId/:Showname" exact>
        <Showdetails resultarray={resultarray}/>
      </Route>
    </div>
  );
}

export default App;
