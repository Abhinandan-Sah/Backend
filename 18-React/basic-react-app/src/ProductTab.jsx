import Product from "./product";

function ProductTab(){
    let styles = 
    {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center", 
        alignItems: "center"
    }
    return(
        <div style={styles}>
            <Product title="logitech MX Master" idx={0}/>
            <Product title="Apple Pencil (2nd Gen)" idx={1}/>
            <Product title="Zebronics Zeb-transformer" idx={2}/>
            <Product title="Petronics Toad 23"idx={3}/>
        </div>
    );
}

export default ProductTab;