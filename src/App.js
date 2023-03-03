import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import Commercial from "./pages/comercial building";
import CommonHome from "./pages/common header";
import Educational from "./pages/educational institute";
import Histroric from "./pages/histroric monuments";
import Airporttrain from "./pages/train station and airport";
import Residential from "./pages/residential building";
import Hotel from "./pages/hotels and ";
import Design from "./pages/design";
import Project from "./pages/project";
import Build from "./pages/Buid";
import About from "./pages/About";
import Review from "./pages/Review";
import Contact from "./pages/contact";
import { useEffect } from "react";





function App() {
 useEffect(()=>{
  fetch('https://rapidapi.com/collection/review-apis').then(data => data.json()).then(data =>{
    console.log(data)
  });
 },[]);
  return (
    <BrowserRouter>
  
    <Grid container>
    <CommonHome/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/commercial" element={<Commercial/>} ></Route>
        <Route path='/Educational' element={<Educational/>}></Route>
        <Route path='/Histroric' element={<Histroric/>}></Route>
        <Route path='/Airporttrain' element={<Airporttrain/>}></Route>
        <Route path='/Residential' element={<Residential/>}></Route>
        <Route path='/Hotel' element={<Hotel/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Design' element={<Design/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Build' element={<Build/>}></Route>
        <Route path='/Review' element={<Review/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        


        </Routes>

    </Grid>
    </BrowserRouter>
  );
}

export default App;
