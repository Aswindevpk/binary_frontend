import React from "react";
import { Footer } from "../../components";



const SettingsSide = () => {
  return (
    <>
        <h4 className="settings__sub-header">Suggested help articles</h4>
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
        <Footer />
    </>
  );
};

export default SettingsSide;
