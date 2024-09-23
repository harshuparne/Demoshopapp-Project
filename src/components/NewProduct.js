import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props){


    function saveProduct(product){
        console.log("i am inside in the New Product");
        console.log(product);

        //calling parent function
        props.Harshu(product);
    }

    return(
        <div className='new-product'>
            <ProductForm onSaveProduct={saveProduct}/>
        </div>

    );
}

export default NewProduct;