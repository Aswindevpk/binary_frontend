import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import FeaturedArticle from '../components/FeaturedArticle/FeaturedArticle';
import profile_pic from '../components/assets/profile_pic.png'
import ArticleFilterMenu from '../components/ArticleFilterMenu/ArticlefilterMenu';
import FollowUser from '../components/followUser/followUser'


const filters = ['All', 'Tech', 'Life', 'Business'];

const allArticles = [
    { id: 1, title: 'Tech Article 1', content: 'Content of Tech Article 1', category: 'Tech' },
    { id: 2, title: 'Life Article 1', content: 'Content of Life Article 1', category: 'Life' },
    { id: 3, title: 'Business Article 1', content: 'Content of Business Article 1', category: 'Business' },
    { id: 4, title: 'Tech Article 2', content: 'Content of Tech Article 2', category: 'Tech' },
    // Add more articles here
];


const Home = () => {
    let { user, logoutUser, authTokens } = useContext(AuthContext);
    let [blogs, setBlogs] = useState([]);
    let [error, setError] = useState(null);
    let navigate = useNavigate()
    const [filteredArticles, setFilteredArticles] = useState(allArticles);

    const handleFilterChange = (filter) => {
        if (filter === 'All') {
            setFilteredArticles(allArticles);
        } else {
            setFilteredArticles(allArticles.filter(article => article.category === filter));
        }
    };

    useEffect(() => {
        getTest();
    }, []);

    const getTest = async () => {
        let response = await fetch("http://localhost:8000/api/home/blogs/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        });
        let data = await response.json();

        if (data.status) {
            setBlogs(data.data);
        } else {
            console.log(data)
        }
    };

    const handleLogout = async () => {
        setError(null);
        let response = await logoutUser();
        if (response) {
            setError(response.message);
        }
    };




    return (
        <div className="home">
            <div className='home__main'>
                <ArticleFilterMenu filters={filters} onFilterChange={handleFilterChange} />
                {blogs.map((blog) => (
                    <FeaturedArticle article={blog} />
                ))}
            </div>
            <div className='home__side-section'>
                <div className='home__recent'>
                    <h2 className='home__recent-header'>Recent</h2>
                    {blogs.map((blog) => (
                        <div className='home__recent-content'>
                            <div className='home__recent-content__author'>
                                <img className='home__recent-content__author-img' alt='src' src={profile_pic}></img>
                                <span className='home__recent-content__author-name'>{blog.creator}</span>
                            </div>
                            <h3 className='home__recent-content__header'>{blog.title}</h3>
                        </div>
                    ))}
                </div>
                <div className='home__topics'>
                    <h3 className='home__topics-heading'>Recommended Topics</h3>
                    <div className='home__topics-list'>
                        <span className='home__topics-topic'>new</span>
                        <span className='home__topics-topic'>flutter</span>
                        <span className='home__topics-topic'>programming</span>
                        <span className='home__topics-topic'>python</span>
                    </div>
                </div>
                <div className='home__followList'>
                    <h3 className='home__followList-heading'>Who to Follow</h3>
                    <FollowUser />
                    <FollowUser />
                    <FollowUser />
                </div>
            </div>
        </div>
    );
};

export default Home;
