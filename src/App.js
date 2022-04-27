import './App.css';
import React, { useEffect, useState } from 'react';
import Header from "./Header"
import NavBar from './NavBar';
import PlayerContainer from './PlayerContainer';
import NewPlayerForm from './NewPlayerForm';

//git pushes, client side routing, blog, video

function App() {

  const [searchChange, setSearchChange] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [players, setPlayers] = useState([]);
  const [addPlayerClick, setAddPlayerClick] = useState(false)


  useEffect(() => {
    fetch("http://localhost:3000/players")
    .then((res) => res.json())
    .then((data) => setPlayers(data))
  }, []) 

  function onSearchChange (query) {
    setSearchChange(query)
  }

  function onSelectchange (category) {
    setSelectedCategory(category)
  }

  function onAddPlayerClick(e) {
    setAddPlayerClick(true)
  }

  function onViewPlayersClick(e) {
    setAddPlayerClick(false);
    setSelectedCategory("All");
  }

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
    })
}

//then use onSubmitGrades to PATCH updated grades and reset "newPlayers"
  

//   function onSubmitGrades(gradeArr, playerObj) {
//     playerObj.classes.map((c) => {
//       const newGrades = [...c.weeklyGrades, gradeArr[c.period]]
//     })

//     fetch(`http://localhost:3000/players/${playerObj.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json", 
//       },
//       body: JSON.stringify({ 
//         classes[0].weeklyGrades: newGrades
//       })
//     })
// }

  return (
    <div className="App">
      <Header />
      <NavBar 
        onSearchChange={onSearchChange} 
        onSelectchange={onSelectchange}
        onAddPlayerClick={onAddPlayerClick}
        addPlayerClick={addPlayerClick}
        onViewPlayersClick={onViewPlayersClick}
        />
        {addPlayerClick ? 
        <NewPlayerForm onFormSumbit={onFormSumbit}/> 
        :
      <PlayerContainer 
        players={players} 
        search={searchChange} 
        teamSelect={selectedCategory} 
        addPlayerClick={addPlayerClick}
        // onSubmitGrades={onSubmitGrades}
        />
        }
    </div>
  );
}

export default App; 
