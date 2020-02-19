import React, {
    useEffect,
    useState
} from "react";
import axios from 'axios';

const LoginApi = (email,password) => {

    console.log("handleClick");
    const baseurl = 'https://dev-bepsy-api.objectedge.com';
    // console.log(email, password);
   return axios({
        method: 'post',
        url: `${baseurl}/oe_commerce_api/occ/v1/oauth/login`,
        data: {
            'username': email,
            'password': password,
        },
        headers: {
            'Authorization': 'Bearer YWRtaW46YWRtaW4=',
            'content-type': 'application/json',
        },

    });

}

export default LoginApi