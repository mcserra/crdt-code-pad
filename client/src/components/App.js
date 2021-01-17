import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import CodePadConnector from './CodePad/CodePadConnector';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Homepage} />
          <Route path='/dev-pad/:id' component={CodePadConnector} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
