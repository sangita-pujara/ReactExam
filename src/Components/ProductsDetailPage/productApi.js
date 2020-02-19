import React, {
    useEffect,
    useState
} from "react";
import axios from 'axios';

const ProductApi = (productId) => {
    console.log("API",productId.productId);

    
    const baseurl = 'https://dev-bepsy-api.objectedge.com';
    // console.log(email, password);
    return axios({
        method: 'get',
        url: `http://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/products/${productId.productId}?includeErelatedProducts=true`,
       
        headers: {
            'Bepsy-SiteId': 'siteUS',
            'Bepsy-CatalogId': 'bepsy_catalog_1',
            'Bepsy-PricelistId': 'defaultPriceGroup',
            'content-type': 'application/json'
        },
    }).then(response => {
        localStorage.setItem('productDetails', JSON.stringify(response.data.productList));
        console.log("PDP", response)
    });
    

}

export default ProductApi