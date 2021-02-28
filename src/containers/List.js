import React, { useEffect, useState, Fragment } from 'react'
import Card  from '../components/Card/Card'

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=14a797c1'

 const List = () => {
 
 const [state, setState] = useState({
    data: [],
    loading: true,
    SearchTerm: "", 
    error: "",
 });

const getMovie = async () => {
    const res = await fetch(`${API}&s=joker`);
    const resJSON = await res.json();
    console.log(resJSON) 
     if (resJSON) {
        setState({
          ...state, 
        data: resJSON.Search,
        loading: false
      });
    }
}
 useEffect(() => {
    // const res = await fetch("../../assets/data.json");
    
    getMovie();
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault()
  if(!state.SearchTerm){
       return setState({
          ...state,
          error: "Por favor escribe un texto valido"
      })
  } 
  

  const response = await fetch(`${API}&s=${state.SearchTerm}`);
  const data = await response.json();
  if(!data.Search) {
    return setState({
      error:'No existen resultados'
    })
  }
 
  setState({
    data:data.Search,
    error: "",
    SearchTerm: ""
  })
 
}

const hableOnChange = (e) => {
    setState({
      ...state,  
    [e.target.name]: e.target.value
 })
}
const {data, loading} = state 
 if(loading) {
   return <div className="row justify-content-center h-100"> Cargando... </div>
 }
  
   return  (
    <Fragment>
    <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
         <form onSubmit={handleSubmit}>
            <input type="text" name="SearchTerm" className="form-control" value={state.SearchTerm} placeholder="Search" onChange={hableOnChange}  />
        </form>
        <p>{state.error ? state.error : ""}</p>
        </div>
    </div>
    <div className="row pt-2">
     {state.data && state.data.map((movie,i) =>{
       return <Card
       movie={movie}
       key={i}
        />
     })
     }
    </div>
    </Fragment>

   
   )  
}


export default List;