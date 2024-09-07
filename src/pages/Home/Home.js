import React, { useEffect, useState ,useContext} from 'react';
import './Home.css';
import api from '../../services/api';
import { FeaturedArticle,ArticleFilterMenu,FollowUser, } from '../../components';
import { Avatar } from '../../assets';
import AuthContext from '../../context/AuthContext';
import SkeletonLoader from './SkeletonLoader';




const Home = () => {
    let { user, authTokens } = useContext(AuthContext);
    const [activeFilter, setActiveFilter] = useState(null);
    const [authors, setAuthors] = useState([]);
    let [topics,setTopics] = useState([]);
    let [blogs, setBlogs] = useState([]);
    let [recentblog,setRecentBlog] = useState([])
    const [loading,setloading] = useState(true)

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await api.get('/home/topics/');
                const fetchedTags = response.data.data;
                setTopics(fetchedTags);
                setActiveFilter(fetchedTags[0])
            } catch (error) {
                console.error('There was an error fetching the tags!', error);
            }
        };
        const fetchAuthors = async () => {
            try {
                const response = await api.get('/home/authors/?limit=5');
                const fetchedUsers =response.data.data;
                setAuthors(fetchedUsers);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            }
        };
        const recentBlogs = async () => {
            try {
                const response = await api.get('/home/articles/');
                const fetchedBlogs =response.data.data;
                setRecentBlog(fetchedBlogs);
            } catch (error) {
                console.error('There was an error fetching the recentblogs!', error);
            }
        };

        recentBlogs();
        fetchTopics();
        fetchAuthors();
        
    }, []);

    // Fetch blogs for the active category whenever activeFilter changes
    useEffect(() => {
        const fetchBlogs = async (Topic) => {
            try {
                const response = await api.get(`/home/articles/?topic=${Topic}`);
                const fetchedBlogs = response.data.data;
                setBlogs(fetchedBlogs);
                setloading(false)
            } catch (error) {
                console.error('There was an error fetching the blogs!', error);
            }
        };

        if (activeFilter) {
            fetchBlogs(activeFilter.name);  
        }
    }, [activeFilter]);

    if (loading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="home">
            <div className='home__main'>
                <ArticleFilterMenu filters={topics} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                {blogs.map((blog) => (
                    <FeaturedArticle key={blog.uid} blog={blog} />
                ))}
            </div>
            <div className='home__side-section'>
                <div className='home__recent'>
                    <h2 className='home__recent-header'>Recent</h2>
                    {recentblog.map((blog) => (
                        <div key={blog.uid}  className='home__recent-content'>
                            <div className='home__recent-content__author'>
                                <img className='home__recent-content__author-img' alt='src' src={Avatar}></img>
                                <span className='home__recent-content__author-name'>{blog.author.username}</span>
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
                    {authors.map((author)=>(
                        <FollowUser key={author.id} author={author} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
