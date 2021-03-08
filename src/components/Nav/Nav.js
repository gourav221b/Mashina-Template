import React from 'react'
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import * as Icon from 'react-icons/fi'
import {CgMenuRight} from 'react-icons/cg'
function Nav() {
    function openNav()
    {
        // console.log('opening')

       document.getElementById('menu').classList.add('open');
    }

    function closeNav()
    {
        // console.log('closing')
       document.getElementById('menu').classList.remove('open');
    }
    window.addEventListener('scroll',()=>{
        const navbar=document.getElementById('navbar');
        const hamMenu=document.querySelector('#hamMenu');
        
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            navbar.style.background="rgba(255, 255, 255, 0.964)";
            navbar.style.borderBottom="none";
            navbar.style.color="#000";
            navbar.style.minHeight="70px";
            document.querySelectorAll('.navItem').forEach(element => {
                element.style.color="#000";

            });
            hamMenu.style.background="#000"
          
          } else {
            navbar.style.background="transparent";
            navbar.style.color="#fff";
            navbar.style.minHeight="100px";
           
            document.querySelectorAll('.navItem').forEach(element => {
                element.style.color="#fff";

            });

            hamMenu.style.background="transparent"
          }
         
          
    })
           
          
         
       
       
      
    return (
       
        <div className="nav" id="navbar">
            <div id="hamMenu"onClick={openNav} >
            <CgMenuRight size={36}  id="hamIcon"/>
            </div>
            <div className="brandName">
            машина
             {/* /mashina */}
            </div>
   
            <div className="menu " id="menu">
                <span id="closeBtn" onClick={closeNav}> &times;</span>
            <span><Link className="navItem"> Home </Link></span>
            <span><Link className="navItem"> Listings </Link></span>
            <span><Link className="navItem"> Shop </Link></span>
            <span><Link className="navItem"> Contact </Link></span>
            <span><Link className="navItem"> <Icon.FiLogIn/> </Link></span>
            <span><Link className="navItem"> <Icon.FiSearch/> </Link></span>
            </div>
        </div>
        
    )
}

export default Nav
