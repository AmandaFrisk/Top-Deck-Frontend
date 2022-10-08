//This is imported in view-single-deck.js -AF
import PropTypes from 'prop-types';
// delete this if not used: import { Link } from 'react-router-dom';
const Delete = ({onClick}) => {
    return (
        <div onClick={onClick} style={{border: '1px solid black', margin: "5%", textAlign: "center"}}>
        {/* NEED TO FIGURE OUT HOW DELETE IS GOING TO WORK. DELETE NEEDS TO APPLY TO EACH CARD -AF */}
        <div>Delete</div>
    </div>
    )
}
Delete.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Delete
