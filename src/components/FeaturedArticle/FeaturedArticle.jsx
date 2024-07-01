import React from "react";
import "./FeaturedArticle.css";
import { useNavigate } from "react-router-dom";
import profile_pic from '../assets/profile_pic.png';
import article_img from '../assets/post.jpg';
import bookmark from '../assets/bookmark-plus.svg'



const FeaturedArticle = ({ article }) => {
    const navigate = useNavigate();

    const handleBlogClick = (slug) => {
        navigate(`/blog/${slug}`)
    };

    return(
    <div className="FeaturedArticle">
      <div className="FeaturedArticle__content">
        <div className="FeaturedArticle__content-author">
          <img className="FeaturedArticle__content-author__pic" src={profile_pic} alt="alt" />
          <span className="FeaturedArticle__content-author__name">Danusha Navod</span>
          <span className="FeaturedArticle__content-author__date">Apr 1, 2024</span>
        </div>
        <div  onClick={()=>{handleBlogClick(article.slug)}}>
        <h2 className="FeaturedArticle__content-title">Stop Using find() Method in JavaScript</h2>
        <p className="FeaturedArticle__content-short">First of all, we can say that the Map data-structure, which many of us know but rarely or perhaps never use, is not as insignificant as it seems. In this article, we will focus on certain fundamental topics and</p>
        </div>

        <div className="FeaturedArticle__content-footer">
          <span className="FeaturedArticle__content-footer__tag">tags</span>
          <img data-tip="save" src={bookmark} alt="" />
        </div>
      </div>
      <div className="FeaturedArticle__image">
        <img src={article_img}  alt="article image" />
      </div>
    </div>
  );
}

export default FeaturedArticle;
