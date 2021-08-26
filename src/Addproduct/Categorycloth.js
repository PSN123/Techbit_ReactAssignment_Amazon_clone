import React from 'react';

const Categorycoth = (props) => {
    return (
        <>
            <form>
                <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Product Name"
                        name="Color"
                        value={props.color}
                        onChange={props.onChange}
                    />
                    <label htmlfor="floatingInput">Colour</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Product Name"
                        name="Ram"
                        value={props.Ram}
                        onChange={props.onChange}
                    />
                    <label htmlfor="floatingInput">Size</label>
                </div>
            </form>
        </>
    )
}
export default Categorycoth;