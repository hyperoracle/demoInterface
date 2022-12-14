import NavBar from "../components/NavBar/NavBar";
import {Paper} from "@mui/material";

const MainLayout = ({children})=>{
    return <Paper sx={{height: 'auto', width: 'auto', minHeight:"100vh", minWidth:"100vw"}} square elevation={0} style={{backgroundImage: "linear-gradient(to top, #0D0854 55%, #0575E6 100%)", }}>
        <NavBar>
            {children}
        </NavBar>
    </Paper>
}

export default MainLayout;