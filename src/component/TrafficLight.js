import React , { Component} from 'react';

import classNames from 'classnames'


class TrafficLight extends Component{

    constructor(){
        super(); 

        this.state = {
          currentColor : 'RED'
        }

        setInterval(()=>{

          console.log(this.state.currentColor) ; 
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
      const {currentColor} = this.state ; 
        return(
            <div className='TrafficLight'>
                <div  className = {classNames('bub','red',{active : currentColor === 'RED'})} ></div>           
                <div  className = {classNames('bub','orange',{active : currentColor === 'ORANGE'})}></div>
                <div  className = {classNames('bub','green',{active : currentColor === 'GREEN'})}></div>
            </div>   
        )
    }

}

export default TrafficLight ; 

