import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';
import Favorite from './Favorite';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Switch>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>

  );
}

export default App;
