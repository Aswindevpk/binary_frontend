import React, { useState, useRef, useEffect } from "react";
import "./FeaturedArticle.css";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsClapping,
  faComment,
  faBookmark,
  faStar,
  faEllipsis,
  faCircleMinus,
  faCirclePlus,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
import ProfileOverlay from "./ProfileOverlay";
import { api } from "../../services/api";
import { toast } from "sonner";


const FeaturedArticle = ({ blog }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const formattedDate = format(new Date(blog.created_at), "MMM d"); // Format date as 'Feb 9'

  const handleBookmark = async(article_id) => {
    try {
      const response = await api.post(`/home/article/${article_id}/bookmark/`);
      if (response.status == 201) {
        toast.success('Article Bookmarked !')
      }else if (response.status == 200) {
        toast.success('Article Already Bookmarked !')
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.error);
      }
      console.error("error while following!", error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="FeaturedArticle">
      <div className="FeaturedArticle__content">
        <div className="FeaturedArticle__content-author">
          <ProfileOverlay author={blog.author} />
        </div>
        <Link to={`/blog/${blog.uid}/`}
          className="FeaturedArticle_content-main"
        >
          <h2 className="FeaturedArticle__content-title">{blog.title}</h2>
          <p
            className="FeaturedArticle__content-short"
            dangerouslySetInnerHTML={{
              __html: blog.summary,
            }}
          ></p>
        </Link>

        <div className="FeaturedArticle__content-footer">
          <div className="blog__actions-left">
            {blog.is_premium && (
              <FontAwesomeIcon
                icon={faStar}
                size="xs"
                color="rgb(255, 192, 23)"
              />
            )}
            <span>{formattedDate}</span>
            {blog.clap_count > 0 && (
              <div className="blog__actions-clap">
                <FontAwesomeIcon
                  icon={faHandsClapping}
                  className="icons"
                  id="tooltip-clap"
                  style={{ fontSize: "14px" }}
                  color="gray"
                />
                <Tooltip
                  anchorSelect="#tooltip-clap"
                  content={`${blog.clap_count} claps`}
                />
                <span>{blog.clap_count}</span>
              </div>
            )}
            {blog.comment_count > 0 && (
              <div className="blog__actions-comment">
                <div className="commentIcon">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="icons"
                    id="tooltip-comment"
                    style={{ fontSize: "14px" }}
                    color="gray"
                  />
                  <Tooltip
                    anchorSelect="#tooltip-comment"
                    content={`${blog.comment_count} responses`}
                  />
                </div>
                <span>{blog.comment_count}</span>
              </div>
            )}
          </div>
          <div className="blog__actions-right">
            <div>
              <FontAwesomeIcon
                icon={faCircleMinus}
                className="icons"
                id="tooltip-showless"
                style={{ fontSize: "14px" }}
                color="gray"
              />
              <Tooltip
                anchorSelect="#tooltip-showless"
                content="Show less like this"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faBookmark}
                className="icons"
                id="tooltip-bookmark"
                onClick={()=>handleBookmark(blog.uid)}
                style={{ fontSize: "14px" }}
                color="gray"
              />
              <Tooltip anchorSelect="#tooltip-bookmark" content="Save" />
            </div>
            <div className="blog__actions-right__ellipsis" ref={dropdownRef}>
              <FontAwesomeIcon
                icon={faEllipsis}
                className="icons"
                id="tooltip-ellipsis"
                style={{ fontSize: "16px" }}
                color="gray"
                onClick={toggleDropdown}
              />
              <Tooltip anchorSelect="#tooltip-ellipsis" content="More" />
              {isOpen && (
                <div className="blog_dropdown-more drop-shadow">
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    id="blog_dropdown_pointer"
                    className="icons"
                    color="white"
                  />
                  <ul className="blog_dropdown-more__section1">
                    <li>
                      <FontAwesomeIcon
                        icon={faCirclePlus}
                        className="icons"
                        style={{ fontSize: "18px" }}
                        color="gray"
                      />
                      <div>
                        <h6>Show more</h6>
                        <span>Recommend more stories like this to me.</span>
                      </div>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCircleMinus}
                        className="icons"
                        style={{ fontSize: "18px" }}
                        color="gray"
                      />
                      <div>
                        <h6>Show less</h6>
                        <span>Recommend fewer stories like this to me.</span>
                      </div>
                    </li>
                  </ul>
                  <ul className="blog_dropdown-more__section2">
                    <li>
                      <span>Follow Author</span>
                    </li>
                    <li>
                      <span>Follow Publication</span>
                    </li>
                  </ul>
                  <ul className="blog_dropdown-more__section3">
                    <li>
                      <span>Mute Author</span>
                    </li>
                    <li>
                      <span>Mute Publication</span>
                    </li>
                    <li>
                      <span style={{ color: "red" }}>Report Stroy..</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="FeaturedArticle__image">
        <img src={blog.image} alt="article" />
      </div>
    </div>
  );
};

export default FeaturedArticle;
