import React, { Component } from 'react';
import './App.css'
import {BoardSet} from './components/mylayout/BoardSet';
import Slider from 'react-rangeslider'
class App extends Component {
  constructor(){
    super();
    this.myVar=null;
    this.myTimer = this.myTimer.bind(this);
    this.isConflict = this.isConflict.bind(this);
    this.start = this.start.bind(this);
    this.sliderChanged = this.sliderChanged.bind(this);
    this.message="Lets Play"
    this.solId = 0;
    this.solutionArray = [];

this.state={

  user:{name:"shit"},

  solutionArray : [{
    n:4,
    currRow:1,
    currCol:1,
    cols:[],
    conflictCol: 0,
  }],
  authed:false,
  loading: true,
  i:1,
  j:1,
  n:4,
  currRow:1,
  currCol:1,
  cols:[],
  conflictCol: 0,
  start:false,
  running:false,
  speed:100,
  solId : 1
};
    
  }

  start(){

   let val = document.getElementById("value").value;
   let speed = document.getElementById("speed").value;

   if(val > 8 || val < 0){
     alert("Try N between 0 and 8");
     return;
   }

  this.message = "Lets Go!!";

   
      this.solId = this.state.solId;

      let currSolution = {
        n:val,
        currRow:1,
        currCol:1,
        cols:[],
        conflictCol:0
      }

      let solutionArray = [currSolution];


      this.setState({
        solutionArray:solutionArray,
        start:true,
        speed:speed
      });
   

  }

  isConflict(col){

    let rows = col.length;

    let prev = col.length -2;
    let now = col.length-1;
    while(prev >= 0 ){
        if(col[prev] === col[now]){

          let solAarray = this.state.solutionArray
          let currSolution = solAarray[this.solId-1];
          currSolution.conflictCol=col[prev]

          solAarray[this.solId-1] = currSolution;

    
          this.setState({
            solutionArray:solAarray
          });

          // this.setState({
          //   conflictCol:col[prev]
          // });
          return true;
        }
        prev--;
    }

    

    let left = col.length-2;
    let i=1;
    while(left>=0){
        if(col[left] === col[now]-i){


          let solAarray = this.state.solutionArray
          let currSolution = solAarray[this.solId-1];
          currSolution.conflictCol=col[left]

          solAarray[this.solId-1] = currSolution;

    
          this.setState({
            solutionArray:solAarray
          });

          // this.setState({
          //   conflictCol:col[left]
          // });
          return true;
         
        }
        left --;
        i++;
    }

    let right = col.length-2;
    i=1;
    while(right>=0){
        if(col[right] === col[now]+i){

          let solAarray = this.state.solutionArray
          let currSolution = solAarray[this.solId-1];
          currSolution.conflictCol=col[right]

          solAarray[this.solId-1] = currSolution;

    
          this.setState({
            solutionArray:solAarray
          });

          // this.setState({
          //   conflictCol:col[right]
          // });
          return true;
        }
        right --;
        i++;
    }

        

    return false;
  }
  
