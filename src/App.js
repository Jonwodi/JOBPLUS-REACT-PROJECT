import { BrowserRouter, useHistory } from 'react-router-dom';
import './App.css';

function App() {
  let history = useHistory();
  return (
    <BrowserRouter history={history}>
      <p>Loading from App.js...</p>
    </BrowserRouter>
  );
}

export default App;
