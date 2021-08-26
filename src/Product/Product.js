import React, { useState } from 'react';


const Product = ({ ProductId, ProductSnap, Name, Color, Price, Size, Description, Cateory }) => {
    const Imagesrc = localStorage.getItem("base64");
    const [saveItem, setsaveItem] = useState([]);
    const [addCart, setAddCart] = useState([]);

    const ItemsId = () => {
        setsaveItem([ProductId, ProductSnap, Name, Color, Size, Price, Description, Cateory]);
    }
    const AddCart = () => {
        setAddCart([{ "ItemId": ProductId, "ItemSnap": ProductSnap, "ItemName": Name, "ItemColor": Color, "Price": Price, "ItemSize": Size, "ItemDescription": Description, "ItemCategory": Cateory }])
        console.log(addCart);
        localStorage.setItem("CartItem", JSON.stringify(addCart));
    }

  
    return (
        <>
            <div className="d-flex justify-content-center flex-row mx-4 mt-4" >
                  <div class="card" style={{ width: '20rem' }}>
                    <img className="card-img-top mx-2" src={Imagesrc} alt="Card image" style={{ width: '19rem' }} />
                    <div className="card-body">
                        <h5 className="card-title">Brand:{Name}</h5>
                        <h5 className="card-text">Color:{Color}</h5>
                        <h5 className="card-text">{Size}</h5>
                        <p className="card-text">Rs:{Price}</p>
                        <p className="card-text">{Description}</p>
                        <p className="card-text">{Cateory}</p>
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ItemsId}>View Details</button>
                    </div>
            </div>
            </div>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Product Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card mt-5">
                                <img className="card-img-top" src={Imagesrc} alt="Card image" style={{ width: '18rem', Height: '50rem' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{Name}</h5>
                                    <h5 className="card-title">{Color}</h5>
                                    <h5 className="card-title">{Price}</h5>
                                    <p className="card-text">{Description}</p>
                                    <p className="card-text">{Cateory}</p>
                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={AddCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;