import "./Product.css";

function Product({title, price=1, features}) {
    return(
        <div className="Product">
           <b> <h3>{title} </h3>
            <h5>Price: {price}</h5>
            {price>3000&&<p>"Discount of 5%"</p>}
            </b>
        </div>
        
    );
}

export default Product; 