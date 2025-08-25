import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './components/pages/Homepage';
import Calendar from './components/pages/Calendar';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';

function App() {
  return (
      <div className="App">
        <Homepage />
        <div className='main-content'>
        <Routes>
              {/* <Route path="/" element={<Homepage />} /> */}
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
      </div>
  );
}

export default App;
