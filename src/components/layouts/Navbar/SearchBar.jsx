import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => (
  <div className="hidden md:flex items-center gap-2 w-60 rounded-full py-2 px-4 bg-[#f9f9f9]">
    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-secondary" />
    <input
      type="text"
      className="w-full bg-color-bg-neutral bg-[#f9f9f9] rounded-tr-full focus:outline-none"
      placeholder="Search"
    />
  </div>
);

export default SearchBar;