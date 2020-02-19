import React, {
    Component,useState
} from 'react'
import './style.css';
import {
    searchProduct
} from '../../redux/searchProduct/searchProductAction'
import {
    connect
} from 'react-redux'
import Axios from 'axios'
import Grid from '@material-ui/core/Grid';
import {
    Link
} from 'react-router-dom';
import productApi from '../../Components/ProductsDetailPage/productApi'
import { Redirect } from 'react-router-dom';


    function Search(props) {
        const [response, setResponse] = useState("");
        let finalResult='';
       

        
        if (props.searchResult && props.searchResult.searchResult && props.searchResult.searchResult.searchResponse && props.searchResult.searchResult.searchResponse.data && props.searchResult.searchResult.searchResponse.data.response && props.searchResult.searchResult.searchResponse.data.response.records){
            finalResult = props.searchResult && props.searchResult.searchResult && props.searchResult.searchResult.searchResponse && props.searchResult.searchResult.searchResponse.data && props.searchResult.searchResult.searchResponse.data.response && props.searchResult.searchResult.searchResponse.data.response.records;
        }
        console.log("props****", props.searchResult && props.searchResult.searchResult && props.searchResult.searchResult.searchResponse && props.searchResult.searchResult.searchResponse.data && props.searchResult.searchResult.searchResponse.data.response && props.searchResult.searchResult.searchResponse.data.response.records);
    const [searchInput,setSearchInput]=useState('');
    const [searchData, setSearchData] = useState({
        "term": searchInput,
        sortBy: "new asc",
        page: 0,
        recordsPerPage: 20,
        heirarchical: [],
        multiselect: [],
        singleselect: [],
        range: []
    })
        
    
    const handleChange=(e)=>{
        setSearchInput(e.target.value)
  
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

    }
    const handleSearch=()=>{       
        props.searchProduct(searchInput,searchData);
    }
    const viewProduct=(productId)=>{
        console.log("productId", productId.productId);
        productApi(productId)
         return <Redirect to = {
             `/product/${productId.productId}`
         }
         />;

    }
    

    
     
        return (
            <div>

                <div class="topnav">  
  <div class="search-container">
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search.." name="search" onChange={handleChange}/>
      <button type="submit" onClick={handleSearch}><i class="fa fa-search"></i></button>
    </form>
  </div>
</div>

<h2>Search Products</h2>
<Grid style={{display:'flex'}}>  
  {
      console.log("prod", finalResult)
  }
  < Grid style = {
      {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
      }
  } >
  {
     finalResult &&  finalResult.map(product => {
       
        // ******************************
        let pId = product.productId;
        let pIdDirect = '/product/'+pId
      return <Grid  item xs={12} sm={6} md={6} lg={3} xl={3} style={{width:'100%',flexFlow: 'wrap'}}>
      <div style={{textAlign: 'center'}}>
      < Link to = {pIdDirect} onClick={viewProduct.bind(this,product)}>< img src = "https://ccstore-z93a.oracleoutsourcing.com/ccstore/v1/images/?source=/file/v2689575973753967220/products/BontragerSolsticeMIPS_21810_J_Primary.jpg&amp;height=300&amp;width=300" / ></Link >
      <p>{
                 product.productId
                 
             }</p>
             < p > {product.sfdcName }</p>
             < Link to = {pIdDirect} onClick={viewProduct.bind(this,product)}>View More</Link >
             </div>
             

          
           
        </Grid>

      })
      
  }
  
</Grid>
               </Grid>  
            </div>
        )
}
    


const mapStateToProps = (state) => ({
    searchResult: state.searchProduct,
    error: state.searchProduct,
});
const mapDispatchToProps = dispatch => {
    return {
        searchProduct: (searchInput, searchData) => dispatch(searchProduct(searchInput,searchData))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)




