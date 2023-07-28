import './components/PriceTeller.jsx'
import PrzedstawiatorCeny from "./components/PriceTeller.jsx";
import './components/Navbar.jsx'
import './components/PhotoList.jsx'
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import {CssBaseline} from "@mui/material";
import './App.css'
import NailsImageList from "./components/PhotoList.jsx";
import Footer from "./components/Footer.jsx";




function App() {
    return (
        <div className='main'>
            <CssBaseline />
            <div className='navbar'>
            <Navbar  />
            </div>
            <div className='about_me'>
                <AboutMe />
            </div>
            <div className='photo_list'>
                <h2>Prace Wiktori 😍</h2>
                <NailsImageList />
            </div>
            <div className='cennik'>
                <h2>Cennik zabiegów 💅</h2>
                <PrzedstawiatorCeny />
            </div>
            <div className='info'>
                <p>
                    <span>Zapisz się już teraz do Wiktori 😎</span>
                    <span>(link do booksy poniżej w stopce 👇 lub na górze strony pod przyciskiem Kontakt 👆)</span>
                </p>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    );
}

export default App;