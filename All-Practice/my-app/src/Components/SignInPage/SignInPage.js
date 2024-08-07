import React from 'react'
import { useState } from 'react'
import './SignInPage.css'

export default function SignInPage() {
    // var state = false
    // function toggle(){
    //     if(state){
    //         document.getElementById("password").
    //         setAttribute("type","password");
    //         document.getElementById("eye").style.color='gray';
    //         state = false
            
    //     }
    //     else{
    //        document.getElementById("password").
    //         setAttribute("type","text");
    //         document.getElementById("eye").style.color='blue';
    //         state = true
    //     }
    // }

    const [inputType,setInputType] = useState(true)

  


    
    const [passValue,setPassValue] = useState('')
    const [cnfPassValue,setCnfPassValue]=useState(false)
    const [correctPass,setCorrectPass] = useState()

    const getPassData = (event) =>{
        setPassValue(event.target.value)
      
}

    const getCnfPassData = (e) =>{
        let cnfData = e.target.value
        if(!cnfData){
            setCnfPassValue(false)
            setCorrectPass(false)
        } else if(passValue !== cnfData){
            setCnfPassValue(true)
    }else{
        setCnfPassValue(false)
        setCorrectPass(true)
    }
}
        
    

  return (
    <div>

        <div className='page'> 
        
            <div className="box">  

                <div className="heading"><p>Sign Up</p></div>

                <div className="inputmenu">
                    
                    <form className='form' action="" autoComplete='off'>

                        <input type="text" name="firstname" placeholder="Enter your First Name" id="firstname" required/><br/>
                        
                        <input type="text" name="lastname" placeholder="Enter your Last Name" id="lastname" required/><br/>
                        
                        { inputType ? 
                        
                                <div className='inputPassword'>
                            
                                    <input  type="password" name="password" placeholder="Enter your Password" id="password" onChange={getPassData} required />
                                    <i className="fas fa-eye" onClick={() => setInputType(!inputType)} id="eye" /><br/>
                            
                                </div>   
                                
                                : 
                        
                                <div className='inputPassword'>
                            
                                    <input  type="text" name="password" placeholder="Enter your Password" id="password" onChange={getPassData}  required/> 
                                    <i className="fas fa-eye blue" onClick={() => setInputType(!inputType)} id="eye" /><br/>
                             
                                </div> 
                        
                        }
                        
                        <input type="password" name="confirm password" placeholder="Retype your password" id="cnfpassword" onChange={getCnfPassData}  required/><br/>
                        
                        {cnfPassValue ? 
                            
                            <span className="check" id="message">Password is Incorrect</span> 
                            
                            :
                            
                            correctPass ? 
                            
                            <span className='check1'>Password is correct</span>: ""
                            
                        }<br/>
                        
                        <input type="checkbox" name="checkbox" id="" required/> I agree all Terms and Condition  <br/>
                        
                        <button className='button'>Submit</button> 
                         
                    </form>
                                                                                    
                </div> 

            </div>
            
        </div>
           

    </div>
  )
}
