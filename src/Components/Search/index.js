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
// import searchApi from '../../redux/searchProduct/searchApi'






    function Search(props) {
        // const [response,setResponse]=useState("")
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
                return Axios.get(searchGetURL, options).then(response => {
                    console.log("response", response)
                    return response
                }).catch(error=>{return error});
                
            }
        }
       

        console.log("props****", props);
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
       const searchResponse= searchApi(searchInput, searchData);
       console.log("response....", searchResponse)
       //console.log("searchResponse", searchResponse);
      //  props.searchProduct(searchInput,searchData);
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

<div >
  <h2>Search Products</h2>
  
</div>
                
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
export default connect(null, mapDispatchToProps)(Search)




