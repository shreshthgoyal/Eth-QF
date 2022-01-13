import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import ProjectListing from './pages/ProjectListing/ProjectListing';
import Sponsors from './pages/Sponsors/Sponsors';

class App extends React.Component {

  
  render() {
    return (
      <Router>
     <div className="App">
       <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/projects' element = {<ProjectListing />}></Route>
          <Route path='/sponsor' element = {<Sponsors number="205439"/>}></Route>
       </Routes>
       
     </div>
   </Router>
  )};
}

export default App;
