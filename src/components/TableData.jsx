import PropTypes from 'prop-types'

function TableData({id,date, description,category,amount}){

    return (
        <tr>
        <td className="capitalize">{id}</td> {/* transaction number (id) */}
        <td className="capitalize">{date}</td> {/* date (date) */}
        <td className="capitalize">{description}</td> {/* description (description) */}
        <td className="capitalize">{category}</td> {/* category (category) */}
        <td className="capitalize">{amount}</td> {/* amount (amount) */}
        </tr>
    )
}

export default TableData;

TableData.propTypes = {
    id: PropTypes.number,
    date: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    amount: PropTypes.oneOfType([        
        PropTypes.number,
        PropTypes.string    
    ])
}