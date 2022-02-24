
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';
import ProductList from './components/DeleteProduct';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Router>
        <Main path="/" />
        <OneProduct path="/product/:id" />
        <EditProduct path="/product/edit/:id" />
        <ProductList path="/prouct/delete/:id" />
      </Router>


      
    </div>
  );
}

export default App;
