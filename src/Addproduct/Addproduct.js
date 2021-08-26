import React, { useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import Categorycoth from './Categorycloth';
import Categorytech from './Categorytech';


export const GetData=()=>{
    const Products=localStorage.getItem('Productarray');
      if(Products){
          return JSON.parse(localStorage.getItem('Productarray'));
      }else{
         return [];
      }
}

const Addproduct = () => {

const [CategoryType,setCategoryType]=useState();
let history = useHistory();
const [Productarray,setProductarray]=useState([]);
const [ProductDetails,setProductDetails]=useState({
     ProductId:Math.random(),
     ProductName:"",ProductCategory:"",Color:"",Size:"", Ram:"",Color:"",ProductSnap:"",ProductPrice:"", ProductDescription:""
 })

 useEffect(() => {
    const Products=localStorage.getItem('Productarray');
      if(Products){
          setProductarray(JSON.parse(Products));
      }  
},[])
    const InputEvent=(e)=>{
        setCategoryType(e.target.value);
        const {name,value}=e.target;
        setProductDetails(()=>{
            return{
                ...ProductDetails,
                [name]:value,
                                
            }
        })
    }

   const InputEvent1=(e)=>{
       const {name,value}=e.target;
       setProductDetails(()=>{
           return{
               ...ProductDetails,
               [name]:value
           }
       })
   }
    
     const imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then((base64) => {
          localStorage["base64"] = base64;
            console.log("file stored", base64);
        });
      };
    
      const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      };


 const Submit=(e)=>{
        e.preventDefault();
        const {ProductName,ProductCategory,Color,Size,ProductSnap,ProductDescription,ProductPrice}=ProductDetails;
        if(ProductName==="" || ProductCategory==="" || ProductDescription==="" || ProductPrice===""){
            alert('All Fields are Madatory');
        }else if(isNaN(ProductPrice)){
            alert('ProductPrice should be in number');
        }else{
            alert('Successfully uploaded');
            console.log(Productarray);
            console.log(ProductDetails);
            const data=GetData();
            data.push(ProductDetails)
            setProductarray([...data]);
            console.log(Productarray);   
            localStorage.setItem("Productarray",JSON.stringify(data)); 
            setProductDetails({ ProductName:"",ProductCategory:"",Color:"",Size:"",Ram:"",Color:"",ProductSnap:"",ProductPrice:"",ProductDescription:""})           
            history.push("/");
        }
       
    }
   
   return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 ">
                        <div className="card" style={{ width: '40rem' }}>
                            <div className="card-body">
                                <h5 className="card-title text-center">Product Details</h5>
                                <form className="form-group" onSubmit={Submit}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" 
                                        name="ProductName"
                                        value={ProductDetails.ProductName}
                                        onChange={InputEvent}
                                        
                                        />
                                    <label htmlfor="floatingInput">Product Name</label>
                                    </div>
                                    <div className="form-group mt-2">
                                    <select className="form-select" aria-label="Default select example" 
                                    name="ProductCategory"
                                    value={ProductDetails.ProductCategory}
                                    onChange={InputEvent}
                                    >
                                        <option selected>Product Category</option>
                                        <option value="Cloth">Cloth</option>
                                        <option value="Shoes">Shoes</option>
                                        <option value="Mobile">Mobile</option>
                                        <option value="Computers">Computers</option>
                                    </select>
                                    {
                                        CategoryType==="Cloth" ? (
                                            <>
                                             <Categorycoth color={ProductDetails.Color} size={ProductDetails.Size}
                                                           onChange={InputEvent1}/>
                                                                      
                                        </>

                                        ) : 
                                        CategoryType==="Shoes" ?
                                        (<>
                                           <Categorycoth color={ProductDetails.Color} size={ProductDetails.Size}
                                                           onChange={InputEvent1}/>                                         
                                        </>) 
                                        :
                                        CategoryType==="Mobile" ?
                                        (<>
                                           <Categorytech color={ProductDetails.Color} Ram={ProductDetails.Size}
                                                           onChange={InputEvent1}/>
                                        </>) 
                                        :
                                        CategoryType==="Computers" ?
                                        (<>
                                           <Categorytech color={ProductDetails.Color} Ram={ProductDetails.Size}
                                                           onChange={InputEvent1}/>                                        
                                        
                                        </>) 
                                        :""
                                    }
                                    </div>
                                    
                                    <div className="form-group mt-3">
                                        <label htmlfor="formFileMultiple" className="form-label">Upload photo</label>
                                        <input className="form-control" type="file" id="ProductImage" multiple 
                                        name="ProductSnap"
                                        value={ProductDetails.ProductSnap}
                                        onChange={imageUpload}
                                        />
                                        
                                    </div>
                                    <div className="form-floating mt-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Product Price" 
                                        name="ProductPrice"
                                        value={ProductDetails.ProductPrice}
                                        onChange={InputEvent}
                                        
                                        />
                                        <label htmlfor="floatingInput">Product Price</label>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlfor="exampleFormControlTextarea1">Product Description</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                        name="ProductDescription"
                                        value={ProductDetails.ProductDescription}
                                        onChange={InputEvent}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Submit</button>                        
                                </form>              
                            </div>
                        </div>
                    </div>
                </div>
            </div>             
        </>
    )  
}

export default Addproduct;
