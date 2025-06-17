import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './screens/Homepage';
import { Sobre } from './screens/Sobre';
import { Institutos} from './screens/Institutos';
import { Chatbot } from './screens/Chatbot';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/institutos" element={<Institutos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;