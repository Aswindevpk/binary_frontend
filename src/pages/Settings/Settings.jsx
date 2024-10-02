import React, { useState } from "react";
import { FilterMenu } from "../../components";
import "./Settings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faMastodon,
  faFacebook,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const filters = [
  { name: "Account", uid: "1" },
  { name: "Publishing", uid: "2" },
  { name: "Notification", uid: "3" },
  { name: "Membership and Payment", uid: "4" },
  { name: "Security and apps", uid: "5" },
];

const Settings = () => {
  const [activeFilter, setActiveFilter] = useState({
    name: "Account",
    uid: "1",
  });

  return (
    <div className="settings">
      <div className="settings__main">
        <h2 className="settings__main-header">Settings</h2>
        <FilterMenu
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        {activeFilter && activeFilter.name == "Account" && <Account />}
        {activeFilter && activeFilter.name == "Publishing" && <Publishing />}
        {activeFilter && activeFilter.name == "Notification" && (
          <Notifications />
        )}
        {activeFilter && activeFilter.name == "Membership and Payment" && (
          <Membership />
        )}
        {activeFilter && activeFilter.uid == "5" && <Security />}
      </div>
      <div className="settings__sub">
        <span className="settings__sub-username">Suggested help articles</span>
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
    </div>
  );
};

const Account = () => {
  return (
    <div className="settings_menu">
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <span className="settings_heading">Email address</span>
          <span className="settings_para">appuspk336@gmail.com</span>
        </div>
        <div className="settings_account_item">
          <div>
            <span className="settings_heading">Username and Subdomain</span>
          </div>
          <span className="settings_para">@appuspk336</span>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Profile information</span>
            <span className="settings_desc">
              Edit your photo, name, pronouns, short bio, etc.
            </span>
          </div>
          <span className="settings_para">appuspk</span>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Profile design</span>
            <span className="settings_desc">
              Customize the appearance of your profile.
            </span>
          </div>
          <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Custom domain</span>
            <span className="settings_desc">
              Upgrade to a Medium Membership to redirect your profile URL to a
              domain like yourdomain.com.
            </span>
          </div>
          <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Partner Program</span>
            <span className="settings_desc">
              You are not enrolled in the Partner Program
            </span>
          </div>
          <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Profile information</span>
            <span className="settings_desc">
              Edit your photo, name, pronouns, short bio, etc.
            </span>
          </div>
          <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
        </div>
      </div>
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              Muted writers and publications
            </span>
          </div>
          <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Blocked Users</span>
          </div>
        </div>
      </div>
      <div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading_danger">Deactivate Account</span>
            <span className="settings_desc">
              Deactivating will suspend your account until you sign back in.
            </span>
          </div>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading_danger">Delete account</span>
            <span className="settings_desc">
              Permanently delete your account and all of your content.
            </span>
          </div>
          <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
        </div>
      </div>
    </div>
  );
};

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

const Notifications = () => {
  return (
    <div className="settings_menu">
      <div className="settings_account_item">
        <span className="settings_main_heading_lg">Email Notifications</span>
      </div>
      <div className="settings_account_item">
        <span className="settings_main_heading">Story Recomendations</span>
      </div>
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Medium Digest</span>
            <span className="settings_desc">
              The best stories on Medium personalized based on your interests,
              as well as outstanding stories selected by our editors.
            </span>
          </div>
          <span className="settings_para">Daily</span>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Recommended reading</span>
            <span className="settings_desc">
              Featured stories, columns, and collections that we think you’ll
              enjoy based on your reading history.
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
      </div>
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <span className="settings_main_heading">
            From writers and publications
          </span>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              New stories added to lists you’ve saved
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
      </div>
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <span className="settings_main_heading">Social activity</span>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              When someone follows you or highlights the same passage in a story
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              When someone follows you or highlights the same passage in a story
            </span>
          </div>
          <span className="settings_para">In network</span>
        </div>
      </div>
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <span className="settings_main_heading">For writers</span>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              Notifications on your published stories
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              Notifications on your lists
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              From editors about featuring your stories
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
      </div>
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <span className="settings_main_heading">Others from Binary</span>
        </div>

        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              New product features from Medium
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              Information about Medium membership
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">
              Writing updates and announcements
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
      </div>
      <div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Allow Email notifications</span>
            <span className="settings_desc">
              You’ll still receive administrative emails even if this setting is
              off.
            </span>
          </div>
          <input type="checkbox" id="checkbox"></input>
        </div>
        <span className="settings_main_heading_lg">Push notifications</span>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_desc">
              Open the Medium app from your mobile device to make changes to
              push notifications.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Membership = () => {
  return (
    <div className="settings_menu">
      <div className="settings_account_item">
        <div className="settings_heading_group">
          <span className="settings_heading">
            Upgrade to a Medium Membership
          </span>
          <span className="settings_desc">
            Open the Medium app from your mobile device to make changes to push
            notifications.
          </span>
        </div>
        <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
      </div>
    </div>
  );
};

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

export default Settings;
