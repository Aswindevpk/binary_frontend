import React, { useState } from "react";
import { FilterMenu,SideSection } from '../../components';
import './Stories.css';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const filters = [
    { name: "Drafts", uid: "1" },
    { name: "Published", uid: "2" },
    { name: "Response", uid: "3" },
]

const Stories = () => {
    const [activeFilter, setActiveFilter] = useState(null);
    return (
        <div className="stories">
            <div className='stories__main'>
                <div className='stories__main-header'>
                    <h1>Your Stories</h1>
                    <div className="stories__main-header__cta">
                        <a className="green_button" href="">Write a Story</a>
                        <a className="outline_button" href="">Import a Story</a>
                    </div>
                </div>
                <FilterMenu filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                <Draft/>
                <Draft/>
            </div>
            <SideSection/>
        </div >
    );
}

const Draft = () =>{
    return(
        <div className="stories_draft">
            <h2 className="stories_draft-heading">heading</h2>
            <p className="stories_draft-para">paragraph</p>
            <div className="stories_draft-footer">
                <span>Last editted 5 days ago</span>
                <span>.</span>
                <span>1 min read</span>
                <FontAwesomeIcon icon={faChevronDown} className="icons" color="gray"/>
            </div>
        </div>
    );
}

export default Stories