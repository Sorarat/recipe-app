import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
import MyProfile from './components/myprofile/MyProfile';
import Favorites from './components/favorites/Favorites';
import Logout from './components/logout/Logout';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

const APP_ID = "072a7d8b";
const APP_KEY = "523a71111a276320551a0eb6f7f61f7e";

function App() {

  // const [recipes, setRecipes] = useState([])

  

  return (
    
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/categories">
            <Categories/>
          </Route>
          <Route path="/my-profile">
            <MyProfile/>
          </Route>
          <Route path="/favorites">
            <Favorites/>
          </Route>
          <Route path="/log-out">
            <Logout/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
