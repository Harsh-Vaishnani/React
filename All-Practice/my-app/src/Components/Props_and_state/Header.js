import React, { Component } from 'react'
import FunctionalHeader from './FunctionalHeader';
import FunctionalHeader2 from './FunctionalHeader2';
// import CrudApp1 from '../CrudApp1';

// import '../App.css'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.props=props;

        this.state={
            name:'Renish',
            age:22
        }
    }

    namechangeupper = () =>{
        this.setState({name:'RENISH'}); 
    }
    namechangelower(){
        this.setState({name:'renish'}); 
    }   

  render() {
    return (
        
    //   <div className='header'> {/*exmaple of props in class component*/}
            
    //         <div> <h1>My Name is {this.props.name} and i'm {this.props.age} years old</h1></div>
           
    //   </div>
        <>
      <div className='header'> {/*exmaple of state in class component*/}
            
            <div> <h1>My Name is {this.state.name} and i'm {this.state.age} years old</h1></div>
            <button onClick={this.namechangeupper}>UPPERCASE</button>
            <button onClick={this.namechangelower.bind(this)}>LOWERCASE</button> {/* //different method for event handling */}  

      
           
      </div>

      <FunctionalHeader name='renish' age='22'/>
      <FunctionalHeader2/> 
      {/* <CrudApp1/> */}
      </>
      
    )
  }
}
