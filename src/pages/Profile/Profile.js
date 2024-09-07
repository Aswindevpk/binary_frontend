import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Profile.css'
import { Avatar } from '../../assets';
import { ArticleFilterMenu } from '../../components';

const filters=[
    {name:"home",uid:"1"},
    {name:"about",uid:"2"}
]

const Profile = () => {
    let navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState(null);


    return (
        <div className="profile">
            <div className='profile__main'>
                <h2 className='profile__main-header'>Appuspk</h2>
                <ArticleFilterMenu filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
            </div>
            <div className='profile__sub'>
                <img className='profile__sub-avatar' src={Avatar}></img>
                <h5 className='profile__sub-username'>Appuspk</h5>
                <a className='profile__sub-cta'>Edit profile</a>
            </div>
        </div >
    );
};

export default Profile;
