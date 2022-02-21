
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductForm from './components/ProductForm';
import OneProduct from './components/OneProduct';
import AllProducts from './components/AllProducts';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Router>
        <Main path="/" />
        <OneProduct path="/product/:id" />
      </Router>


      
    </div>
  );
}

export default App;
