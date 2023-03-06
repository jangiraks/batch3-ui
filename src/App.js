import logo from './logo.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import "react-table/react-table.css";
import CreateUser from './component/user/create';
import Address from './component/address/Address';
import HeadUser from './component/header/head';
import ListUser from './component/user/list';



function App() {
  return (
    <div >

      <header>
        <nav>
          <div className='logo'>
            <img src={logo} />
          </div>
          <ul>
            <li><a href="userlist">User List</a></li>
            <li><a href="useradd">User Add</a></li>
            <li><a href="address">User Address</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <div className='search'>
            <input type={'text'} ></input>

            <button className='btn'>Search</button>
          </div>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="userlist" element={<ListUser />}> </Route>
          <Route path="useradd" element={<CreateUser />}> </Route>
          <Route path="address" element={<Address />}> </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
