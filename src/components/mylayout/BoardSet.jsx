import React from 'react';

import {BoardDiv} from './BoardDiv';


export const BoardSet = (props) => {



    let displayArray = [];


    for(let i =0; i<props.state.solutionArray.length; i++){

        displayArray.push(
            <BoardDiv state = {props.state.solutionArray[i]} solId={i}>
            </BoardDiv>
        );
    }
    return(

        <div class="boardSetDiv">
            {displayArray}
        </div>
        
    );


}