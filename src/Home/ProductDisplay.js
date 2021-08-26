import React, { useState,useEffect} from 'react'
import { GetData } from '../Addproduct/Addproduct';
import Product from '../Product/Product';
import Searchbar from './SearchBar';


const Carosuel=()=>{
    const Data=GetData();
    const [ProductDisplay,setProductDisplay]=useState([]);        
    useEffect(() => {
        setProductDisplay([...Data]);
    }, [])

    const ImageStyle={width:'100%',height:'30rem'} 
    return (
        <>
        <Searchbar/>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/RedmiNote10ProMax/GW/August/HDFC_1/D21342770_WLD_Mi_Redmi_Note10ProMax_DesktopTallHero_3000x1200._CB645382687_.jpg" style={ImageStyle} className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Clearance_Sotre_Aug21/Rev/ClearanceStore_SL_PCBunk._CB644628411_.jpg" className="d-block w-100" style={ImageStyle} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/Adhoc/aug-HAF-3000x1200-._CB644834504_.jpg" className="d-block w-100" style={ImageStyle} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

                {
                    ProductDisplay.map((current, index) => {
                        return (
                            < >
                               <Product ProductId={current.ProductId}
                                    ProductSnap={current.ProductSnap}
                                    Name={current.ProductName}
                                    Color={current.Color}
                                    Size={current.Size}
                                    Price={current.ProductPrice}
                                    Description={current.ProductDescription}
                                    Cateory={current.ProductCategory} />
                            </>
                        )
                    })
                }
                     
   <div>

   </div>
        </>
    )
}        


export default Carosuel;
