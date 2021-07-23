import logo from './logo.svg';
import './App.css';


import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { LoginForm, SignupForm } from "./components/Auth";
import { About } from './components/About'
import { Lol } from './components/Lol'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <Switch>

          <Route path='/' exact>
            <Home>
                <LoginForm />
            </Home>
          </Route>
          <Route path='/signup' exact>
            <Home>
              <SignupForm />
            </Home>
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
