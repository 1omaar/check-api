import React from 'react'
import CocktailList from '../components/CocktailList/CocktailList'
import Search from '../components/Search/Search'
import './Home.css'
function Home({cocktails, loadCocktail, setSearch, search}) {
   
    return (<>
            <div className='home-design'>
                    <h1 className='title-design'>Search by Name's Cocktail:</h1>
                    <Search setSearch={setSearch}/>
                    <hr  style={{width:'80%'}}/>
            </div>
                    <CocktailList search={search} cocktails={cocktails} loadCocktail={loadCocktail}/>
        </>
    )
}

export default Home
