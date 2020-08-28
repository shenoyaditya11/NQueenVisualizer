import React from 'react'
import './card-list-style.css'
import {Card} from '/home/aditya/hello-world/src/components/card/card-component'

export const CardList = (props)=>{
    
        return (
            <div className='card-list'>
                {
                    props.monsters.map(
                        data => (<Card cat={data} />)
                                   
                                
                    )
                    
                }
               
            </div>
        )
    
}