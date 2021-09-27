import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ListDetail from './components/ListDetail';
import Create from './components/Create';
import Edit from './components/Forms/Edit';
import NavbarHome from './components/Nav/NavbarHome';
import { ToastContainer } from "react-toastify";
import './App.css';


function App() {
  return (
    <div className="App">
     <Route exact path="/">
      <NavbarHome />
      <Home />
     </Route>
     <Route exact path="/list/:id/:title">
       <ListDetail />
     </Route>
     <Route path="/new">
       <Create />
     </Route>
     <Route path="/list/:id/:title/edit">
       <Edit />
     </Route>
     <ToastContainer />
    </div>
  );
}

export default App;
