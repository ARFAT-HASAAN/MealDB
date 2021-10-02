import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './/Components//Home/Home'
import Header from './Components/Header/Header';
import Resturen from './Components/Resturent/Resturen';


// import route 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './Components/notefoun/Notfound';
import Mealdb from './Components/mealdb/Mealdb';


function App() {
  return (

    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/resturent'>
            <Resturen />
          </Route>
          <Route exact path='/resturent/:id'>
            <Mealdb></Mealdb>
          </Route>
          <Route exact path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </>


    // 
    // <Header></Header>
    // 
    // 


  );
}

export default App;
