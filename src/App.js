import { BrowserRouter, useHistory } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  let history = useHistory();
  return (
    <BrowserRouter history={history}>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
