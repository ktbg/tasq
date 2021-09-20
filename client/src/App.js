import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ListDetail from './components/ListDetail';
import Create from './components/Create';
import Edit from './components/Edit';
import './App.css';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Route exact path="/">
       <Home />
     </Route>
     <Route exact path="/list/:id/:title">
       <ListDetail />
     </Route>
     <Route exact path="/new">
       <Create />
     </Route>
     <Route path="/list/:id/:title/edit">
       <Edit />
     </Route>
    </div>
  );
}

export default App;
