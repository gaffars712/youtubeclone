import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Searchbaar from './Searchbaar';




const Navbar = () => {
  const logo = 'https://i.ibb.co/s9Qys2j/logo.png'
  return (
    <Stack direction={'row'} alignItems={"center"} p={2} sx={{position:"sticky",background:"#000",justifyContent:"space-between",top:"0"}} >
      <Link to={"/"} style={{display:"flex", alignItems:"center"}}>
        <img src={logo}   height={'45'}></img>
      </Link>
      <Searchbaar/>

    </Stack >
  )
}

export default Navbar;
