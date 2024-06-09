import Product from "./product";

function ProductTab(){
    let options = ["hi-tech", "durable", "fast"];
    return(
        <>
        <Product title="phone" price={30000} features={options}/>
        {/* <Product title="laptop" price={40000}/>
        <Product title="Pen" price={10}/> */}
        </>
    );
}

export default ProductTab;