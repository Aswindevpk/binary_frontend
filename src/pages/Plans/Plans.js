import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Plans.css'
import api from '../../services/api';



const Plans = () => {
    let { authTokens } = useContext(AuthContext);
    let [loading, setLoading] = useState(true);
    let [plans, setPlans] = useState(null);
    let [error, setError] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const getPlans = async () => {
            try {
                const response = await api.get('/home/plans/');
                const fetchedBlogs = response.data.data;
                setPlans(fetchedBlogs);
            } catch (error) {
                console.error('There was an error fetching the blogs!', error);
            }
        };

        getPlans();
    }, [authTokens]);

    const handleBuy = (price) => {
        navigate('/payment', { state: { price } });
    }
    return (
        <div className="plans">
            <h2 className='plans__header'>Read and write more using subscriptions.</h2>
            <p className='plans__desc'>These are all our plans available choose yours.</p>
            <div className='plans__types'>
                {plans && plans.map((plan, index) => (
                    <div className='plan__type' key={index}>
                        <h3 className='plan__type-heading'>{plan.name}</h3>
                        <p className='plan__type-period'>For {plan.duration_days} Days.</p>
                        <p className='plan__type-price'>{plan.price}/-</p>
                        <p className='plan__type-desc'>{plan.desc}</p>
                        {plan.benefits.points && plan.benefits.points.map((point, index) => (
                            <p className='plan__type-points' key={index}>{point}</p>
                        ))}
                        <button className='plan__type-btn' key={index} onClick={() => handleBuy(plan.price)}>select</button>
                    </div>
                ))};
            </div>
        </div >
    );
};

export default Plans;
