import React from 'react'
import Cocktail from "../Cocktail/Cocktail"
import { Spinner } from "react-bootstrap";
import './CocktailList.css'
function CocktailList({cocktails, loadCocktail, search}) {
    return (
       
        <div className="cocktail-design" >
            {loadCocktail
            ?
            ( <Spinner animation="grow" />)
            :
            cocktails===null
            ?
            <h1>Sorry, Don't exist</h1>
            :
            cocktails.map((el, i)=><Cocktail cocktails={el} key={i}/>)
        }
         
        </div>
    )
}

export default CocktailList
