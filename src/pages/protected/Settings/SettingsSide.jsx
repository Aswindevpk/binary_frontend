import React from "react";
import { Footer } from "@components/layouts";
import { Link } from 'react-router-dom';

const SettingsSide = () => {
  return (
    <>
      <div>
        <h4 className="settings__sub-header">Suggested help articles</h4>
        <div className="settings__sub-list">
          <li>
            <Link to="/">Sign in or sign up to Binary</Link>
          </li>
          <li>
            <Link to="/">Your profile page</Link>
          </li>
          <li>
            <Link to="/">Writing and publishing your first story</Link>
          </li>
          <li>
            <Link to="/">About Medium's distribution system</Link>
          </li>
          <li>
            <Link to="/">Get started with the Partner Program</Link>
          </li>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SettingsSide;
