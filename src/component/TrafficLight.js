import React , { Component} from 'react';

import classNames from 'classnames'


class TrafficLight extends Component{

    
    render(){
      const {currentColor} = this.props ; 
      
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

