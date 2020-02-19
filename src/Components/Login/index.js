import React,{ useEffect,useState } from "react";
import {withToastManager,
    useToasts
} from 'react-toast-notifications'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
    connect
} from 'react-redux'
import {loginRequest} from '../../redux/Login/loginAction'

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
       
    }, [props.token.payload.status])
     
   const handleSubmit =(e)=>{
       
        e.preventDefault();
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
    return (
        <div>
            < Container component = "main"
            maxWidth = "xs" >
      <CssBaseline />
      <div >
       
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
const mapDispatchToProps = dispatch => {
    return {
        loginRequest: (login, password) => dispatch(loginRequest(login, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

