import './SearchBar.css';

const SearchBar = ({handleSearch}) => {
    
    return(
        <div>

            <div className="search-box">
            <input 
            className = "search"
            type="search" 
            placeholder="Search for Projects"
            name="searchTerm"
            onChange={e =>{
                e.preventDefault();
                handleSearch(e.target.value);
            }}
            />
            </div>

        </div>
        

         
    )
}

export default SearchBar;