import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ onSearch }) => {
  const [cat, setCat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(cat)
   
  };

  return (
    <form onSubmit={handleSubmit} className='formSearch'>
      <input className='searchInput'
        type="text"
        value={cat}
        onChange={(e) => setCat(e.target.value)}
        placeholder="Search by Categoery..."
      />
      <button className='submitSearch' type="submit">
         <FaSearch className="search-icon" />
      </button>
    </form>
  );
};

export default SearchInput;