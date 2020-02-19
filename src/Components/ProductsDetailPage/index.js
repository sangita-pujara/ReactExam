import React from 'react'
import {
  Redirect
} from 'react-router-dom';


const ProductsDetailPage = () => {
   const token=localStorage.getItem("access_token");
   let productDetail = localStorage.getItem('productDetail');
   productDetail = productDetail && JSON.parse(productDetail);
   console.log("productDetail", productDetail);
 

     if (!token) {
       return <Redirect to = '/login' / > ;
     }
    return ( 
     
    <div>PDP</div>
  );
    
    }

export default ProductsDetailPage;





