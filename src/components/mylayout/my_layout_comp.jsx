import React from 'react'
import './my_layout-style.css'
import {Rows} from './row-layout'


export const MainBody = (props)=>{
    
        
        return (props.todo.length === 0 )? <h2>Nothing ToDo</h2> : (


            <div className='main'>
                
                {
            
                    props.todo.map(
                        (data, index) => {
                            if(index %2 == 0)
                                return (<Rows cat={data}
                                    side = {"right"} />);
                            else
                                return (<Rows cat={data}
                                    side = {"left"} />);
                        }   
                                   
                                
                    )
                    
                }
               
            </div>
        )
    
}