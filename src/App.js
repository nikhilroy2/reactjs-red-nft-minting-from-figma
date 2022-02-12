import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base/Base";

// ...............Pages.................
import Homepage from "./Pages/Homepage/Homepage";
// ...............Pages.................End
function App() {
  return (
    <div className="App">
      <Base>
        <Homepage></Homepage>
      </Base>
    </div>
  );
}

export default App;
