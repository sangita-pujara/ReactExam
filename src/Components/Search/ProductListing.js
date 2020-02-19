import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
    Link
} from 'react-router-dom';
function ProductListing(props) {
    console.log("props", props)
    const {data}=props;
   if (!props) {
    return (<Grid>
        <p>props.</p>
    </Grid>)
   }
    {
       props.data &&  props.data.map(product => {
           console.log("product", product.productId)
        return <p > {product.productId} </p>
    })}
   
    
    
}

export default ProductListing;
