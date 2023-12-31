import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'



const App = () => {
  const pageSize = 3;
  const apiKey ="******************"//use own api key here
  const [progress, setProgress] = useState(0);
    return (
      <>
        <Router>
        <Navbar/> 
        <LoadingBar
        const color= '#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/>}/>
        </Routes>
        </Router>
        </>
    );

}
export default App;

