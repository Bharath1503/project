import {  Grid} from "@mui/material";
import Pageone from "./pages/1stpage";
import Pagetwo from "./pages/pagetwo";
import Ourservices from "./pages/our services";
import { useState } from "react";

function Home(){
    
    
    return(
        <Grid container>
      
        <div style={{width:'100%'}}><Pageone/></div>
        <br/>
        <br/>
        <div><Pagetwo/></div>
        <div style={{width:'100%',marginTop:'-17px'}}><Ourservices/></div>
      </Grid>
    )
}
export default Home