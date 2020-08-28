import React, { Component, createContext } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();

let mapThis= undefined;



class UserProvider extends Component {
  

  constructor(props){
    super(props);

   this.setUser =  this.setUser.bind(this);
    
    this.state = {
      user: {name:"shit"}
    };
  }
  setUser(currUser){

    this.setState({
      user : currUser 
    });
  
   
  }
  
  
  componentDidMount = () => {
    
  };
  render() {
    return (
      <UserContext.Provider value={
        this.state.user
        }
        
        >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;