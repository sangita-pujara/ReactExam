import React,{ useEffect,useState } from "react";
import axios from 'axios';
import {withToastManager,
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
} from 'react-redux'
import {loginRequest} from '../../redux/Login/loginAction'
import { exportDefaultSpecifier } from "@babel/types";
 //const classes = useStyles();






function Login(props) {
    
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const[loggedin,setLoggedin]=useState(false)
    const {
        addToast
    } = useToasts();
    useEffect(()=>{
        if (props.token.payload.status === 200){
            addToast("Logged in", {
                appearance: 'success',
                autoDismiss: true,
            })
            setLoggedin(!loggedin);
          
            

        }
       console.log("use effect",props.token.payload.status);
    }, [props.token.payload.status])
     
   const handleSubmit =(e)=>{
       console.log("handleSubmit");
        e.preventDefault();
       

    }
    const getImages = () => {
        const access_token = localStorage.getItem('access_token');
        
        return Axios({
            method: 'post',
                url: `http://dev-bepsy-api.objectedge.com/oe_commerce_api/solr/v1/search?query=bike`,
                // data: {
                //     'query': 'bike',
                 
                // },
                headers: {
                    Authorization: access_token,
                    'Bepsy-SiteId': 'siteUS',
                      'Bepsy-CatalogId': 'cloudCatalog',
                      'Bepsy-PricelistId': 'defaultPriceGroup',
                      'content-type': 'application/json'
                },
        });
    }
    const login =()=>
    {
       // this.props&& this.props.loginRequest(email, password)
        console.log("this.props", props.loginRequest(email, password));
    }
    const logout =()=>{
        console.log("logout");
        setLoggedin(!loggedin)
    }
    const handleClick=()=>{
        
        console.log("handleClick");
        const baseurl = 'https://dev-bepsy-api.objectedge.com';
        console.log(email,password);
        axios({
            method:'post',
            url: `${baseurl}/oe_commerce_api/occ/v1/oauth/login`,
            data: {
                'username': email,
                'password': password,
            },
            headers: {
                'Authorization': 'Bearer YWRtaW46YWRtaW4=',
                'content-type': 'application/json',
            },

        }).then(response=>{
            localStorage.setItem('access_token', response.data.access_token);
            console.log("success", response.data.access_token);
        // this.toastManager.add('Please enter all the details', {
        //     appearance: 'warning',
        //     autoDismiss: true,
        // });
        //  localStorage.setItem('context', JSON.stringify(context));
        //getImages();
        
        addToast("Logged in", {
            appearance: 'success',
            autoDismiss: true,
        })
    }).catch(error=>{console.log("error",error);
        addToast("Not Logged in", {
        appearance: 'warning',
        autoDismiss: true,
})
});

    }
    console.log("props****", props.token.payload.status);
//    if (setLoggedin) {
//        return (<div>You are logged in
//           <button onClick={logout}>Logout</button>
//        </div>)

//    }
    return (
        <div>
       


            < Container component = "main"
            maxWidth = "xs" >
      <CssBaseline />
      <div >
        {/* <Avatar >
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        < form onSubmit = {
            handleSubmit
        } >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value = {
                email
            }
            onChange = {
                (e) => {
                    setemail(e.target.value)
                }
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value = {
                password
            }
            onChange = {
                (e) => {
                    setpassword(e.target.value)
                }
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          onClick = {login}
                  
              
          
           >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>



            
        </div>
    )
}

const mapStateToProps = (state) => ({
    token: state.login,
    error: state.login    
});
// const mapDispatchToProps = (dispatch) => ({
//     login: (login, password) => dispatch(login(login, password)),
// });

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: (login, password) => dispatch(loginRequest(login, password))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);

