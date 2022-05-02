import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Addservice from './Pages/Addservice/Addservice';
import CheacOut from './Pages/CheacOut/CheacOut';



import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/Login/RequireAuth/RequireAuth'


import Signup from './Pages/Login/Signup/Signup';
import Manage from './Pages/Manage/Manage';
import NotFound from './Pages/NotFound/NotFound';
import Order from './Pages/Order/Order';
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
        <Route path='/CheacOut/:serviceId' element={<RequireAuth> <CheacOut></CheacOut> </RequireAuth>}></Route>
        <Route path='/addservice' element={<RequireAuth> <Addservice></Addservice> </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth> <Manage></Manage> </RequireAuth>}></Route>
        <Route path='/orders' element={<RequireAuth> <Order></Order> </RequireAuth>}></Route>
        

        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        

      </Routes>
      
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
