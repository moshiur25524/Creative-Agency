import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path=''></Route>
      </Routes>
    </div>
  );
}

export default App;
