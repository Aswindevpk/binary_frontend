import React, { useState } from "react";
import { ArticleFilterMenu } from '../../components';
import './Settings.css';

const filters = [
    { name: "Account", uid: "1" },
    { name: "Publishing", uid: "2" },
    { name: "Notification", uid: "3" },
    { name: "Membership and Payment", uid: "4" },
    { name: "Security and apps", uid: "5" },
]

const Settings = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    return (
        <div className="settings">
            <div className='settings__main'>
                <h2 className='settings__main-header'>Settings</h2>
                <ArticleFilterMenu filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            </div>
            <div className='settings__sub'>
                <h5 className='settings__sub-username'>Suggested help articles</h5>
                <div className="settings__sub-list">
                    <li>
                        <a href="">Sign in or sign up to Medium</a>
                    </li>
                    <li>
                        <a href="">Your profile page</a>
                    </li>                    
                    <li>
                        <a href="">Writing and publishing your first story</a>
                    </li>                    
                    <li>
                        <a href="">About Medium's distribution system</a>
                    </li>                    
                    <li>
                        <a href="">Get started with the Partner Program</a>
                    </li>
                </div>
            </div>
        </div >
    );
}

export default Settings