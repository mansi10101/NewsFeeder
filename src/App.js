import './App.css';
import React  from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () => {


  const apiKey = "fbdce008f8a64719a71b51e8ecb17adf"
  return(
      <Router>
      <div>
        <Navbar/>  
        <Routes>

            <Route exact path="/"  element = {<News key="General" pagesize={12} country={"in"} apiKey={apiKey} category={"General"} />}/>
            <Route exact path="/Business"  element = {<News key="Business" pagesize={12} apiKey={apiKey} country={"in"} category={"Business"} />}/>
            <Route exact path="/Entertainment"  element = {<News key="Entertainment" pagesize={12} apiKey={apiKey} country={"in"} category={"Entertainment"} />}/>
            <Route exact path="/General"  element = {<News key="General" pagesize={12} apiKey={apiKey} country={"in"} category={"General"} />}/>
            <Route exact path="/Health"  element = {<News key="Health" pagesize={12} country={"in"} apiKey={apiKey} category={"Health"} />}/>
            <Route exact path="/Science"  element = {<News key="Science" pagesize={12} apiKey={apiKey} country={"in"} category={"Science"} />}/>
            <Route exact path="/Sports"  element = {<News key="Sports" pagesize={12} country={"in"} apiKey={apiKey} category={"Sports"} />}/>
            <Route exact path="/Technology"  element = {<News key="" pagesize={12} country={"in"} apiKey={apiKey} category={"Technology"} />}/>
          
      </Routes>
      </div>
      </Router>
    )
}

export default App