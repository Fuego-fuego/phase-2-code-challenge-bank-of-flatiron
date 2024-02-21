import PropTypes from 'prop-types'


function Search ({search , onSearchChange}){

    return (

        
            <div className ="form-search | flex flex-column form-elements-wrapper bg-primary-100">
            <label className ="uppercase" htmlFor="date"> Search transaction by description </label>
            <input
            onChange={onSearchChange}
            placeholder = "Search... (is case sensitive)"
            value = {search}
            className = "form-input"
            type="text"
            name="date"
            required />
                </div>
        
    )
}

export default Search;

Search.propTypes = {
    search: PropTypes.string,
    onSearchChange: PropTypes.func,
}