
import List from './pages/list/List';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import "./App.scss"
import './style/dark.scss'
import {UserInput,  ProductInput} from "./data/Data.js"

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';

function App() {
const {darkMode}=useContext(DarkModeContext)
  return (
    <div className={darkMode?"dark app":"app"}>
    < BrowserRouter>
    <Routes>
     <Route path="/">
<Route index element={<Home/>}/>
<Route path='login' element={<Login/>}/>
<Route path='users'>
<Route index element={<List/>}/>
<Route path=':userId' element={<Single/>}/>
{/* called UserInput from Data source using input prop and 
title prop for dynamic heading */}
<Route path='new' element={<New input={UserInput}
  title="Add New User"
/>}/>
</Route>

<Route path='products'>
<Route index element={<List/>}/>
<Route path=':productId' element={<Single/>}/>
{/* called ProductInput from Data source using input prop 
and Title prop for dynamic headings*/}
<Route path='new' element={<New input={ProductInput}
  title="Add New Product"
/>}/>
</Route>
     </Route> 
     </Routes>
     </BrowserRouter>
    
    
    </div>
  );
}

export default App;
