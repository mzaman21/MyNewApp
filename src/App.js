import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = ()=>{
  const apikey = process.env.REACT_APP_NEWS_API;
    return (
    <>
    <Router>
    <Navbar/>
      <Routes>
          <Route path="/" element={<News key="general" country="us" apikey={apikey} category="general" pageSize={12}/>} />
          <Route path="/business" element={<News  key="business" country="us" apikey={apikey} category="business" pageSize={12}/>} />
          <Route path="/entertainment" element={<News key="entertainment" country="us" apikey={apikey} category="entertainment" pageSize={12}/>} />
          <Route path="/general" element={<News key="general" country="us" apikey={apikey} category="general" pageSize={12}/>} />
          <Route path="/health" element={<News  key="health" country="us" apikey={apikey} category="health" pageSize={12}/>} />
          <Route path="/science" element={<News key="science" country="us" apikey={apikey} category="science" pageSize={12}/>} />
          <Route path="/sports" element={<News key="sports" country="us" apikey={apikey} category="sports" pageSize={12}/>} />
          <Route path="/technology" element={<News  key="technology" country="us" apikey={apikey} category="technology" pageSize={12}/>} />
        </Routes>
      </Router>
    </>
    )
  
}


export default App