import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav'

import { About } from './components/About'
import { Lol } from './components/Lol'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/lol" component={Lol} />
          <Route path='/home' component={Home} />
          <Route path='/lol/:id' />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <h1>BABBBY DARRRRSH BOOOBOOO!!!!</h1>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
