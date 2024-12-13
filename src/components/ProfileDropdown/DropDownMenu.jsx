import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropdownMenu = ({ primaryMenuItems, settingsMenuItems, membershipMenuItems, logoutUser, author }) => {
  return (
    <div className="absolute top-10 right-0 bg-white shadow-md rounded z-10 w-64">
      <MenuGroup items={primaryMenuItems} />
      <MenuGroup items={settingsMenuItems} />
      {/* <MenuGroup items={membershipMenuItems} /> */}
      <div className="text-sm font-medium text-secondary py-3 px-5 flex items-center border-b border-gray-300">
        <li className="list-none py-2 px-1 hover:text-primary">
          <Link onClick={logoutUser}>
            Sign out
            <p>{author.email}</p>
          </Link>
        </li>
      </div>
    </div>
  );
};

const MenuGroup = ({ items }) => {
  return (
    <div className="text-sm font-medium text-secondary py-3 px-5 flex flex-col border-b border-gray-300">
      {items.map(({ icon, label, link }, idx) => (
        <li className="list-none py-2 px-1 flex hover:text-primary" key={idx}>
          {icon && <FontAwesomeIcon icon={icon} className="icons text-xl min-w-[20px] mr-4 flex justify-start" />}
          {link ? <Link to={link}>{label}</Link> : label}
        </li>
      ))}
    </div>
  );
};

export default DropdownMenu;
