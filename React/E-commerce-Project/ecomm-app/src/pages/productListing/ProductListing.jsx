import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Product from '../../components/product/product';
import Loader from '../../components/loader';

const ProductListing = () => {

    // const {userId, postId}  = useParams();

    const { categoryName } = useParams();

    console.log(categoryName);

    const {data: products, error, isLoading} = useFetchData(`https://fakestoreapi.com/products/category/${categoryName}`, []);



    return(
        <>
        {isLoading && <Loader />}
        {
            products && products.map((product)=>{
                return(
                    <Product product={product}/>
                )
            })
        }
           
        </>
    )

}

export default ProductListing;

