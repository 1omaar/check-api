import Axios from 'axios';
import React,{useEffect,useState} from 'react'

import CocktailDesc from '../components/CocktailDesc/CocktailDesc';

function CocktailDetails(props) {
const [details, setDetails] = useState([]);
const [loaddetails, setLoaddetails] = useState(true);
const { id } =props.match.params;

const getDetails = () => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res)=>{
         setDetails(res.data.drinks[0]);
         setLoaddetails(false);  
    })
    .catch((err) => err);
};

useEffect(() => {
   getDetails()
    
}, [])

    return (
        <div>
            <CocktailDesc details={details} loaddetails={loaddetails}/>
        </div>
    )
}

export default CocktailDetails
