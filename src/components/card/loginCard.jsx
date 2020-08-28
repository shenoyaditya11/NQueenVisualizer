import React from 'react';
import './loginCard-style.css';

import '../mylayout/navModule/navigation-style.css'

var emailHint = "email";
var passwordHint= "password";





export const LoginCard = ()=>{

    

   
        
        const login = (event)=>{

            event.preventDefault();

            emailHint=(document.getElementById("email")).value;
            passwordHint=(document.getElementById("pwd")).value;

           
        }

        try{
            document.getElementById("login").className = "active";
            document.getElementById("signup").className = "inactive";
        }catch(err){

        }

            return (

               
                    <div class="card">

                        <lable class="title">Login</lable>

                        <div class="floating-label">      
                            <input id="email" class="floating-input" type="email" placeholder=" "/>
                            <span class="highlight"></span>
                            <label>Email</label>
                        </div>
                        <div class="floating-label">      
                            <input id="pwd" class="floating-input" type="password" placeholder=" "/>
                            <span class="highlight"></span>
                            <label>Password</label>
                        </div>
                        <button class='login' onClick = {(event) => login(event)}>
                            Login
                        </button>


                    </div>
             


            );
        
}