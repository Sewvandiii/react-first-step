import React, {Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        //create the state object
        this.state = {
            message: 'Welcome Visitor'

        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for subscribing'
        })
    }

    render(){
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>)
    
    }

} 

export default Message