import React, { useState, useEffect, ChangeEvent } from 'react';
import './App.css';

function App() {

  const [milesToAdd, setMilesToAdd] = useState(0);
  const [totalMiles, setTotalMiles] = useState(0);

  const [pushupsToAdd, setPushupsToAdd] = useState(0);
  const [totalPushups, setTotalPushups] = useState(0);

  const [pullupsToAdd, setPullupsToAdd] = useState(0);
  const [totalPullups, setTotalPullups] = useState(0);

  useEffect(() => {
    const totalMiles = localStorage.getItem('totalMiles');
    totalMiles === null ? setTotalMiles(0) : setTotalMiles(parseFloat(totalMiles));

    const totalPushups = localStorage.getItem('totalPushups');
    totalPushups === null ? setTotalPushups(0) : setTotalPushups(parseFloat(totalPushups));

    const totalPullups = localStorage.getItem('totalPullups');
    totalPullups === null ? setTotalPullups(0) : setTotalPullups(parseFloat(totalPullups));
  }, []);

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

  function numberYouShouldHaveByToday(goal: number) {
    var daysThisYear = 365;
    if (isLeapYear()) {
      daysThisYear = 366;
    }
    var numberPerDay = goal / daysThisYear;
    var result = daysIntoYear() * numberPerDay;
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

  const addPushupsChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPushupsToAdd(parseFloat(event.currentTarget.value));
  }

  const addPushupsHandler = () => {
    var newPushups = totalPushups + pushupsToAdd;
    setTotalPushups(newPushups);
    localStorage.setItem('totalPushups', newPushups.toString());
  }

  const addPullupsChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPullupsToAdd(parseFloat(event.currentTarget.value));
  }

  const addPullupsHandler = () => {
    var newPullups = totalPullups + pullupsToAdd;
    setTotalPullups(newPullups);
    localStorage.setItem('totalPullups', newPullups.toString());
  }

  return (
    <div className="App">
      <div className="Row">
        <text className="statuslabel">500 mile:</text>
        <text className="status"> {totalMiles} of {numberYouShouldHaveByToday(500)}</text>
      </div>
      <div className="Row">
        <form className="inputsubmit" onSubmit={addMilesHandler}>
          <label className="statuslabel">
            <input className="input" type="text" name="miles" onChange={addMilesChangeHandler} />
          </label>
          <input className="submit" type="submit" value="Add" />
        </form>
      </div>
      <div className="Row">
        <text className="statuslabel">30,000 Push-Ups:</text>
        <text className="status"> {totalPushups} of {numberYouShouldHaveByToday(30000)}</text>
      </div>
      <div className="Row">
        <form className="inputsubmit" onSubmit={addPushupsHandler}>
          <label className="statuslabel">
            <input className="input" type="text" name="pushups" onChange={addPushupsChangeHandler} />
          </label>
          <input className="submit" type="submit" value="Add" />
        </form>
      </div>
      <div className="Row">
        <text className="statuslabel">3,000 Pull-Ups:</text>
        <text className="status"> {totalPullups} of {numberYouShouldHaveByToday(3000)}</text>
      </div>
      <div className="Row">
        <form className="inputsubmit" onSubmit={addPullupsHandler}>
          <label className="statuslabel">
            <input className="input" type="text" name="pullups" onChange={addPullupsChangeHandler} />
          </label>
          <input className="submit" type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
}

export default App;
