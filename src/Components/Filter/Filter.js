import './Filter.css';

const Filter = ({selectedCategories, setSelectedCategories, select, setSelect}) => {
    const categories=["DeFi", "NFT", "Gaming", "Wallet", "Education", "Media"];
    return(
        <div className="filter-wrapper">
            <div className="filter-header">
                Category:
            </div>
            <div className="filter-options">
                {categories.map(category => {
                    return(
                        <div className="filter-option" key={category}>
                            <article className="feature1">
                                <input type="checkbox" id={`${category}`} onClick={() =>{
                                setSelectedCategories({...selectedCategories,
                                [category]: !selectedCategories[category]
                                
                                })
                            }}
                            />
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