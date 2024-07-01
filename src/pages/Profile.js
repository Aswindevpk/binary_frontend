import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Profile.css'
import avatar from '../components/assets/profile_pic.png'


const Profile = () => {
    let { authTokens } = useContext(AuthContext);
    let [loading, setLoading] = useState(true);
    let [plans, setPlans] = useState(null);
    let [error, setError] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/home/plans/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + String(authTokens.access)
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data.data)
                if (data.status) {
                    setPlans(data.data);
                } else {
                    setError('Failed to fetch blog data');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getProfile();
    }, [authTokens]);

    return (
        <div className="profile">
            <div className='profile__main'>
                <h2 className='profile__main-header'>Appuspk</h2>
            </div>
            <div className='profile__sub'>
                <img className='profile__sub-avatar' src={avatar}></img>
                <h5 className='profile__sub-username'>Username</h5>
                <p className='profile__sub-bio'>bio</p>
            </div>
        </div >
    );
};

export default Profile;
