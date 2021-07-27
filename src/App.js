import './App.css';


import { Home } from './components/Home'
import { About } from './components/About'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Feed } from './components/Feed';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/feed'>
            <Feed />
          </Route>

          <Route path='/signup'>
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
