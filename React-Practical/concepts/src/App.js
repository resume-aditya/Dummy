import { useState, useEffect } from "react";
import Dashboard from "./Arista/Dashboard";
import UserDashboard from "./Autodesk/UserDashboard";
import WrappedComp from "./HOC/WrappedComp";
import Parent from "./LiftingTheState/Parent";
import Memo from "./Memo_PureComponent/Memo";
import PureComp from "./Memo_PureComponent/PureComp";
import ReduxParent from "./Redux/ReduxParent";
import One from "./Refreher/ComponentOne";
import one from "./Refreher/ComponentOne";
import TryRender from "./RenderHell/TryRender";
import { ParentOne } from "./RenderRefresher/ParentOne";
import ParentContext from "./useContext/ParentContext";
import ReducerParent from "./useReducer/ReducerParent";
import DashComp from "./UserPostComments/DashComp";




function App() {
  return (
    <>
      {/* <Parent />
      <WrappedComp />
      <ParentContext />
      <ReducerParent />
      <ReduxParent /> */}
      {/* <TryRender /> */}
      {/* <PureComp /> */}
      {/* <Memo /> */}
      {/* <ArticleWrapper /> */}
      {/* <One /> */}
      {/* <ParentOne some={'007'}/> */}
      {/* <Dashboard /> */}
      {/* <DashComp></DashComp> */}
      {/* <Checkbox /> */}
      {/* <UserDashboard /> */}
      <Dashboard />
    </>
  );
}
export default App;
