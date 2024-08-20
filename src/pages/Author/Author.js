import React, { useState } from 'react';
import { Avatar } from '../../assets';
import './Author.css'
import { ArticleFilterMenu } from '../../components';

const filters = ['Home', 'About'];
const allArticles = [
    { id: 1, title: 'Tech Article 1', content: 'Content of Tech Article 1', category: 'Tech' },
    { id: 2, title: 'Life Article 1', content: 'Content of Life Article 1', category: 'Life' },
    { id: 3, title: 'Business Article 1', content: 'Content of Business Article 1', category: 'Business' },
    { id: 4, title: 'Tech Article 2', content: 'Content of Tech Article 2', category: 'Tech' },
    // Add more articles here
  ];

const Author = () => {
    const [filteredArticles, setFilteredArticles] = useState(allArticles);
    const handleFilterChange = (filter) => {
        if (filter === 'All') {
          setFilteredArticles(allArticles);
        } else {
          setFilteredArticles(allArticles.filter(article => article.category === filter));
        }
      };

    return (
        <div className="home">
            <div className='home__main'>
                <h2>Creative Byte</h2>
                <ArticleFilterMenu filters={filters} onFilterChange={handleFilterChange} />
            </div>
            <div className='home__side-section'>
                <img src={Avatar}></img>
                <h3>Creative Byte</h3>
                <p>Followers</p>
                <div>
                    <button>Follow</button>
                    <a>email</a>
                </div>
                <h5>Following</h5>
                <div>
                    <img src={Avatar}>Aswin</img>
                    <p>Name</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Author;
