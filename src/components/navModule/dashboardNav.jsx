import React from 'react'
import {Link}  from 'react-router-dom';
import * as Routes from '../../../constants/constants'
import './navigation-style.css'
import { auth } from '../../../firebase';

export const DashboardNavigation = (props)=>{

  console.log("dash nav");

    return (

        <nav class="navbarcorner">
            <button id="logout" className="active" onClick={(event)=> auth.signOut()} href="#">
               <Link to='/'>Logout</Link>
            </button>

            
            
        </nav>


    );


}