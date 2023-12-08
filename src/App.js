import './styles/App.css';
import {NavBar, Footer} from './Components';
import Home from './Home';
import HairTest from './HairTest';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/test" element={<HairTest />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
