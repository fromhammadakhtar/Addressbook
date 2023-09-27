import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Addressbook from './pages/Home/Addressbook';
import { connect, useSelector } from 'react-redux';
import { PageState } from './store/types';

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

const mapStateToProps = (state: PageState) => {
  return state;
};

export default connect(mapStateToProps)(App);
