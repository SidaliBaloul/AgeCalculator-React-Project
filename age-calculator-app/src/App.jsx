import "./App.css";
// import DatePicker from "./Components/DatePicker";
import Header from "./Components/Header";
import Inputs from "./Components/Inputs";
import Results from "./Components/Results";

import "./Styles/MyStyles.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="grid">
        <Inputs />
        <Results />
      </div>
    </div>
  );
}

export default App;
