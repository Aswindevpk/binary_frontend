import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
// import './ForgotPass.css'; 

const ForgotPassConfirm = () => {
    let {forgotPassConfirm } = useContext(AuthContext);
    const { token } = useParams();
    const [error, setError] = useState(null);
    let [isLoading,setLoading] = useState(true)

    useEffect(()=>{
        const verifyToken = async (token)=>{
            let response = await forgotPassConfirm(token);
            if (response) {
                setError(JSON.stringify(response.message));
                setLoading(false)
            }
        }
        verifyToken(token);
    },)
    

    return (
        <div>
         {isLoading ? (
          <p>Verifying token...</p>
        ) : (
          <p>{error}</p>
        
        )} 
      </div>
    );
};

export default ForgotPassConfirm;
