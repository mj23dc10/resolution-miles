import React, { useState, useEffect, ChangeEvent } from 'react';

// function Tracker(props) {
//     return (
//         <div className="App">
//             <div className="Row">
//               <text className="statuslabel">500 mile:</text>
//               <text className="status"> this.props.totalMiles of {milesYouShouldHaveByToday()}---</text>
//               <form className="inputsubmit" onSubmit={addMilesHandler}>
//                 <label className="statuslabel">
//                   <input className="input" type="text" name="miles" onChange={addMilesChangeHandler} />
//                 </label>
//                 <input className="submit" type="submit" value="Add" />
//               </form>
//             </div>
//         </div>
//       );
// }