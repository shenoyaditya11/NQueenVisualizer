import React from 'react'
import './row-style.css'


export const Rows = (props)=>{

        // <img className="image" src={`https://robohash.org/${props.cat.id}?set=set2&size=180x180`}/>
    
        if(props.side == "right"){
                return (
                <div className="rrows">
                
                        <div className="details">
                                <h2>{props.cat}</h2>
                                

                        </div>    
                               
                                
                        
                </div>
                );
        }
        else{
                return (
                        <div className="lrows">
                        
                        
                                <div className="details">
                                        <h2>{props.cat}</h2>
                                        
        
                                </div>    
                               
                                        
                                
                        </div>
                        );
        }
    
}