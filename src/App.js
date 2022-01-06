import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Home';

class App extends React.Component {

  
  render() {
    return (
      <Router>
     <div className="App">
       <Routes>
          <Route exact path='/' element={<Home />}></Route>
       </Routes>
     </div>
   </Router>
  )};
}

export default App;
