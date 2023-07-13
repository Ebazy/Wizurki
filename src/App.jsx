import './Components/przedstawiator_ceny.jsx'
import PrzedstawiatorCeny from "./Components/przedstawiator_ceny.jsx";
import './Components/Navbar.jsx'
import './Components/photo_list.jsx'
import Navbar from "./Components/Navbar.jsx";
import AboutMe from "./Components/about_me.jsx";
import {CssBaseline} from "@mui/material";
import './App.css'
import NailsImageList from "./Components/photo_list.jsx";





function App() {


    return (
        <div className='main'>
            <CssBaseline />
            <Navbar />
            <div className="about_me">
                <AboutMe />
            </div>
            <div className="photo_list">
                <NailsImageList />
            </div>
        </div>
    );
}

export default App;