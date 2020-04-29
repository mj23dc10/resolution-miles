import React, { useState, useEffect, ChangeEvent } from 'react';
import './App.css';

function App() {

  const [milesToAdd, setMilesToAdd] = useState(0);
  const [totalMiles, setTotalMiles] = useState(0);

  useEffect(() => {
    const totalMiles = localStorage.getItem('totalMiles');
    totalMiles === null ? setTotalMiles(0) : setTotalMiles(parseFloat(totalMiles));
  },[]);

  function isLeapYear() {
    var date = new Date();
    var year = date.getFullYear();
    var result = new Date(year, 1, 29).getDate() === 29;
    return result;
  }

  function daysIntoYear() {
    var date = new Date();
    var result =
      (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
        Date.UTC(date.getFullYear(), 0, 0)) /
      24 /
      60 /
      60 /
      1000;
    return result;
  }

  function milesYouShouldHaveByToday() {
    var daysThisYear = 365;
    if (isLeapYear()) {
      daysThisYear = 366;
    }
    var milesPerDay = 500 / daysThisYear;
    var result = daysIntoYear() * milesPerDay;
    return result.toFixed(2);
  }

  const addMilesChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMilesToAdd(parseFloat(event.currentTarget.value));
  }

  const addMilesHandler = () => {
    var newMiles = totalMiles + milesToAdd;
    setTotalMiles(newMiles);
    localStorage.setItem('totalMiles', newMiles.toString());
  } 

  return (
    <div className="App">
      <header className="App-header">
        <p>Current Miles: {totalMiles}</p>
        <p>Should have {milesYouShouldHaveByToday()} miles.</p>
        <form onSubmit={addMilesHandler}>
          <label>Add miles:
           <input type="text" name="miles" onChange={addMilesChangeHandler}/>
          </label>
          <input type="submit" value="Add" />
        </form>
      </header>
    </div>
  );
}

export default App;
