import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import AllRestaurants from './components/AllRestaurants';
import Create from './components/Create';

import Edit from './components/Edit';
import Details from './components/Details';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <h1>Welcome to our Restaurants app</h1>
      <Header/>
      <Router>
        <AllRestaurants default path="/restaurants"/>
        <Create path="/restaurants/new"/>
        <Details path="/restaurants/:id"/>
        <Edit path="/restaurants/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
