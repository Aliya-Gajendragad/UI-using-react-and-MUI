import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';


export default function Home() {
    //const navigate = useNavigate()
  return (
    <Box component="main" sx={{ p: 1 }}>
    <Toolbar />
    <Typography>
       
      <Typography justifyContent={'title'} style={{ color: 'green' }}>WELCOME!!</Typography>
      <body style={{ color: 'green' }}>Home page</body>
    </Typography>
    {/*<Button color='secondary' style={{backgroundColor:'pink'}} onClick={()=>navigate("/goto")}>GOTO</Button>
    */}
  </Box>
  )
}