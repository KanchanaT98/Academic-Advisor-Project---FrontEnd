import react from 'react';
import './NavBar.css'
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {

    const nav = useNavigate();
    const location = useLocation();

    const getButtonDetails = () => {
        if(location.pathname==='/Welcome'){
            return { text:"Login", action: () => nav('/Login')};
        }else if(location.pathname==='/AdminDashboard'){
            return { text:"Home", action: () => nav('/AdminDashboard')};
        }else if(location.pathname==='/StudentDashboard'){
            return { text:"Home", action: () => nav('/StudentDashboard')};
        }else if(location.pathname==='/AdminDashboard'){
            return { text:"Home", action: () => nav('/AdvisorDashboard')};
        }
    }

    const { text, action } = getButtonDetails();

    async function aboutClick() {
        nav("/About")
    }

    async function contactUsClick() {
        nav("/ContactUs")
    }

    async function titleClick() {
        nav("/Welcome")
    }

    return(
        <div className='navBar'>
            <h1 id='title' onClick={titleClick}><b>AcademicAdvisor</b></h1>
            <ul>
                <li id='homeBtn' onClick={action}><b>{text}</b></li>
                <li id='aboutBtn' onClick={aboutClick}><b>About</b></li>
                <li id='contactUsBtn' onClick={contactUsClick}><b>Contact Us</b></li>
                
            </ul>
        </div>
    )
}

export default NavBar;