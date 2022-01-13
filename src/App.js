import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Home';
import ProjectListing from './pages/ProjectListing';

class App extends React.Component {

  
  render() {
    return (
      <Router>
     <div className="App">
       <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/projects' element = {<ProjectListing />}></Route>
       </Routes>
       
     </div>
   </Router>
  )};
}

export default App;
