
import './App.css';
import { Router } from '@reach/router';
import ProductForm from './components/ProductForm';


function App() {
  return (
    <div className="App">
      <Router>
        <ProductForm path="/" />
      </Router>
      
    </div>
  );
}

export default App;
