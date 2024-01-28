import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Nav } from './components/Nav';
import { Sidebar } from './components/Sidebar';
import { Homepage } from './pages/Homepage';
import { Player } from './components/Player';
import { ArtistPage } from './pages/ArtistPage';
import { AlbumPage } from './pages/AlbumPage';
import {Container, Row} from 'react-bootstrap'
import YourLibrary from './pages/YourLibrary';

import SearchResult from './pages/SearchResult';



function App() {
return (
  <> 
    <BrowserRouter> 
    <Container>
    
    <Sidebar/>
    <Nav/> 
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/:artistName/:id' element={<ArtistPage />} />
      <Route path='/album/:id' element={<AlbumPage />} />
      <Route path='/yourLibrary' element={<YourLibrary />} />
      <Route path='/searchResult' element={<SearchResult/>} />
    </Routes>
    <Player/> 
    </Container>
    </BrowserRouter>
   
  </>
)
}
export default App;
