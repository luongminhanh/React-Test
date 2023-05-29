import { Route, Routes } from 'react-router-dom';
import './App.scss';
import CreateClass from './pages/CreateClass';
import ShowClass from './pages/ShowClass';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="/blogs" element={<ShowClass />} />
        <Route path="blogs/create" element={<CreateClass />} />
      </Route>

    </Routes>
  );
}

export default App;
