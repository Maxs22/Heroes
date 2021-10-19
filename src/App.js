import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import HeroSearch from './components/HeroSearch/HeroSearch';
import UserContext from './context/UserContext';
import { useState } from 'react';
import  TeamContext  from './context/TeamContext';
import DetailsCharacter from './components/DetailsCharacter/DetailsCharacter';
import Header from './components/Header/Header';

function App() {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token")
    }
    return null
  })
  const [team, setTeam] = useState([])
    

  return (
    <UserContext.Provider value={[user, setUser]}>
      <TeamContext.Provider value={[team, setTeam] } >
        <div className="App">

          <Router>
            <Header />
            <Switch>
             
              <Route exact path="/home">
                {<Home/> } 
              </Route>
              <Route exact path="/search">
                {<HeroSearch/> } 
              </Route>
              <Route exact path="/details/:id">
                 {<DetailsCharacter/> }
              </Route>
              <Redirect exact from="/" to="/home" />
            </Switch>
          </Router>
        </div>


      </TeamContext.Provider>


    </UserContext.Provider>
  );
}

export default App;
