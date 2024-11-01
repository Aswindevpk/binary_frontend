import React, { useState, useRef, useEffect, useContext, useCallback } from "react";
import AuthContext from "../../context/AuthContext";
import { Avatar } from "@components";
import { api } from "@services/api";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark, faFileText, faChartBar } from "@fortawesome/free-regular-svg-icons";
import DropdownMenu from './DropdownMenu'; // Import the new DropdownMenu component

const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { logoutUser, user } = useContext(AuthContext);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

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
  }, [user.user_id]);

  const toggleDropdownVisibility = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

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
    <div className="relative inline-block font-sans z-50" ref={dropdownRef}>
      <div onClick={toggleDropdownVisibility}>
        {loading ? (
          <div>loading...</div>
        ) : (
          <Avatar username={author.username} image_url={author.img} size={"medium"} />
        )}
      </div>
      {isDropdownOpen && (
        <DropdownMenu 
          primaryMenuItems={primaryMenuItems}
          settingsMenuItems={settingsMenuItems}
          membershipMenuItems={membershipMenuItems}
          logoutUser={logoutUser}
          author={author}
        />
      )}
    </div>
  );
};

export default ProfileDropdown;
