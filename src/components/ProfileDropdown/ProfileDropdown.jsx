import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from "react";
import "./ProfileDropdown.css"; // Import the CSS file
import AuthContext from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faFileText,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Avatar from "components/Avatar/Avatar";
import { api } from "services/api";
import { toast } from "sonner";

const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  let { logoutUser, user } = useContext(AuthContext);
  // for changing content accoding to logged user and loggedout user
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  //fetch user
  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await api.get(`/home/author/${user.user_id}`);
        setAuthor(response.data);
      } catch (error) {
        toast.error("Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchAuthor();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  //usecllback for performance
  const toggleDropdownVisibility = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  });

  //useCallback for performance
  const closeDropdownOnClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdownOnClickOutside);
    return () => {
      document.removeEventListener("mousedown", closeDropdownOnClickOutside);
    };
  }, [closeDropdownOnClickOutside]);

  const primaryMenuItems = [
    { icon: faUser, label: "Profile", link: "/profile" },
    { icon: faBookmark, label: "Library", link: "/library" },
    { icon: faFileText, label: "Stories", link: "/stories" },
    { icon: faChartBar, label: "Stats", link: "/stats" },
  ];

  const settingsMenuItems = [
    { label: "Settings", link: "/settings" },
    { label: "Refine recommendations", link: "/settings" },
    { label: "Manage publications", link: "/settings" },
    { label: "Help", link: "/settings" },
  ];

  const membershipMenuItems = [
    { label: "Become a Binary member", link: "/plans" },
    { label: "Create a Mastodon account", link: "/settings" },
    { label: "Apply for author verification", link: "/settings" },
    { label: "Gift a membership", link: "/settings" },
  ];


  return (
    <div className="user-profile-dropdown" ref={dropdownRef}>
      <div onClick={toggleDropdownVisibility}>
        {loading ? (
          <div className="navbar-avatar__skelton-loader">
          </div>
        ) : (
          <>
            <Avatar
              username={author.username}
              image_url={author.img}
              size={"medium"}
            />
          </>
        )}
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-menu__group">
            {primaryMenuItems.map(({ icon, label, link }, idx) => (
              <li className="dropdown-menu__group-item" key={idx}>
                <FontAwesomeIcon
                  icon={icon}
                  className="icons dropdown-menu__group-item__icon"
                />
                <Link to={link}>{label}</Link>
              </li>
            ))}
          </div>
          <div className="dropdown-menu__group">
            {settingsMenuItems.map(({ label, link }, idx) => (
              <li className="dropdown-menu__group-item" key={idx}>
                {link ? <Link to={link}>{label}</Link> : label}
              </li>
            ))}
          </div>
          <div className="dropdown-menu__group">
            {membershipMenuItems.map(({ label, link }, idx) => (
              <li className="dropdown-menu__group-item" key={idx}>
                {link ? <Link to={link}>{label}</Link> : label}
              </li>
            ))}
          </div>
          <div className="dropdown-menu__group">
            <li className="dropdown-menu__group-item">
              <Link
                onClick={() => {
                  logoutUser();
                }}
              >
                Sign out
                <p>{author.email}</p>
              </Link>
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
