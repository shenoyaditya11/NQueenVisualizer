import React, {Component} from 'react'
import './dashboard-style.css'
import '../card/loginCard-style.css'
import {DashboardNavigation} from '../navModule/dashboardNav';
import {UserContext} from '../../providers/userProviders'
import {InputCard} from '../card/inputCard'
import {MainBody} from './my_layout_comp'
import {auth, firestore} from '../../firebase'

export class Dashboard extends Component{


    constructor(props){
        super();
        this.state = {
            todo:[],
            uid: props.state.user.uid
        }

        this.dbRef = firestore.collection("users").doc(this.state.uid);
    }

    componentDidMount(){


        this.dbRef
        .onSnapshot((result) => {
            console.log(result.data());

            this.setState({
                todo: result.data().todo
            });
        });

        
    }

   render(){
    return(


       
        
        <div class="mainMain">

            <DashboardNavigation></DashboardNavigation>
            <InputCard uid= {this.state.uid} todo = {this.state.todo}></InputCard>

            <MainBody todo={this.state.todo}/>
              


            
        </div>       
            
       

    );
    }

}