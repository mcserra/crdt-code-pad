import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Wrapper from "./Wrapper";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Wrapper} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
