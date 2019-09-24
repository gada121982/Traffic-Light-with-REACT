import React , { Component} from 'react';



class todoitem extends Component{

    render(){

        return(

            <div className='todoitem'>

                <p>
                    Di cho {this.props.title}
                </p>
            </div>


        ) ; 

    }

}

export default todoitem ; 

