import './App.css';
import Wrapper from "./Wrapper";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Banner from "./landing/Banner";

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
