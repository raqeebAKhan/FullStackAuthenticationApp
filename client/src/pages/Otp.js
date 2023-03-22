import React, { useState } from "react";
import { useNavigate, } from 'react-router-dom'


const OTPBox = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const navigate = useNavigate();

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

       
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    

    return (
        <>
            
           
<div className="otp-div">
            <div className="row">
                <div className="col text-center" >
                    <h1>Enter the verification <br/> code to continue </h1>
                   
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                
                            />
                        );
                    })}

                    <p>OTP Entered - {otp.join("")}</p>
                    <p>
                        <div className="div-click">
                        <h3
                            className="clear-h"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </h3>
                        <h3 className="clear-h2"
                           
                            onClick={e =>{
                                if( otp.join("")){
                                    navigate('/success')
                                }
                                else{
                                    alert('Invalid otp');
                                }
                                
                            } }
                        >
                           Send OTP
                        </h3>
                        </div>
                    </p>
                </div>
              
    </div>


   
            </div>

            
        </>
    );
};

export default OTPBox;
