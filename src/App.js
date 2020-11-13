import React, {useState, useEffect} from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import Axios from 'axios';
import CocktailDetails from './pages/CocktailDetails';

function App() {
const [cocktails, setCocktails] = useState([])
const [loadCocktail, setLoadCocktail] = useState(true)

const getCocktail = () => {
  Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
  .then((res) =>{
    setCocktails(res.data.drinks);
    setLoadCocktail(false)
  })
  .catch(err=> err)
}
const [search, setSearch] = useState('')

useEffect(() => {
  getCocktail(); 
}, [search])
  return (
    <div className="App">
     <NavBar />
      <Switch>
          <Route exact path="/" render ={() => <Home search={search} setSearch={setSearch} cocktails={cocktails} loadCocktail={loadCocktail}/>}/>
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Cocktail/:id" component={CocktailDetails}/>
          <Route path="/*" component={Error} />
      </Switch>
     <Footer />
    </div>
  );
}

export default App;
