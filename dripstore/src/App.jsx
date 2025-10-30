import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}>
          <Route path='/products' element={<ProductsPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App


