import './Filter.css';

const Filter = ({selectedCategories, setSelectedCategories}) => {
    const categories=["DeFi", "NFT", "Gaming", "Wallet", "Education", "Media"];
    return(
        <div className="filter-wrapper">
            <div className="filter-header">
                Category:
            </div>
            <div className="filter-options">
                {categories.map(category => {
                    return(
                        <div className="filter-option">
                            <article class="feature1">
                                <input type="checkbox" id={`${category}`} onClick={() =>{
                                setSelectedCategories({...selectedCategories,
                                [category]: !selectedCategories[category]
                                })
                                console.log(selectedCategories);
                            }} />
                                <div>
                                <span>
                                    {category}
                                </span>
                                </div>
                            </article> 
                        </div>
                    )
                })}
                
            
            
            </div>
        </div>
    )
    
}

export default Filter;