import React,{useState} from 'react'
import { useEffect } from 'react/cjs/react.development';

const ProductCart = () => {
const CartData=JSON.parse(localStorage.getItem("CartItem"));  
console.log(CartData)
const Imagesrc=localStorage.getItem("base64");
console.log('ProductCart',CartData);
const [CartArray,setCartArray]=useState([]);

useEffect(()=>{
    setCartArray([CartData]);
},[])
console.log('CartArray',CartArray.ItemName);

const Orderplace=()=>{
    alert('order Placed');
}

return (
        <>
        {
           CartArray.map((current)=>{
             return(
                 <>
                <div className="container d-flex justify-content-center" >
                <div className="card mt-5" style={{width:'20rem'}}>
                <img className="card-img-top" src={Imagesrc} alt="Card image" style={{width: '20rem',Height:'50rem'}}/>
                <div className ="card-body">
                <h5 className ="card-title">{current[0].ItemName}</h5>
                <h5 className ="card-title">{current[0].ItemColor}</h5>
                <h5 className ="card-title">{current[0].Price}</h5>
                <p className ="card-text">{current[0].ItemDescription}</p>
                <button  type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={Orderplace}>Buy </button>
                </div>
                </div>
            </div>
                 </>
             )  
           }) 

            
        }
            
        </>
    )
}

export default ProductCart
