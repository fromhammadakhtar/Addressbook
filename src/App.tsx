import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Addressbook from './pages/Home/Addressbook';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Addressbook />} />
      </Routes>
    </Router>
  );
}

export default App;
