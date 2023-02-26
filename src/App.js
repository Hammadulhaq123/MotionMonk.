import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Feed from './components/Feed';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import LeftNavMenuItem from './components/LeftNavMenuItem';
import SearchResult from './components/SearchResult';
import SearchResultVideoCard from './components/SearchResultVideoCard';
import SuggestionVideoCard from './components/SuggestionVideocard';
import VideoCard from './components/VideoCard';
import VideoDetails from './components/VideoDetails';
import { AppContext } from './context/contextApi';






const App = () => {
      const[theme, setTheme] = useState("dark")
      const themeToggle = () => {
        if(theme==="dark"){
            setTheme("light")
            console.log(theme)
        } else{
            setTheme("dark")
            console.log(theme)
        }
    }
  return (
    <AppContext>
      <Router>
        <div className='flex flex-col h-full'>
          <Header theme={theme} themeToggle={themeToggle}/>
          <Routes>
            <Route path='/' exact element={<Feed theme={theme}/>} />
            <Route path='/searchResult/:searchQuery'  element={<SearchResult />} />
            <Route path='/video/:id'  element={<VideoDetails />} />

          </Routes>
        </div>
      </Router>
    </AppContext>

  )
}

export default App
