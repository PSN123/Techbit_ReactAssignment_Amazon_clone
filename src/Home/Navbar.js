import React,{useState,useEffect} from 'react';
import logo from  '../Images/Amazonlogo.png';
import { NavLink } from 'react-router-dom';
import Searchbar from './SearchBar';

const Navbar = () => {
    return (
        <>
        <div className="container-fluid" style={{width:'100%', overflowX:'hidden',backgroundColor:'black'}}>
            <div className="row">
                <div className="col-sm-12 col-xm-12 col-md-12 col-lg-12 ">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" style={{color:'white'}}><img src={logo} width="120px" height="50px"/>.In</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Searchbar/>
                        <NavLink className="btn btn-dark mx-4" type="submit" to="/Addproduct" ><b>Add Product</b></NavLink>
                        <button className="btn btn-dark mx-4" type="submit">Returns<b>& Orders</b></button>
                        <NavLink className="btn btn-dark mx-5" type="submit" to="/ProductCart"><i className="fas fa-shopping-cart" style={{color:'white'}}></i><b> Cart</b></NavLink>                                                
                    </div>
            </nav>
      
</div>
</div>
</div>

        </>
    )
}

export default Navbar;