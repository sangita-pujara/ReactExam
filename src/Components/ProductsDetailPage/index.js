import React from 'react'
import {
  Redirect
} from 'react-router-dom';

const ProductsDetailPage = () => {
   const token=localStorage.getItem("access_token");
 

     if (!token) {
       return <Redirect to = '/login' / > ;
     }
    return ( 
     
    <div>PDP</div>
  );
    
    }

export default ProductsDetailPage;





