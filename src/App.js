import React , {Component} from 'react';
import logo from './logo.svg';
import './component/TrafficLight.css';
import  TrafficLight from './component/TrafficLight' ; 


class App extends Component {

  constructor(){
    super(); 

    this.state = {
      currentColor : 'RED'
    }

    setInterval(()=>{

     
      this.setState(
        {
          currentColor : this.getNextColor(this.state.currentColor) 
        }
      )  

    },1000)

  }

  
  getNextColor(color){
    
    switch(color){

      case  'RED' :
        return 'ORANGE' ; 
      case   'ORANGE':
        return 'GREEN' ; 
      case   'GREEN' :
        return 'RED' ;
      default:
        return 'RED'  ; 
    }
   }
  render(){
    var {currentColor} = this.state 
    return(

        <TrafficLight currentColor={currentColor}/>

    )


  }


}

export default App ; 
