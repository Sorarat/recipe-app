import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Explore from './components/explore/Explore';
import MyProfile from './components/myprofile/MyProfile';
import Favorites from './components/favorites/Favorites';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

  return (
    
    <Router>
      <div className='app-container'>
        <NavBar/>
        <div className='content-container'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/explore">
              <Explore/>
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
        <Footer/>
      </div>
    </Router>
  );
}

export default App
