import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/home/Home'
import VideoDetails from './Components/VideoDetails/VideoDetails'
import SearchResults from './pages/searchResults/SearchResults'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search/:query' element={<SearchResults/>}/>
        <Route path='/watch/:videoId' element={<VideoDetails/>} />
      </Routes>
      </BrowserRouter>
         
    </div>
  )
}

export default App
