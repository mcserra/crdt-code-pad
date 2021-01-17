import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage2 from './homepage/Homepage2';
import Wrapper from './Wrapper';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Homepage2} />
          <Route path='/dev-pad/:id' component={Wrapper} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
