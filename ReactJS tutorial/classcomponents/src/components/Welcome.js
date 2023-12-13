import React, {Component} from 'react'
class Welcome extends Component{
    componentWillUnmount(){
        alert("Class component will unmount")
    }
    render(){
        return(
            <>
                <h1>Class component</h1>
                <h2>{this.props.name}</h2>
            </>
        )
    }
}
export default Welcome
