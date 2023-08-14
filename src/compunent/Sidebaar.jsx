import  React  from "react";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { Stack } from "@mui/material";
import { useState } from 'react';
const Sidebaar = ({selectedcetagry,setselectedcetagry}) =>{

    const categories = [
        { name: 'New', icon: <HomeIcon />, },
        { name: 'JS Mastery', icon: <CodeIcon />, },
        { name: 'Coding', icon: <CodeIcon />, },
        { name: 'ReactJS', icon: <CodeIcon />, },
        { name: 'NextJS', icon: <CodeIcon />, },
        { name: 'Music', icon: <MusicNoteIcon /> },
        { name: 'Education', icon: <SchoolIcon />, },
        { name: 'Podcast', icon: <GraphicEqIcon />, },
        { name: 'Movie', icon: <OndemandVideoIcon />, },
        { name: 'Gaming', icon: <SportsEsportsIcon />, },
        { name: 'Live', icon: <LiveTvIcon />, },
        { name: 'Sport', icon: <FitnessCenterIcon />, },
        { name: 'Fashion', icon: <CheckroomIcon />, },
        { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
        { name: 'Comedy', icon: <TheaterComedyIcon />, },
        { name: 'Gym', icon: <FitnessCenterIcon />, },
        { name: 'Crypto', icon: <DeveloperModeIcon />, },
      ];

    return(
        <>
        <Stack direction={'row'} sx={{overflow:"auto",height:{sx:'auto',md:'95%'}, flexDirection:{md:'column'}}}>
        {categories.map((element)=>{
            return(
                <button onClick={()=>setselectedcetagry(element.name)}  key={element.name} className="category-btn" style={{color:"white" , background: element.name === selectedcetagry && "#FC1503"}}>
                    <span style={{color: selectedcetagry === element.name ? 'white' : "red",marginRight:"10px"}}>{element.icon}</span>
                    <span style={{opacity:element.name === selectedcetagry ? '1':'0.7'}}>{element.name}</span>

                </button>
            )

        })}
        </Stack>
        </>

    )

};
export default Sidebaar;