import React from "react"

function Homes(){
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"></img>
            </div>
            <h1> Home components</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://static.toiimg.com/thumb/resizemode-4,msid-54939618,width-250,imgv-1/54939618.jpg"></img>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button> Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Homes