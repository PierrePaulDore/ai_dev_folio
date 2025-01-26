import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PowerToBuild from './components/powers/build';
import PowerToAutomate from './components/powers/automate';
import PowerToCreate from './components/powers/create';
import PowerToConnect from './components/powers/connect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/powers/build" element={<PowerToBuild />} />
        <Route path="/powers/automate" element={<PowerToAutomate />} />
        <Route path="/powers/create" element={<PowerToCreate />} />
        <Route path="/powers/connect" element={<PowerToConnect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;