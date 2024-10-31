import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => (
  <div className="flex items-center gap-2 w-60 rounded-full bg-color-bg-secondary p-2">
    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
    <input
      type="text"
      className="w-full py-2 pl-0 pr-5 bg-color-bg-secondary text-gray-400 font-bold rounded-tr-full focus:outline-none"
      placeholder="Search"
    />
  </div>
);

export default SearchBar;