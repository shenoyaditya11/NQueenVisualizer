import React from 'react'



export const BoardDiv = (props)=>{


    let text = "Solution "+ (props.solId + 1);


    let squares=[];
    let n=props.state.n;
    

    for(let i=1; i<=n; i++){
      let rows = [];
      for(let j=1; j<=n; j++){
          let shade = "dar square";
          if((i%2==0 && j%2==0 )|| (i%2==1 && j%2==1))
            shade = "light square";


          if(i===props.state.currRow && j === props.state.currCol -1)
            shade="mar square";  
          if( props.state.cols.indexOf(j) === i-1){
            if(props.state.conflictCol === j)
              rows.push(<div class="dash square"><span id="demo"><i style={{fontSize: "18px"}} class='fas'>&#xf445;</i></span></div>);
            else
              rows.push(<div class={shade}><span id="demo"><i style={{fontSize: "18px"}} class='fas'>&#xf445;</i></span></div>);  
            }
          else
          rows.push(<div class={shade}></div>);

      }

      squares.push(<div className="row"> {rows}</div> );
      

    }


    return (

        <div className="solutionBoard">
            <div className="main">
                <div className="board">
                {squares}
                </div>
            </div>

            <h3 id="message"> {text}</h3>
        </div>  
    );

}