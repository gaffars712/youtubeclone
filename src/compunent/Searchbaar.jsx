import React from "react";
import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { Paper,IconButton, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searchbaar =()=>{

   return (
        <>
        
       <Paper component={'form'}
       onSubmit={()=>{}}
       sx={{borderRadius:20 ,padding:"1px", border:"1px solid #e3e3e3", pl:"2",boxShadow:"none",mr:{sm:5}}}>
        <input value='' type="text" placeholder="Search..." className="search-bar" onChange={()=>{}}/>
        <IconButton type="submit" sx={{padding:"10px" , color:"red"}}>
            <SearchIcon/>
        </IconButton>
       </Paper>
        
        </>
    )
};
export default Searchbaar;