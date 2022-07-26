import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './views/Home';
import UserDetail from './views/UserDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/user-detail/:userId'>
        <UserDetail />
      </Route>
    </Router>
  );
}

export default App;
