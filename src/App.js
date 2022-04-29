import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header"
import NavBar from './NavBar';
import PlayerContainer from './PlayerContainer';
import NewPlayerForm from './NewPlayerForm';
import Home from './Home';
import PlayerCard from './PlayerCard';

//css (PlayerCard formatting), blog, video

function App() {

  const [players, setPlayers] = useState([]);
  const history = useHistory();
  
  useEffect(() => {
    fetch("http://localhost:3000/players")
    .then((res) => res.json())
    .then((data) => setPlayers(data))
  }, []) 

  function onFormSumbit(formData) {
    fetch("http://localhost:3000/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "firstName": formData.firstName,
        "lastName": formData.lastName,
        "grade": formData.grade,
        "team": formData.team,
        "number": formData.number,
        "position": formData.position,
        "classes": [
          {
            "period": "1",
            "class": formData.periodOneClass,
            "teacher": formData.periodOneTeacher,
          },
          {
            "period": "2",
            "class": formData.periodTwoClass,
            "teacher": formData.periodTwoTeacher,
          },
          {
            "period": "3",
            "class": formData.periodThreeClass,
            "teacher": formData.periodThreeTeacher,
          },
          {
            "period": "4",
            "class": formData.periodFourClass,
            "teacher": formData.periodFourTeacher,
          },
          {
            "period": "5",
            "class": formData.periodFiveClass,
            "teacher": formData.periodFiveTeacher,
          },
          {
            "period": "6",
            "class": formData.periodSixClass,
            "teacher": formData.periodSixTeacher,
          },
          {
            "period": "7",
            "class": formData.periodSevenClass,
            "teacher": formData.periodSevenTeacher,
          },
        ]
      })
    })
    .then((res) => res.json())
    .then((data) => {
      setPlayers([...players, data]);
      history.push("/players")
    })
}

  return (
    <div className="App">
      <Header />
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route exact path="/players">
          <PlayerContainer 
            players={players} 
            />
        </Route>
        <Route path="/add-player">
          <NewPlayerForm onFormSumbit={onFormSumbit}/> 
        </Route>
      </Switch>
    </div>
  );
}

export default App; 
