import {BrowserRouter as Router, Route} from "react-router-dom";
import Templates from "./components/Templates";
import TemplateContainer from "./components/TemplateContainer";

import './App.css';


function App() {
  return (
    <div className="App">
        <Router>
            <Templates />
            <Route path='/:template'>
                <TemplateContainer />
            </Route>
        </Router>
    </div>
  );
}

export default App;
