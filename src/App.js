import './App.css';
import Navbar from './Home/Navbar';
import Addproduct from './Addproduct/Addproduct';
import Home from './Home/ProductDisplay';
import ViewProduct from './ViewProduct/ViewProduct';
import {Switch,Route} from 'react-router-dom';
import ProductCart from './Product/ProductCart';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>  
    <Route exact path="/Addproduct" component={Addproduct}/>
    <Route exact path="/ViewProduct" component={ViewProduct}/>
    <Route exact path="/ProductCart" component={ProductCart}/>
    </Switch>
    </>
    
  );
}

export default App;
