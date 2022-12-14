import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import MainContext from './MainContext';
import BrandsData from "./brands.json"
import React, { useEffect, useState } from 'react'
import Copied from './components/Copied';
import Collections from './components/Collections';
import {
  BrowserRouter as Router,
  Switch,
  Route,Link,Routes,useRoutes
} from "react-router-dom"


function App() {

  const brandsArray=[];
  Object.keys(BrandsData).map((key)=>{
      brandsArray.push(BrandsData[key])
  })
  const [brands,setBrands]=useState(brandsArray)
  const [selectedBrands,setSelectedBrands]=useState([])
  const [copied,setCopied]=useState(false)
  const [search,setSearch]=useState("");

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setCopied(false)
    },500)
    return()=>{
      clearTimeout(timeout)
    }
  },[copied])

  useEffect(()=>{
    setBrands(brandsArray.filter(brand=> brand.title.toLowerCase().includes(search)))
  },[search])

  const data={
    brands,
    setSelectedBrands,
    selectedBrands,
    setCopied,
    search,
    setSearch
  }


  function AppRoutes() {
    const routes = useRoutes(
      [
        {path:'/',element:<Content/>},
        {path:'/collection/:slugs',element:<Collections/>}
      ]
    )
    return routes;
  }
  return (

    
    <>
    <MainContext.Provider value={data}>
    {copied && <Copied color={copied}/>}

    <Sidebar />
        <Router>
        
          <AppRoutes/>
          
        
        </Router>
    
    </MainContext.Provider>
    
    </>

  );
}

export default App;
