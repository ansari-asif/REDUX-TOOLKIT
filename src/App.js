import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/Home';
import CartPage from './component/CartPage/CartPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './component/header/Header';

function App() {
  return (
    <div> 
      <BrowserRouter>
      <Header></Header>
        <Routes >
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
