import React, {
    useEffect,
    useState
} from "react";
import axios from 'axios';
import {
    withToastManager,
    useToasts
} from 'react-toast-notifications'
import Axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {
    makeStyles
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    connect
} from "tls";
import {
    loginRequest
} from '../../redux/Login/loginAction'
// import {withToastManager,
//     useToasts
// } from 'react-toast-notifications'
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