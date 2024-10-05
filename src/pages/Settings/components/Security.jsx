import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faMastodon,
  faFacebook,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Security = () => {
  return (
    <div className="settings_menu">
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading_danger">
              Sign out of all other sessions
            </span>
            <span className="settings_desc">
              Sign out of sessions in other browsers or on other computers.
            </span>
          </div>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Download your information</span>
            <span className="settings_desc">
              Download a copy of the information you’ve shared on Medium to a
              .zip file.
            </span>
          </div>
        </div>
      </div>
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <div className="settings_account_item_imgdiv">
            <FontAwesomeIcon icon={faMastodon} className="icons" />
            <div className="settings_heading_group">
              <span className="settings_heading">
                Create Mastodon account on @me.dm
              </span>
              <span span className="settings_desc">
                Join our premium instance exclusively for Medium members at
                me.dm.
              </span>
            </div>
          </div>
          <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
        </div>
      </div>
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <div className="settings_account_item_imgdiv">
            <FontAwesomeIcon icon={faMastodon} className="icons" />
            <div className="settings_heading_group">
              <span className="settings_heading">Connect Mastodon</span>
              <span className="settings_desc">
                Add an existing Mastodon account from another instance.
              </span>
            </div>
          </div>
          <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
        </div>
        <div className="settings_account_item">
          <div className="settings_account_item_imgdiv">
            <FontAwesomeIcon icon={faFacebook} className="icons" />
            <div className="settings_heading_group">
              <span className="settings_heading">Connect Facebook</span>
              <span className="settings_desc">
                We will never post to Facebook or message your friends without
                your permission.
              </span>
            </div>
          </div>
          <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
        </div>
        <div className="settings_account_item">
          <div className="settings_account_item_imgdiv">
            <FontAwesomeIcon icon={faXTwitter} className="icons" />
            <div className="settings_heading_group">
              <span className="settings_heading">Connect X</span>
              <span className="settings_desc">
                We will never post to X or message your followers without your
                permission.
              </span>
            </div>
          </div>
          <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
        </div>
        <div className="settings_account_item">
          <div className="settings_account_item_imgdiv">
            <FontAwesomeIcon icon={faGoogle} className="icons" />
            <div className="settings_heading_group">
              <span className="settings_heading">Disconnect Google</span>
              <span className="settings_desc">
                You can now sign in to Medium using your Google account.
              </span>
            </div>
          </div>
          <span className="settings_para">appuspk336@gmail.com</span>
        </div>
      </div>
      <div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Integration tokens</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
