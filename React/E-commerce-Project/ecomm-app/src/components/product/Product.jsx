const Product = ({product}) => {
    console.log(product);

    // Please update the facny thing via css for the product

    return(
        <>
            <img src={product.image}/>
            <h1>
               {product.title}
            </h1> 
            <p>{product.price}</p>
        </>
    )

}

export default Product;