import logo from './logo.svg';
import './App.css';


import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { About } from './components/About'
import { Lol } from './components/Lol'
import { Signup } from './components/Signup';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
