import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ListDetail from './components/ListDetail';
import Create from './components/Create';
import './App.css';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Route exact path="/">
       <Home />
     </Route>
     <Route path="/list/:id">
       <ListDetail />
     </Route>
     <Route exact path="/new">
       <Create />
     </Route>
    </div>
  );
}

export default App;
