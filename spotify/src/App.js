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



function App() {
return (
  <> 
    <BrowserRouter> 
    <Container fluid>
    <Row>
    <Nav/>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/artist/:ID' element={<ArtistPage />} />
      <Route path='/album/:ID' element={<AlbumPage />} />
    </Routes>
   </Row>
   </Container>
   <Player/>
    </BrowserRouter>
   
  </>
)
}
export default App;
