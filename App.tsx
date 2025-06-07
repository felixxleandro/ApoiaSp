import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './screens/Homepage';
import { Sobre } from './screens/Sobre';
import { Institutos} from './screens/Institutos';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/institutos" element={<Institutos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;