import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Items from './components/Items/Items';

function App() {
  return (
    <div className="App">
      <Route path="/auth/:type" component={Auth} />
      <Route path="/items" component={Items} />
      <Route path="*">
        <Redirect to="/auth/sign-up" />
      </Route>
      <Redirect to="/auth/sign-up" />
    </div>
  );
}

export default App;
