import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const Publishing = () => {
  return (
    <div className="settings_menu">
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Manage publications</span>
          </div>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              Allow readers to leave private notes on your stories
            </span>
            <span className="settings_desc">
              Private notes are visible to you and (if left in a publication)
              all Editors of the publication.
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              Manage tipping on your stories
            </span>
            <span className="settings_desc">
              Readers can send you tips through the third-party platform of your
              choice.
            </span>
          </div>
          <span className="settings_para">Disabled</span>
        </div>
      </div>
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Allow email replies</span>
            <span className="settings_desc">
              Let readers reply to your stories directly from their email.
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">‘Reply To’ email address</span>
            <span className="settings_desc">
              Shown to your subscribers when they reply.
            </span>
          </div>
          <span className="settings_para">appuspk@gmail.com</span>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Import email subscribers</span>
            <span className="settings_desc">
              Upload a CSV or TXT file containing up to 5,000 email addresses.
            </span>
          </div>
          <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
        </div>
      </div>
      <div className="settings_publishing_secion3">
        <div className="settings_account_item">
          <span className="settings_main_heading">
            Promote email subscriptions
          </span>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Share your subscribe page</span>
            <span className="settings_desc">
              This page allows readers to subscribe to you via email.
            </span>
          </div>
          <div>
            <span className="settings_para">https://aswindev.in</span>
            <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
          </div>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              Customize your subscription promotion message
            </span>
            <span className="settings_desc">
              This is the message on your subscribe and profile pages.
            </span>
          </div>
          <span className="settings_para">Get an email whenever..</span>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              Display a subscription promotion message
            </span>
            <span className="settings_desc">
              A message will display after the second story on your profile.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publishing;
