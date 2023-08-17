import React from "react";
import { useState } from 'react';
import { Form,  useNavigate } from 'react-router-dom';
import { Paper,IconButton, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searchbaar =()=>{
    const [searchtem, setsearchtem] = useState('')
    const Navigate = useNavigate();
    const submithandelbu = (e)=>{
            e.preventDefault();
    
            if(searchtem){
                Navigate(`/search/${searchtem}`)

            }
            setsearchtem('')
            
        }

   return (
        <>
        
       <Paper component={'form'}
       onSubmit={submithandelbu}
       sx={{borderRadius:20 ,padding:"1px", border:"1px solid #e3e3e3", pl:"2",boxShadow:"none",mr:{sm:5}}}>
        <input value={searchtem} type="text" placeholder="Search..." className="search-bar" onChange={(e)=>setsearchtem(e.target.value)}/>
        <IconButton type="submit" sx={{padding:"10px" , color:"red"}}>
            <SearchIcon/>
        </IconButton>
       </Paper>
        
        </>
    )
};
export default Searchbaar;