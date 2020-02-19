import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {
  Redirect
} from 'react-router-dom';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {
    makeStyles
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
 //const classes = useStyles();

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





