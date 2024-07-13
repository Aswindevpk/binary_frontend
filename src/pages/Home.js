import React, { useEffect, useState } from 'react';
import './Home.css';
import FeaturedArticle from '../components/FeaturedArticle/FeaturedArticle';
import profile_pic from '../components/assets/profile_pic.png'
import ArticleFilterMenu from '../components/ArticleFilterMenu/ArticlefilterMenu';
import FollowUser from '../components/followUser/followUser'
import axios from 'axios';


const Home = () => {
    let [categories, setCategories] = useState([]);
    const [activeFilter, setActiveFilter] = useState(null);
    const [users, setUsers] = useState([]);
    let [topics,setTopics] = useState([]);
    let [blogs, setBlogs] = useState([]);
    let [recentblog,setRecentBlog] = useState([])
    let [error, setError] = useState(null);
    // let navigate = useNavigate()

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/home/categories/');
                const fetchedCategories = response.data.data;
                setCategories(fetchedCategories);
                if (fetchedCategories.length > 0) {
                    setActiveFilter(fetchedCategories[0]);
                }
            } catch (error) {
                console.error('There was an error fetching the categories!', error);
            }
        };
        const fetchTopics = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/home/tags/');
                const fetchedTags = response.data.data;
                setTopics(fetchedTags);
            } catch (error) {
                console.error('There was an error fetching the tags!', error);
            }
        };
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/home/users/');
                const fetchedUsers =response.data;
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            }
        };
        const recentBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/home/recent-blogs/');
                const fetchedBlogs =response.data;
                setRecentBlog(fetchedBlogs);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            }
        };

        recentBlogs();
        fetchCategories();
        fetchTopics();
        fetchUsers();

    }, []);

    // Fetch blogs for the active category whenever activeFilter changes
    useEffect(() => {
        const fetchBlogs = async (categoryId) => {
            try {
                const response = await axios.get(`http://localhost:8000/api/home/blogs/category/${categoryId}/`);
                const fetchedBlogs = response.data;
                setBlogs(fetchedBlogs);
            } catch (error) {
                console.error('There was an error fetching the blogs!', error);
            }
        };

        if (activeFilter) {
            fetchBlogs(activeFilter.uid);  // Assuming activeFilter has uid or id
        }
    }, [activeFilter]);

    return (
        <div className="home">
            <div className='home__main'>
                <ArticleFilterMenu filters={categories} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                {blogs.map((blog) => (
                    <FeaturedArticle key={blog.slug} blog={blog} />
                ))}
            </div>
            <div className='home__side-section'>
                <div className='home__recent'>
                    <h2 className='home__recent-header'>Recent</h2>
                    {recentblog.map((blog) => (
                        <div  className='home__recent-content'>
                            <div className='home__recent-content__author'>
                                <img className='home__recent-content__author-img' alt='src' src={profile_pic}></img>
                                <span className='home__recent-content__author-name'>{blog.author}</span>
                            </div>
                            <h3 className='home__recent-content__header'>{blog.title}</h3>
                        </div>
                    ))}
                </div>
                <div className='home__topics'>
                    <h3 className='home__topics-heading'>Recommended Topics</h3>
                    <div className='home__topics-list'>
                        {topics.map((topic)=>(
                            <span key={topic.uid} className='home__topics-topic'>{topic.name}</span>
                        ))}
                    </div>
                </div>
                <div className='home__followList'>
                    <h3 className='home__followList-heading'>Who to Follow</h3>
                    {users.map((user)=>(
                        <FollowUser key={user.id} user={user}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
