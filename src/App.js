//import HookCounter from "./components/HookCounter";
//import HookCounterFour from "./components/HookCounterFour";
//import HookCounterThree from "./components/HookCounterThree";
//import HookCounterTwo from "./components/HookCounterTwo";
//import HookCounterOne from "./components/HookCounterOne";
import React from "react";
import UseReduceCounterTwo from "./components/UseReduceCounterTwo";
//import UseReduceCounter from "./components/UseReduceCounter";
//import ComponentC from "./components/ComponentC";
//import UseReduceCounter from "./components/UseReduceCounter";
import "./styles.css";
//export const userContext = React.createContext();
//export const ChannelContext = React.createContext();
export default function App() {
  return (
    <div className="App">
      {/*<HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <HookCounterOne />
      <userContext.Provider value={"mahsan"}>
        <ChannelContext.Provider value={'codeEvolution'}>
        <ComponentC />
        </ChannelContext.Provider>
      </userContext.Provider>
      <UseReduceCounter />*/}
      <UseReduceCounterTwo />
    </div>
  );
}
