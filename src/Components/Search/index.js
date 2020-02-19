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
// import searchApi from '../../redux/searchProduct/searchApi'






    function Search(props) {
        const [response, setResponse] = useState("");
        let finalResult='';
        const searchApi = (searchTerm, searchData) => {
            const options = {
                headers: {
                    'Bepsy-SiteId': 'siteUS',
                    'Bepsy-CatalogId': 'cloudCatalog',
                    'Bepsy-PricelistId': 'defaultPriceGroup',
                    'content-type': 'application/json'
                },
            };


            if (searchTerm !== null && searchTerm !== '') {
                let searchGetURL = `http://dev-bepsy-api.objectedge.com/oe_commerce_api/solr/v1/search?`;
                if (searchTerm.includes('term')) {
                    const newTerm = decodeURI(searchTerm);
                    searchGetURL = `${searchGetURL}query=${encodeURI(newTerm)}`;
                } else {
                    const searchQuery = {
                        term: searchTerm,
                    };
                    searchGetURL = `${searchGetURL}query=${encodeURI(
        JSON.stringify(searchQuery)
      )}`;
                }
                const response= Axios.get(searchGetURL, options).then(response => {
                    console.log("response", response)
                    return response
                }).catch(error=>{return error});
                return response;
                
            }
        }
       

        console.log("props****", props);
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
        console.log("Call Sagasearch",)
      // const searchResponse= searchApi(searchInput, searchData);
      // console.log("response....", searchResponse)
       //console.log("searchResponse", searchResponse);
        props.searchProduct(searchInput,searchData);
    }
    

    
     
        return (
            <div>

                <div class="topnav">
  {/* <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a> */}
  <div class="search-container">
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search.." name="search" onChange={handleChange}/>
      <button type="submit" onClick={handleSearch}><i class="fa fa-search"></i></button>
    </form>
  </div>
</div>


<Grid style={{display:'flex'}}>
  <h2>Search Products</h2>
  {
      console.log("prod", finalResult)
  }
  <Grid item xs={12} sm={6} md={6} lg={3} xl={3} style={{width:'100%',display:'flex'}}>
  {
     finalResult &&  finalResult.map(product => {
        //   return <ul > 
        //   <li>{product.productId}</li></ul>
        // ******************************
        
      return <Grid>
      {/* <img src="https://i.imgur.com/2QXWHNu.gif"></img> */}
      < Link to = '/product/14177' > < a > < img src = "https://ccstore-z93a.oracleoutsourcing.com/ccstore/v1/images/?source=/file/v2689575973753967220/products/BontragerSolsticeMIPS_21810_J_Primary.jpg&amp;height=300&amp;width=300" / > </a></Link >
      
      <p>{
                 product.productId
                 
             }</p>
             

          
           
        </Grid>
        // ***************************************

// return    <Grid item xs={12} sm={6} md={6} lg={4} xl={4} style={{width:'100%'}}>
//         <div className='custom-card'>
//           <div className='card-image'>
//           a
//           </div>
//           <div className='card-item-name'>
//           b
//           </div>
//           <div className='skuColor'>d</div>
//           <div className='card-item-price'>
//             <div>
//            c
//             </div>
//           </div>
          
                   
//         </div>
//       </Grid>
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


//export default connect(mapDispatchToProps, mapStateToProps)(Search)
export default connect(mapStateToProps, mapDispatchToProps)(Search)




