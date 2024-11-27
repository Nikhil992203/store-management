import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import Header from './header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './product/add-product/AddProduct';
import ViewProduct from './product/add-product/view-product/ViewProduct';

function App() {
  return (
    <div >
      <BrowserRouter>
     <Header/>
     <div className='App'>
      <Routes>
        <Route path='/add' element={<AddProduct/>}></Route>
        <Route path='/view' element={<ViewProduct/>}></Route>
        <Route path='/edit/:id' element={<AddProduct></AddProduct>}></Route>
        
      </Routes>
     </div>
     </BrowserRouter>
         </div>
  );
}

export default App;
