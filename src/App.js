import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import CheacOut from './Pages/CheacOut/CheacOut';



import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/Login/RequireAuth/RequireAuth'


import Signup from './Pages/Login/Signup/Signup';
import NotFound from './Pages/NotFound/NotFound';
import Servicedtls from './Pages/Servicedtls/Servicedtls';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<Servicedtls></Servicedtls>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        
        <Route path='/CheacOut' element={<RequireAuth> <CheacOut></CheacOut> </RequireAuth>}></Route>
        

        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        

      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
