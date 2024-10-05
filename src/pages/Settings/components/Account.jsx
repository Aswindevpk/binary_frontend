import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faX } from "@fortawesome/free-solid-svg-icons";
import EditEmail from "./EditEmail";
import EditUsername from "./EditUsername";
import EditProfile from "./EditProfile";
import { api } from "../../../services/api";



const Account = () => {
  const [activeModal, setActiveModal] = useState(null); // Single state to manage modals

  let [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await api.get("/home/profile/");
      const fetchedUser = response.data;
      setUser(fetchedUser);
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  const handleOpenModal = (modelId) => {
    setActiveModal(modelId); // Open modal when button is clicked
  };

  const handleCloseModal = () => {
    setActiveModal(false); // Close modal when button is clicked or backdrop is clicked
  };

  return (
    <div className="settings_menu">
      <div className="settings_section_border_bottom">
        <div className="settings_account_item">
          <span className="settings_heading">Email address</span>
          <span
            className="settings_para"
            onClick={() => handleOpenModal("email")}
          >
            {user.email}
          </span>
          <Modal show={activeModal === "email"} onClose={handleCloseModal}>
            <EditEmail user={user} setUser={setUser} />
          </Modal>
        </div>
        <div className="settings_account_item">
          <div>
            <span className="settings_heading">Username and Subdomain</span>
          </div>
          <span
            className="settings_para"
            onClick={() => handleOpenModal("username")}
          >
            {`@${user.username}`}
          </span>
          <Modal show={activeModal === "username"} onClose={handleCloseModal}>
            <EditUsername user={user} setUser={setUser} />
          </Modal>
        </div>
        <div className="settings_account_item">
          <div className="settings_heading_group">
            <span className="settings_heading">Profile information</span>
            <span className="settings_desc">
              Edit your photo, name, pronouns, short bio, etc.
            </span>
          </div>
          <span
            className="settings_para"
            onClick={() => handleOpenModal("profile")}
          >
            {user.name}
          </span>
          <Modal show={activeModal === "profile"} onClose={handleCloseModal}>
            <EditProfile user={user} setUser={setUser}/>
          </Modal>
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

export default Account;



const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon
          className="modal-content__close icons"
          onClick={onClose}
          icon={faX}
        />
        {/* Pass modal attributes to children */}
        {React.Children.map(children, (child) => {
          return React.cloneElement(child,{ onClose });
        })}
      </div>
    </div>
  );
};
