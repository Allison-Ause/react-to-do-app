import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Items from './components/Items/Items';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/items" component={Items} />
        <Route path="*">
          <Redirect to="/auth/sign-up" />
        </Route>
        <Redirect to="/auth/sign-up" />
      </Switch>
    </div>
  );
}

export default App;
