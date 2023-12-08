import "./styles/navbar.css"
import { useState } from "react";
import footerLogo from "./images/footer-logo.png"

const menu = <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>

const shop = <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>

const profile = <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                </svg>

const search =  <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>

const close = <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <nav className="navbar">
            <div onClick={()=> setIsOpen(c => !c)} className="menu">
                {isOpen ? close : menu}
                </div>
            <div className="logo">
                <img alt="bellu-logo" src="bellu_logo_300_dpi.png"></img>
            </div>
            {isOpen &&
                <div className="menu-options">
                    <a href="/"><div>Home</div></a>
                    <a href="/test"><div>Hair Test</div></a>
                    <div>How Bellu Works</div>
                    <div>Bellu University</div>
                    <div>About Bellu</div>
                    <div className="menu-actions">
                        <div>{search}</div>
                        <div>{profile}</div>
                        <div>{shop}</div>
                    </div>
                </div>
            }
        </nav>
     );
}


export function Footer(){
    return (
        <footer className="footer">
            <div className="column clients">
                <div className="col-title">Bellu Clients</div>
                <div>Contact Us</div>
                <div>FAQ</div>
                <div>Bellu University</div>

            </div>
            <div className="column salons">
                <div className="col-title">For Salons</div>
                <div>Bellu Labs</div>
                <div>Salon Partnerships</div>
                <div>Techinical Support</div>
            </div>
            <div className="column brand">
                <div className="brand-img">
                    <img src={footerLogo}></img>
                </div>
                <div className="copyright">
                © Bellu LLC - 2023
                </div>
            </div>
        </footer>
    )
}