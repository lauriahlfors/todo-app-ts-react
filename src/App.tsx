import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Todo from './views/Todo';
import Info from './views/Info';
import Home from './views/Home';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Todo />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
