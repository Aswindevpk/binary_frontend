import React from 'react'

const Notification = () => {
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
  )
}

export default Notification