  myTimer() {

    //run N-queen
    

    console.log(this.solId -1 );
    
    let currSolution = this.state.solutionArray[this.solId-1];

    let n = currSolution.n;
    let currRow = currSolution.currRow;
    let currCol  = currSolution.currCol;
    let cols = currSolution.cols;

   

    this.setState({
      conflictCol:0
    });



    if(currRow === 0){

      this.solId--; 
      this.state.solutionArray.pop();
      this.message="Possible Solutions are "+ (this.solId);
      this.setState({
        running:false,
        start:false
      });
      clearInterval(this.myVar);
      return;
    }

    if(currRow > n){
      clearInterval(this.myVar);
      this.message="Lets do it!!";


        cols.push(currCol);

        //use copy again elese future modification will effect this board
        let prevCols = [...cols];
        currSolution.cols=prevCols;
        currSolution.currCol = currCol;
        currSolution.conflictCol = 0;


        let solAarray = this.state.solutionArray
        solAarray[this.solId-1] = currSolution;

        
        this.setState({
          solutionArray:solAarray
        });

      
      //pop inserted currVal for prev board
      cols.pop();

      //get latest valid col
      currCol = cols[cols.length -1];

      //assuming latest valid col was not working and going for new
      cols.pop();


      //create copy else same ref is used for all the board
      let newCols  = [...cols];

      // currSolution = {
      //   n:this.state.solutionArray[this.solId -1].n,
      //   currRow: 1,
      //   currCol: cols[0] +1,
      //   cols:[],
      //   conflictCol:0
      // }

      console.log("last col was "+currCol+" next is "+ (currCol+1) );

      currSolution = {
        n:this.state.solutionArray[this.solId -1].n,
        currRow: currRow-1,
        currCol: currCol + 1,
        cols:newCols,
        conflictCol:0
      }

      
      let newSolAarray = [...this.state.solutionArray, currSolution];
      

      this.setState({
        solutionArray:newSolAarray,
        start:true,
        running:true,
        speed:this.state.speed
      });
      
      this.solId++;

      this.myVar = setInterval(this.myTimer, this.state.speed);
      
     // console.log(this.state.currCol);
        return;
    }

    if(currCol > n){

      currSolution.currCol=cols.pop()+1;
      currSolution.currRow=currRow-1;
      currSolution.cols=cols;

      let solAarray = this.state.solutionArray
      solAarray[this.solId-1] = currSolution;

    
      this.setState({
        solutionArray:solAarray
      });

      // this.setState({
      //     currCol: cols.pop() + 1,
      //     currRow:currRow-1,
      //     cols:cols
      // });
      //console.log(this.state.currCol);
      return;
    }

    cols.push(currCol);


    currSolution.currCol = currCol+1;
    currSolution.cols = cols;


    let solAarray = this.state.solutionArray
    solAarray[this.solId-1] = currSolution;

    
    this.setState({
      solutionArray:solAarray
    });

    // this.setState({
    //     currCol:currCol+1,
    //     cols:cols
    // });

    if( !this.isConflict(cols)){


      currSolution.currRow = currRow + 1;
      currSolution.currCol= 1;
      currSolution.cols = cols;

      
      // this.setState({
      //   currRow:currRow+1,
      //   currCol:1,
      //   cols:cols
      // });
      //console.log("found no conflict");
      //console.log(this.state.currCol);


      let solAarray = this.state.solutionArray
      solAarray[this.solId-1] = currSolution;

    
      this.setState({
        solutionArray:solAarray
      });
        return;
    }
   // console.log("cn1 = ", cols);
    cols.pop();
    //console.log("cn2 = ", cols);

    currSolution.cols = cols;

    solAarray = this.state.solutionArray
    solAarray[this.solId-1] = currSolution;

    
    this.setState({
      solutionArray:solAarray
    });

    
   // console.log(this.state.currCol);


    
  }

  sliderChanged(event){

    let speed = document.getElementById("speed").value;
    clearInterval(this.myVar);
    this.setState({
      running:false,
      speed: speed
    });
  }

 
  
  componentDidUpdate(){
    if(this.state.start && !this.state.running){
      this.myVar = setInterval(this.myTimer, this.state.speed);
      this.setState({
        running:true
      });
    }
  }


  
  render() {

    let squares=[];
    let n=this.state.n;
    

    for(let i=1; i<=n; i++){
      let rows = [];
      for(let j=1; j<=n; j++){
          let shade = "dar square";
          if((i%2==0 && j%2==0 )|| (i%2==1 && j%2==1))
            shade = "light square";


          if(i===this.state.currRow && j === this.state.currCol -1)
            shade="mar square";  
          if( this.state.cols.indexOf(j) === i-1){
            if(this.state.conflictCol === j)
              rows.push(<div class="dash square"><span id="demo"><i style={{fontSize: "18px"}} class='fas'>&#xf445;</i></span></div>);
            else
              rows.push(<div class={shade}><span id="demo"><i style={{fontSize: "18px"}} class='fas'>&#xf445;</i></span></div>);  
            }
          else
          rows.push(<div class={shade}></div>);

      }

      squares.push(<div className="row"> {rows}</div> );
      

    }

    

     return(

      <div className="body">
      <nav className="nav_bar">

          <i style={{fontSize: "45px"}} class='fas'>&#xf445;</i>
          <h2 className="texts"> N-Queens-Visualizer</h2>
          <i style={{fontSize: "45px"}} class='fas'>&#xf445;</i>
          

        </nav>
      <div className="App">

        <div className="content-body">

          <h2 id="message">{this.message}</h2>
        

          <div class="inputDiv">
            <input id="value" type="text" placeholder="value of n" />
            <button onClick={this.start}>Start</button>
          </div>


          <div class="inputDiv">
            <h4 id="message_2">Speed <sub>ms</sub></h4>
            <input type="range" min="1" max="1000" class="slider" id="speed" onChange={this.sliderChanged}/>
          </div>



          
          

          <BoardSet state = {this.state} solId={this.solId}>
          </BoardSet>
       
        </div>
      </div>      
      </div>
        
        );
  }
}

export default App;
