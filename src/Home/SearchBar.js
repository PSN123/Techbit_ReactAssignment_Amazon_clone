import React,{useState,useEffect} from 'react';
import { GetData } from '../Addproduct/Addproduct';

const Searchbar=()=>{
const Data=GetData();
const [ProductData,setProductData]=useState([]);
useEffect(() => {
    setProductData([...Data])
}, [])

const [searchItem,setSearchItem]=useState("");

const search=()=>{
    
}
    return(
        <>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               
                            <div className="btn-group">
                            <form className="d-flex">
                            <div className="form-group">
                                    <select className="form-select btn btn-light" aria-label="Default select example" 
                                    name="FilterKeyword"
                                    >
                                        <option selected>All</option>
                                        <option className="btn" value="Cloth">Cloth</option>
                                        <option value="Shoes">Shoes</option>
                                        <option value="Mobile">Mobile</option>
                                        <option value="Computers">Computers</option>
                                    </select>
                            </div>   
                            <input className="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search" style={{width:'45rem'}} 
                             Name="Search"
                             onChange={event=>{setSearchItem(event.target.value)}}                           
                             />
                             {
                                ProductData.filter((val)=>{
                                    if(searchItem==""){
                                        return val
                                    }else if(val.ProductName.toLowerCase().includes(searchItem.toLowerCase())){
                                        return val
                                    }
                                }).map((currentIem,key)=>{
                                    return(
                                        <>
                                        </>                                                     
                                    )
                                })
                             }

                            <button className="btn btn-warning" type="button" onClick={search}><i className="fas fa-search"></i></button>
                        </form>
                        </div>
                        </ul>
        </div>
        </>
    )
}

export default Searchbar;