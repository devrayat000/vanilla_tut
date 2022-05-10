import MyClassComponent from "./components/class";
import MyFunctionComponent from "./components/function";
import "./App.css";
import CountClass from "./components/count/count-class";
import CountFunc from "./components/count/count-func";

function App() {
  return (
    <div id="something" className="App">
      <h1>React Tutorial</h1>
      <MyClassComponent id="bla">
        <h4>This is inside class component</h4>
      </MyClassComponent>
      <MyFunctionComponent id="jsx">
        <h4>This is inside function component</h4>
      </MyFunctionComponent>
      <CountClass />
      <CountFunc/>
    </div>
  );
}

export default App;

// Components
// Class components
// Function components
